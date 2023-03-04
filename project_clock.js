function rotation(){
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    let H =(30*h)+(m/2)+(s/120);
    let M =(6*m)+(s/10);
    let S =(6*s);

    let hourHand = document.getElementById("hour");
    hourHand.style.transform = 'rotate('+H+'deg)';
    let minHand = document.getElementById("min");
    minHand.style.transform = 'rotate('+M+'deg)';
    let secHand = document.getElementById("sec");
    secHand.style.transform = 'rotate('+S+'deg)';

    let bodycolor = document.querySelector("body");
    let clock = document.getElementById('clock');
    let sec = document.getElementById('sec');
    let min = document.getElementById('min');
    let hour = document.getElementById('hour');
    let center = document.getElementById('center');
    
    if(h>=6 && h<18){
        bodycolor.style.backgroundColor = 'skyblue';
        clock.style.backgroundImage = "url('Untitled-2.png')";
        clock.style.backgroundColor = 'white';
        
        sec.style.backgroundColor = '#e70429';
        min.style.backgroundColor = '#292826';
        hour.style.backgroundColor = '#292826';
        center.style.backgroundColor ='#d9bec2'
        
    }
};
setInterval(rotation,1000);
