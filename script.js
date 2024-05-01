var MainImg = document.getElementById("MainImg");
        var smalling = document.getElementsByClassName("small-img");
        smalling[0].onclick = function () {
            MainImg.src = smalling[0].src;
        }
        smalling[1].onclick = function () {
            MainImg.src = smalling[1].src;
        }
        smalling[2].onclick = function () {
            MainImg.src = smalling[2].src;
        }
        smalling[3].onclick = function () {
            MainImg.src = smalling[3].src;
        }





const colorOptions = document.querySelectorAll('.color-option');

function selectColor(event) {
    colorOptions.forEach(button => button.classList.remove('active'));

    const selectedButton = event.target;
    selectedButton.classList.add('active');

    const selectedColor = selectedButton.getAttribute('data-color');

    document.getElementById('selected-color').innerText = `Selected color: ${selectedColor}`;
}

colorOptions.forEach(button => {
    button.addEventListener('click', selectColor);
});


const form = document.getElementById('size-form');


form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const selectedSize = form.size.value;
    
    
});



const quantityInput = document.getElementById('quantity');
const quantityBtn = document.getElementById('quantity-btn');
const submitBtn = document.getElementById('submit-btn');


quantityBtn.addEventListener('click', (event) => {
    const target = event.target; 

    
    if (target.tagName === 'SPAN') {
        let currentValue = parseInt(quantityInput.value, 10);

        if (target.innerText === '-') {
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        } else if (target.innerText === '+') {
            quantityInput.value = currentValue + 1;
        }
    }
});


document.querySelectorAll('.color-option').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.color-option').forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
    });
});


function addToCart() {
    
    const colorButtons = document.querySelectorAll('.color-option');
    let selectedColor = '';
    
    
    colorButtons.forEach(button => {
        if (button.classList.contains('selected')) {
            selectedColor = button.dataset.color;
        }
    });
    
    
    const colorDisplayElement = document.getElementById('selected-color');
    if (colorDisplayElement) {
        colorDisplayElement.textContent = `Selected Color: ${selectedColor}`;
    }
    
    
    const sizeForm = document.getElementById('size-form');
    const selectedSize = sizeForm.elements['size'].value;
    
    
    const notification = document.getElementById('notification');
    
    
    let message = `Embrace Sideboard with Color ${selectedColor} and Size ${selectedSize} added to cart`;
    
   
    notification.textContent = message;
    notification.style.display = 'block';
    
    
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000); 
}


