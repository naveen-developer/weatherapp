//const url = 'https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=0c58bd1382104307fa9a0cb5dff28b82';

const city_name = document.getElementById('city_name');
const search_btn = document.getElementById('search_btn');
const msg = document.getElementById('msg');
const my_deg = document.getElementById('my_deg');
const current_day = document.getElementById('current_day');
const current_month = document.getElementById('current_month');
const my_msg = document.getElementById("msg");


const getCurrentDay = () => {
	 
    var weekday = new Array(7);
       weekday[0] = "Sunday";
       weekday[1] = "Monday";
       weekday[2] = "Tuesday";
       weekday[3] = "Wednesday";
       weekday[4] = "Thursday";
       weekday[5] = "Friday";
       weekday[6] = "Saturday";
    
    let currentDay = new Date();
    //console.log(weekday[currentDay.getDay()]);
    let day = 	weekday[currentDay.getDay()] + " ";
    return day;
   };
   
   const getCurrentTime = () => {
       var currentTime = new Date();
       var month = currentTime.getMonth();
       var months = [
           "JAN",
           "FEB",
           "MAR",
           "APR",
           "MAY",
           "JUN",
           "JUL",
           "AUG",
           "SEP",
           "OCT",
           "NOV",
           "DEC"
       ];
       
       var date = currentTime.getDate();
       
       let hours = currentTime.getHours();
       let mins = currentTime.getMinutes();
       
       let periods = "AM"
       if(hours > 11){
           periods = "PM";
           if(hours > 12) hours -= 12;
       }
       if(mins < 10){
           mins = "0" + mins;
       }
       
       //console.log(months[month] + "/" + date);
       //console.log(hours + "/" + mins);
       
       let time = `${date} th ${months[month]} | ${hours}:${mins}${periods}`;
       return time;
   }
   
   getCurrentDay();
   getCurrentTime();
   
   current_day.innerHTML = getCurrentDay();
   current_month.innerHTML = getCurrentTime();









const getInfo = async () => {
   // alert(city_name.value);
   if(city_name.value === ""){
        //alert("Please enter City name");
        my_msg.innerHTML = "Please enter City name";
   }else{
    try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name.value}&appid=0c58bd1382104307fa9a0cb5dff28b82`;
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];
        console.log(arrData[0]);
        msg.innerHTML = `${arrData[0].name}, ${arrData[0].sys.country}`
    
        const count = (arrData[0].main.temp)/10;
        const str_count = count.toString();
        const result = Number(str_count.slice(0, 5));
        my_deg.innerHTML = `${result}`
       }catch(err){
           console.log(err);
       }
   }
}

search_btn.addEventListener('click', getInfo)
