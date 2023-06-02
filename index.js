const bgsuris = [
    "https://images.pexels.com/photos/15619817/pexels-photo-15619817/free-photo-of-woman-on-pools-with-water-among-salt-walls.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/15193665/pexels-photo-15193665/free-photo-of-cubes-and-wooden-boxes.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/16389397/pexels-photo-16389397/free-photo-of-person-in-a-yellow-coat-standing-on-a-rock-in-a-mountain-valley.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/4652275/pexels-photo-4652275.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3265456/pexels-photo-3265456.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];
  
  const currentTime = () => {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let session = "AM";
    let greet = "Good Morning";
  
  //   localStorage.setItem('date', 2);
  
  
      //check if the date is different from the one in local storage and set a new background image
    if (localStorage.getItem("date") !== date.getDate().toString()) {
        let randomImage = bgsuris[Math.floor(Math.random() * bgsuris.length)];
        localStorage.setItem("date", date.getDate());
      localStorage.setItem("bg", randomImage);
    }
  
    console.log(localStorage.getItem("date") !== date.getDate().toString());
  
    if (hh === 0) {
      hh = 12;
    }
  
    if (hh === 12) {
      session = "PM";
    }
  
    if (hh > 12) {
      // hh = hh - 12;
      hh -= 12;
      session = "PM";
      greet = "Good Afternoon";
    }
    if (hh > 17) {
      greet = "Good Evening";
    }
  
    //Converting single digit numbers to double digits e.g 7 to 07
    hh = hh < 10 ? `0${hh}` : hh;
    mm = mm < 10 ? `0${mm}` : mm;
  
    let time = `${hh}:${mm} ${session}`;
  
    document.querySelector(".time").textContent = time;
    document.querySelector(".greet").textContent = greet;
  
    let t = setTimeout(() => currentTime(), 1000);
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    currentTime();
    let bg = document.querySelector(".main");
    localStorage.getItem("bg") &&
      (bg.style.backgroundImage = `url(${localStorage.getItem("bg")})`);
  });

