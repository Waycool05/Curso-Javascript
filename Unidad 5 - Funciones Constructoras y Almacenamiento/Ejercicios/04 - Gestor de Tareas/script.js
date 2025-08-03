// 4. **Gestor de Tareas**
//     - Clase Tarea con nombre y estado (completada).
//     - Clase Tareas con métodos para filtrar las completadas.
//     - Guarda las tareas en localStorage.

class Task{
    constructor(task, state=false) {
        this.task=task;
        this.state=state;
    }
}

class Tasks {
    constructor () {
        this.tasks =[];
        this.loadFromLocalStorage();
    }
    addTask(name) {
        const newTask= new Task(name);
        this.tasks.push(newTask);
        this.saveInLocalStorage();
        alert(`Nueva Tarea Añadida: ${name}`);
    }
    filterDone() {
        return this.tasks.filter(task => task.state);
    }
    filterUnDone(){
        return this.tasks.filter(task => !task.state);
    }
    doneTask(indext) {
        if (indext>=0 && indext < this.tasks.length) {
            this.tasks[indext].state = true;
            this.saveInLocalStorage();
            alert(`Tarea completada: "${this.tasks[indext].task}"`);
            return true;
        }
        return false;
    }
    deleteTask(indext) {
        if(indext>=0 && indext<this.tasks.length) {
            const taskDelete= this.tasks.splice (indext, 1)[0];
            this.saveInLocalStorage();
            alert(`Tarea eliminada: ${taskDelete.task}`);
            return true;
        }
        return false;
    }
    showTask() {
        if(this.tasks.length === 0) {
            alert(`No hay tareas Registradas. `);
            return;
        }
        alert(`\n Lista de Tareas:`);
        this.tasks.forEach((task, indext) => {
            const state = task.state ? `Completada` : `Pendiente`;
            alert (`${indext + 1}. ${task.task} - ${state}`);
        });
    }
    saveInLocalStorage() {
        try {
            localStorage.setItem(`Tareas`, JSON.stringify(this.tasks));
        } catch (error) {
            alert(`Error al guardar datos`,error);
        }
        
    }
    loadFromLocalStorage() {
        try {
            const data = localStorage.getItem(`Tareas`);
            if (data) {
                const taskParse= JSON.parse(data);
                this.tasks=taskParse.map(t=> new Task(t.task, t.state));
                alert (`${this.tasks.length} tareas cargadas desde la base de datos.`);
            }
        } catch (error){
            alert(`Error en la carga de datos.`);
            this.tasks=[];
        }
    }
}

function showMenu() {
    return `
- GESTOR DE TAREAS -
1. Agregar nueva tarea
2. Ver todas las tareas
3. Ver tareas completadas
4. Ver tareas pendientes
5. Completar tarea
6. Eliminar tarea
7. Salir

Selecciona una opción (1-7):`;
}

function taskManager() {
    const myTask = new Tasks();
    let flag=true;

    while(flag) {
        const menu = getInput(showMenu(),true);

        switch (menu) {
            case 1: 
                const nameTask = getInput('Ingresa el nombre de la nueva tarea:');
                if (nameTask) {
                    myTask.addTask(nameTask);
                    alert('agregado correctamente.')
                }
            break;
            case 2:
                myTask.showTask();
                break;
            case 3: 
                const done = myTask.filterDone();
                if (done.length===0) {
                    alert('No hay tareas para mostrar.')
                } else {
                    alert('Tareas completadas: ')
                    done.forEach((task,i) => {
                        alert(`${i+1}. ${task.task}`)

                    });
                }
                break;
            case 4: 
            const notDone= myTask.filterUnDone();
            if (notDone.length===0) {
                alert('No hay tareas pendientes.')
            }else {
                alert('Tareas Pendientes: ');
                notDone.forEach((task,i)=> {
                    alert(`${i+1}. ${task.task}`);
                });
            }
            break;
            case 5: 
            myTask.showTask();
            const indextDone= getInput('Ingresa el número de tarea a completar: ', true);
            if (indextDone !==null) {
                const indext = indextDone - 1;
                if (myTask.doneTask(indext)) {
                    alert('Tarea marcada como completada');
                }else {
                    alert('Número de tarea inválido');
                }
                
            }
            break;
            case 6: 
            myTask.showTask();
            const indextDelete= getInput('Ingrese el número de tarea a eliminar:');
            if (indextDelete!==null) {
                const indext = indextDelete - 1;
                if (myTask.deleteTask(indext)) {
                    alert('Tarea eliminada correctamente.')
                }else {
                    alert('Número de tarea Inválida.')
                }
            }
            break;
            case 7:
                flag=false;
                alert('Hasta luego!, tus tareas han sido guardadas.');
                break;
            default:
                alert('Opción Incorrecta, ingrese un número del 1 al 7.');
                break;
        }
        if (flag && menu !==7) {
            flag = askContinue();
        }
    }
}

taskManager();