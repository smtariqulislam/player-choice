let cart = [];
// products-cart

let c = 0;

function displayProduct(cart) {

    const tableBody = document.getElementById('player-product')


    tableBody.textContent = '';




    for (let i = 0; i < cart.length; i++) {

        console.log(cart.length);
        let name = cart[i].playerName;
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${cart[i].playerName}</td>
        `;

        tableBody.appendChild(tr);

    }


    document.getElementById('calculate').addEventListener('click', function () {





        const playerField = document.getElementById('player');
        const playerAmountString = playerField.value;
        const playerAmount = parseFloat(playerAmountString);







        const playerElement = document.getElementById('player-calculate');
        const playerTotalString = playerElement.innerText;
        const playerTotal = parseFloat(playerTotalString);


        playerElement.innerText = playerAmount * c;




    })

}


function addToCart(element) {

    element.disabled = true;



    const playerName = element.parentNode.parentNode.children[0].innerText;



    const players = {
        playerName: playerName,

    };

    if (c == 5) {
        element.disabled = false;
        return alert('Add no more than 5.');
    }
    cart.push(players);
    c++;


    displayProduct(cart);
} 
