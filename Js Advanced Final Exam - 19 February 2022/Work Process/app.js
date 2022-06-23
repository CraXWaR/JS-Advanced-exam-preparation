function solve() {
    const input = {
        fname: document.getElementById('fname'),
        lname: document.getElementById('lname'),
        email: document.getElementById('email'),
        birth: document.getElementById('birth'),
        position: document.getElementById('position'),
        salary: document.getElementById('salary')
    }

    const sections = {
        table: document.getElementById('tbl-header')
    }

    let budget = 0

    let hireBtn = document.getElementById('add-worker')
    hireBtn.addEventListener('click', addWorker)

    function addWorker(e) {
        e.preventDefault();
        let firstName = input.fname.value
        let lastName = input.lname.value
        let email = input.email.value
        let birth = input.birth.value
        let position = input.position.value
        let salary = input.salary.value

        if (firstName == ''|| lastName == ''|| email == '' || birth == '' || position == '' || salary == '') {
            return; 
        }
        let tbody = document.querySelector('tbody')

        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        td1.textContent = firstName
        let td2 = document.createElement('td')
        td2.textContent = lastName
        let td3 = document.createElement('td')
        td3.textContent = email
        let td4 = document.createElement('td')
        td4.textContent = birth
        let td5 = document.createElement('td')
        td5.textContent = position
        let td6 = document.createElement('td')
        td6.textContent = salary
        let tdBtns = document.createElement('td')
        let firedBtn = document.createElement('button')
        firedBtn.classList.add('fired')
        firedBtn.textContent = 'Fired'
        firedBtn.addEventListener('click', fire)
        let editBtn = document.createElement('button')
        editBtn.classList.add('edit')
        editBtn.textContent = 'Edit'
        editBtn.addEventListener('click', edit)

        let sum = document.getElementById('sum')
        budget += Number(salary)
        sum.textContent = budget.toFixed(2)

        tdBtns.appendChild(firedBtn)
        tdBtns.appendChild(editBtn)

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        tr.appendChild(td6)
        tr.appendChild(tdBtns)

        tbody.appendChild(tr)

        input.fname.value = ''
        input.lname.value = ''
        input.email.value = ''
        input.birth.value = ''
        input.position.value = ''
        input.salary.value = ''

        function edit(e) {
            e.currentTarget.editBtn
            input.fname.value = firstName
            input.lname.value = lastName
            input.email.value = email
            input.birth.value = birth
            input.position.value = position
            input.salary.value = salary

            budget -= Number(salary)
            sum.textContent = budget.toFixed(2)
            tr.remove()
        }
        function fire(e) {
            e.currentTarget.firedBtn

            budget -= Number(salary)
            sum.textContent = budget.toFixed(2)
            tr.remove()
        }
    }
}
solve()