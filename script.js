// const boxWrapper = document.querySelector(".box-wrapper")

// const booksData = './data.json'

// async function getBooksData(url){
//     const res = await fetch(url)
//     const data = await res.json()

//     // return console.log(data)
//     showBooks(data)
// }
// getBooksData(booksData)

// function showBooks(booksDetails){

//     boxWrapper.innerHTML = ''

//     booksDetails.forEach(bookDetail => {
//         const {author, title, imageLink, price,description} = bookDetail

//         // console.log(author, title, imageLink, price,description)
//         const booksEl = document.createElement("div")
//         booksEl.classList.add("box")

//         booksEl.innerHTML = `
//             <div class="box-img">
//               <img src="${imageLink}" alt="">
//             </div>
//             <div class="box-text">
//                 <div class="box-title">${title}</div>
//                 <div class="box-author" >${author}</div>
//                 <div class="box-desc">${description}</div>
//                 <div class="box-price">${price} $</div>
//                 <div class="btns flex justify-between align-center">
//                     <p class="show" >Show More</p>
//                     <button class="btn" >
//                         Add To Card
//                     </button>
//                 </div>
//             </div>
//         `
//         boxWrapper.appendChild(booksEl)
//     });
// }

const app = {
    addWrapper(){
        const wrapper = document.createElement('div')
        document.body.prepend(wrapper)
        wrapper.classList.add("container")
    },

    createElement(element,name, className,position){
        name.document.createElement(element)
        position.prepend(name)
        name.classList.add(className)
    },

    createImg(name, className, position, src) {
        name = document.createElement('img');
        position.append(name);
        name.classList.add(className);
        name.src = src;
        name.alt = className;
    },

    

}