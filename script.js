let form = document.getElementById('form');
let taskList = []

function addTask() {
    form.addEventListener('submit', function(event) {
        // evitar que o formulario recarregue após o submit
        event.preventDefault();

        // Element do input
        let task = document.getElementById('task');
        let inputValue = task.value.trim();

        if(inputValue !== '') {
            //console.log('valor:'+ inputValue)
            taskList.push(inputValue);
            console.log(taskList);
            task.value = '';
            showList();

        }
    })
}

function showList() {
    //let list = document.getElementsByTagName('ul')[0];
    let list = document.getElementById('lista')
    console.log(list)

    list.innerHTML = ''
    //percorrer cada elemento da lista e imprimir, conferir se estar lendo cada task adicionado no array
    taskList.forEach(function(item, index) {
        //console.log(item)

        //Criou a tag li para cada elemento da lista
        const li = document.createElement('li');
        li.classList.add('list-group-item')

        //Criar o elemento de texto
        const texto = document.createTextNode(item);
        //inserir o texto dentro do li
        li.appendChild(texto);

        //criar o botão para remover
        let button = document.createElement('button');
        button.classList.add('btn', 'btn-danger', 'float-end');
        button.dataset.index = index;

        const x = document.createTextNode('X');
        button.appendChild(x);

        button.addEventListener('click', function(e) {
            // Acessar 
            let index = e.target.dataset.index;
            console.log(index)

            // remover elemento do array através do index, que colocamos na referencia do botao
            // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
            taskList.splice(index, 1)
            showList();
        })

        li.appendChild(button)
        //inserir a li na ul
        list.appendChild(li)
    })


}