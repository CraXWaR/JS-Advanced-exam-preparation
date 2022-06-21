window.addEventListener('load', solve);

function solve() {
    let sendBtnElement = document.querySelector('#right form button')
    sendBtnElement.addEventListener('click', send)

    let productTypeElement = document.querySelector('#type-product')
    let descriptionTextEelemnt = document.querySelector('#description')
    let clientNameElement = document.querySelector('#client-name')
    let clientPhoneElement = document.querySelector('#client-phone')

    let recivedOrdersElement = document.querySelector('#received-orders')
    let completedOrdersElement = document.querySelector('#completed-orders')

    let clearBtnElement = document.querySelector('#completed-orders button')
    clearBtnElement.addEventListener('click', clear)

    function send(e) {
        e.preventDefault()

        let productType = productTypeElement.value
        let description = descriptionTextEelemnt.value
        let clientName = clientNameElement.value
        let clientPhone = clientPhoneElement.value

        if (description == '' || clientName == '' || clientPhone == '') {
            return;
        }
        productTypeElement.value = ''
        descriptionTextEelemnt.value = ''
        clientNameElement.value = ''
        clientPhoneElement.value = ''

        //TODO...
        let containerDivElement = document.createElement('div')
        containerDivElement.classList.add('container')
        let h2Element = document.createElement('h2')
        h2Element.textContent = `Product typ    e for repair: ${productType}`
        let h3Element = document.createElement('h3')
        h3Element.textContent = `Client information: ${clientName}, ${clientPhone}`
        let h4Element = document.createElement('h4')
        h4Element.textContent = `Description of the problem: ${description}`
        
        let startBtn = document.createElement('button')
        startBtn.classList.add('start-btn')
        startBtn.textContent = 'Start Repair'
        let finishBtn = document.createElement('button')
        finishBtn.classList.add('finish-btn')
        finishBtn.textContent = 'Finish Repair'
        finishBtn.disabled = true;

        startBtn.addEventListener('click', startEvent)
        finishBtn.addEventListener('click', finishEvent)

        containerDivElement.appendChild(h2Element)
        containerDivElement.appendChild(h3Element)
        containerDivElement.appendChild(h4Element)
        containerDivElement.appendChild(startBtn)
        containerDivElement.appendChild(finishBtn)

        recivedOrdersElement.appendChild(containerDivElement)
    }
    function startEvent(e) {
        e.currentTarget.disabled = true;
        e.currentTarget.parentNode.querySelector('.finish-btn').disabled = false; 
    }
    function finishEvent(e) {
        let containerDiv = e.currentTarget.parentNode
        e.currentTarget.remove()
        containerDiv.querySelector('.start-btn').remove()

        containerDiv.remove()
        completedOrdersElement.appendChild(containerDiv)
    }
    function clear(e) {
        let allContainer = Array.from(e.currentTarget.parentNode.querySelectorAll('.container'))

        for (const containers of allContainer) {
            containers.remove()
        }
    }
}