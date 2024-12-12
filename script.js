// let date = new Date()
// console.log(date.getMinutes())



let clock =()=>{
   let date = new Date()
   let month_num = date.getMonth()
   let day = date.getDay()
   let hours = date.getHours()
   let minutes = date.getMinutes()
   let seconds = date.getSeconds()


   if(hours<9)hours="0"+hours
   if(minutes<9)minutes="0"+minutes
   if(seconds<10)seconds="0"+seconds


let month = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]
console.log()

//    let date_time = "Бугун : " + day + "-"+ ( month[month_num]) + "-"+" cаат "+hours+":"+minutes + ":" +seconds
   let date_time = +hours+":"+minutes + ":" +seconds

   let element =document.getElementById('time').innerHTML = date_time
//    console.log(element)

   console.log(date_time)
   setInterval(() => {
    clock()
   },1000);
}

clock()