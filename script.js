const boxWrapper = document.querySelector(".box-wrapper")
const btn = document.querySelector(".btn")
const shopCounter = document.querySelector(".shop-counter")

const booksData = './data.json'

async function getBooksData(url){
    const res = await fetch(url)
    const data = await res.json()

    // return console.log(data)
    showBooks(data)
}
getBooksData(booksData)

function showBooks(booksDetails){

    boxWrapper.innerHTML = ''

    booksDetails.forEach(bookDetail => {
        const {author, title, imageLink, price,description} = bookDetail

        const mainBox = document.createElement('div')
        mainBox.classList.add('box')
        boxWrapper.appendChild(mainBox)

        const boxImg = document.createElement('div')
        boxImg.classList.add('box-img')
        const img = document.createElement('img')
        img.setAttribute('src', imageLink)
        img.setAttribute('alt', title);
        boxImg.prepend(img)
        mainBox.appendChild(boxImg)
        

        const boxText = document.createElement('div')
        boxText.classList.add('box-text')
        mainBox.appendChild(boxText)

        const btnBox = document.createElement('div')
        btnBox.classList.add('btns')
        boxText.prepend(btnBox)

        const AddToCardBtn = document.createElement('button')
        AddToCardBtn.classList.add("btn")
        AddToCardBtn.textContent = 'Add To Card'
        btnBox.prepend(AddToCardBtn)
        AddToCardBtn.addEventListener('click', counter)

        const showDetail = document.createElement('p')
        showDetail.classList.add('show')
        showDetail.textContent = 'Show More'
        btnBox.prepend(showDetail)

        const boxPrice = document.createElement('div')
        boxPrice.classList.add('box-price')
        boxPrice.textContent = `$ ${price}`
        boxText.prepend(boxPrice)

        const boxDesc = document.createElement('div')
        boxDesc.classList.add('box-desc')
        boxDesc.textContent = description
        boxText.prepend(boxDesc)


        const boxAuthor = document.createElement('div')
        boxAuthor.classList.add('box-author')
        boxAuthor.textContent = author
        boxText.prepend(boxAuthor)

        const boxTitle = document.createElement('div')
        boxTitle.classList.add('box-title')
        boxTitle.textContent = title
        boxText.prepend(boxTitle)

    });
}

let count = 0
function counter(){
    count++
    shopCounter.textContent = count
}