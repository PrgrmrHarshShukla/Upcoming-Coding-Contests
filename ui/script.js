
const f1 = async () => {
   let p = await fetch("https://kontests.net/api/v1/all")
   let response = await p.json()
   return response
}

let date = new Date().getDate()
// let date = 8
let zero = 0

realDate = `date>10 ? date : (zero + date)`
// realDate = Number.parseInt(realDate)

let month = new Date().getMonth()
let year = new Date().getFullYear()
// console.log(date, month, year, realDate);
// console.log(`${year}-0${month}-${realDate}`);

const f2 = async () => {
   let a = await f1()
   // console.log(a);

   for(let index in a){
      // console.log(a[index].name);
      // console.log(a[index].url);
      let starting_date = a[index].start_time.slice(0, 10)
      // console.log(starting_date);
      let starting_time = a[index].start_time.slice(11, 16)

      if( starting_date < `${year}-0${month}-20` ){
         continue;
      }

      let extra = document.getElementById("extra")
    
      
      let div = document.createElement("div")
      div.id = "dc" + index
      div.class = "dc"
      extra.appendChild(div)

      let el = document.getElementById("dc" + index)

      el.style.border = "2px white solid"
      el.style.borderRadius = "20px"
      el.style.display = "flex"
      el.style.flexDirection = "column"
      el.style.justifyContent = "center"
      el.style.alignItems = "center"
      el.style.gap = "5px"
      el.style.width = "maxcontent"
      el.style.minWidth = "300px"
      el.style.maxWidth = "500px"
      el.style.minHeight = "350px"
      el.style.maxHeight = "500px"
      el.style.padding = "2px"
      el.style.margin = "10px"
      el.style.color = "black"
      el.style.background = "rgb(141, 200, 230)"

      
     
      // console.log(starting_date);
      // console.log(starting_time);

      el.insertAdjacentHTML('afterbegin', `<h2 id=${"name" + index}>${a[index].name}</h2>`)

      let elName = document.getElementById(`${"name" + index}`)

      elName.style.textAlign = "center"
      elName.style.maxWidth = "300px"
      elName.style.fontWeight = "900"
      elName.style.color = "rgb(0, 3, 104)"


      el.insertAdjacentHTML('beforeend', `<h4 id=${"start_time_" + index}>Date: ${starting_date}</h4>`)
      let elDate = document.getElementById(`${"start_time_" + index}`)
      elDate.style.textAlign = "left"
      elDate.style.minWidth = "150px"

      
      el.insertAdjacentHTML('beforeend', `<h4 id=${"starting_time" + index}>Starting Time: ${starting_time}</h4>`)
      let elTime = document.getElementById(`${"starting_time" + index}`)
      
      elTime.style.margin = "-10px"
      elTime.style.textAlign = "left"
      elTime.style.minWidth = "150px"
      
      el.insertAdjacentHTML('beforeend', `<h4 id=${"site" + index}>Site:  <a href=${a[index].url} target="_blank">${a[index].site}</a></h4>`)
      let elSite = document.getElementById(`${"site" + index}`)
      elSite.style.textAlign = "left"
      elSite.style.minWidth = "150px"
      
      

      // el.insertAdjacentHTML('beforeend', `<a id=${"link" + index} target="_blank" href=${a[index].url}>Contest Link</a>`)

      // let elLink = document.getElementById(`${"link" + index}`)
      // elLink.style.color = "rgb(0, 7, 104)"
      // elLink.style.fontSize = "20px"
      // elLink.style.fontWeight = "500"
      // elLink.style.marginLeft = "-50px"
   }


   document.body.appendChild(el1)
}

f2()

