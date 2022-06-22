function solve() {
    const input = {
        recipientName: document.getElementById('recipientName'),
        title: document.getElementById('title'),
        message: document.getElementById('message')
    }
 
    const sections = {
        list:  document.getElementById('list'),
        sentList:  document.querySelector('.sent-list'),
        deleteList:  document.querySelector('.delete-list'),
    }

    const addBtn =  document.getElementById('add');
    const resetBtn =  document.getElementById('reset');
    addBtn.addEventListener('click', onAdd);
    resetBtn.addEventListener('click', onResetBtn);
 
    function onAdd(ev){
        ev.preventDefault();

        let recipientName = input.recipientName.value;
        let title = input.title.value;
        let message = input.message.value;

        if(recipientName == '' || title == '' || message == ''){
            return;
        }
        let li = createElement('li', '', sections.list);
 
        li.innerHTML = `<h4>Title: ${title}</h4>
        <h4>Recipient Name: ${recipientName}</h4>
        <span>${message}</span>
        <div id="list-action">
            <button type="submit" id="send">Send</button>
            <button type="submit" id="delete">Delete</button>
        </div>`
        clearInput();
 
        let sendBtn = li.querySelector('#send');
        sendBtn.addEventListener('click', onSendBtn);
        let deleteBtn = li.querySelector('#delete');
        deleteBtn.addEventListener('click', onDeleteBtn);
        
 
        function onSendBtn(){
            
            sections.sentList.appendChild(li);
            li.innerHTML = `<span>To: ${recipientName}</span>
            <span>Title: ${title}</span>
            <div class="btn">
                <button type="submit" class="delete">Delete</button>
            </div>`;
            li.querySelector('button.delete').addEventListener('click', onDeleteBtn);
        };
 
        function onDeleteBtn(){
            
            sections.deleteList.appendChild(li);
            li.innerHTML = ` <span>To: ${recipientName}</span>
            <span>Title: ${title}</span>`;
        }
        
    }
    function onResetBtn(ev){
        ev.preventDefault();
        clearInput();
    }
 
    function clearInput(){
       input.recipientName.value = '';
       input.title.value = '';
       input.message.value = '';
    }
    
    function createElement(type, content, parentEl, className) {
        const element = document.createElement(type);
        element.textContent = content;
    
        if (className) {
            element.className = className;
        }
    
        parentEl.appendChild(element);
        return element;
    }
}
solve()