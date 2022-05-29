let NextBtn = document.querySelector('#next-btn');

function TextShadow(){
    let TextShadow = document.querySelector('#text-shadow').value

    if (TextShadow == "2px 2px 5px green") {
        document.querySelector('#text-shadow').classList.add('green')
        NextBtn.classList.add('active');
        NextBtn.classList.add('lv2');

        let inputs = document.querySelectorAll('.exercises > pre > input')
        
        for(elem of inputs){
            elem.setAttribute('disabled', '');
        }

        let level = document.querySelector('.lv2');

        level.addEventListener("click", function(){
            NextBtn.classList.remove('active');
            document.querySelector('.question').innerHTML = `
            Օգտագործեք CSS պատկերի թափանցիկությունը 50% սահմանելու համար:`
            document.querySelector('.exercises > pre').innerHTML = `<span><</span>style>
img {
    <input type="text" id="opacity" style="width: 53px" oninput="Opacity()" maxlength="7">: <input type="text" id="opacity2" style="width: 24px" oninput="Opacity()" maxlength="3">
}
<span><</span>/style>

<span><</span>body>
    <span><</span>img src="klematis.jpg" width="150" height="113">
<span><</span>/body>`;
        })

        document.querySelector('#lvl2').innerHTML = `
        <img src="./image/icons/open-lock.svg" alt="">`;

        document.querySelector('#lvl2').classList.remove('closed')
        document.querySelector('#lvl2').classList.add('open')

    }else{
        document.querySelector('#text-shadow').classList.remove('green')
        NextBtn.classList.remove('active');
        NextBtn.classList.remove('lv2');
    }
};

// -------------------levels------------------

function Opacity(){
    let Opacity = document.querySelector('#opacity').value
    let Opacity2 = document.querySelector('#opacity2').value

    if (Opacity == "opacity") {
        document.querySelector('#opacity').classList.add('green')

        if (Opacity2 == "0.5") {
            document.querySelector('#opacity2').classList.add('green')
            NextBtn.classList.add('active');
            NextBtn.classList.add('lv3');
            NextBtn.classList.remove('lv2');

            let inputs = document.querySelectorAll('.exercises > pre > input')
            
            for(elem of inputs){
                elem.setAttribute('disabled', '');
            }

            let level = document.querySelector('.lv3');

            level.addEventListener("click", function(){
                document.querySelector('.question').innerHTML = `
                Սահմանեք գծային գրադիենտ ֆոն <uu><span><</span>div></uu> տարրի համար՝ անցնելով ձախից աջ:`
                document.querySelector('.exercises > pre').innerHTML = `<span><</span>style>
    div {
        background-image: linear-gradient(<input type="text" id="gradient" style="width: 53px" oninput="Gradient()" maxlength="8">, white, green);
    }
<span><</span>/style>
                
<span><</span>body>
    <span><</span>div style="height:200px"></div>
<span><</span>/body>`;
            })

            document.querySelector('#lvl3').innerHTML = `
            <img src="./image/icons/open-lock.svg" alt="">`;

            document.querySelector('#lvl3').classList.remove('closed')
            document.querySelector('#lvl3').classList.add('open')
        }
    }else{
        document.querySelector('#opacity').classList.remove('green')
        document.querySelector('#opacity2').classList.remove('green')
        NextBtn.classList.remove('active');
        NextBtn.classList.remove('lv3');
    }
};



function Gradient(){
    let Gradient = document.querySelector('#gradient').value

    if (Gradient == "to right") {
        document.querySelector('#gradient').classList.add('green')
            NextBtn.classList.add('active');
            NextBtn.classList.add('lv4');
            NextBtn.classList.remove('lv3');

            let inputs = document.querySelectorAll('.exercises > pre > input')
            
            for(elem of inputs){
                elem.setAttribute('disabled', '');
            }

            let level = document.querySelector('.lv4');

            level.addEventListener("click", function(){
                document.querySelector('.question').innerHTML = `
                Տեղադրեք <uu><span><</span>div></uu> տարրը աջ մասում՝ օգտագործելով բացարձակ դիրքավորում:`
                document.querySelector('.exercises > pre').innerHTML = `<span><</span>style>
    .intro {
      width: 200px;
      margin: auto;
      <input type="text" id="align" style="width: 57px" oninput="Align()" maxlength="8">: absolute;
      <input type="text" id="align2" style="width: 34px" oninput="Align()" maxlength="8">: 0px;
    }
<span><</span>/style>
                
<span><</span>body>
                
    <span><</span>div class="intro">
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
    <span><</span>/div>                
<span><</span>/body>`
            
        })
            document.querySelector('#lvl4').innerHTML = `
            <img src="./image/icons/open-lock.svg" alt="">`;

            document.querySelector('#lvl4').classList.remove('closed')
            document.querySelector('#lvl4').classList.add('open')

    }else{
        document.querySelector('#gradient').classList.remove('green')
        NextBtn.classList.remove('active');
        NextBtn.classList.remove('lv4');
    }
};


function Align(){
    let Align = document.querySelector('#align').value
    let Align2 = document.querySelector('#align2').value

    if (Align == "position") {
        document.querySelector('#align').classList.add('green')

        if (Align2 == "right") {
            document.querySelector('#align2').classList.add('green')
            NextBtn.classList.add('active');
            NextBtn.classList.add('lv5');
            NextBtn.classList.remove('lv4');

            let inputs = document.querySelectorAll('.exercises > pre > input')
            
            for(elem of inputs){
                elem.setAttribute('disabled', '');
            }

            let level = document.querySelector('.lv5');

            level.addEventListener("click", function(){
                document.querySelector('.question').innerHTML = `
                Սահմանեք <uu><span><</span>img></uu> տարրերի համար border, որոնք ունեն վերնագրի հատկանիշ և պարունակում են կապույտ բառը:`
                document.querySelector('.exercises > pre').innerHTML = `<span><</span>style>
img<input type="text" id="attribute" style="width: 95px" oninput="Attribute()" maxlength="15">{
  border: 5px solid red;
}
<span><</span>/style>
                
<span><</span>body>
    <span><</span>img src="klematis.jpg" title="blue flower">
    <span><</span>img src="klematis2.jpg" title="purple flowers">
    <span><</span>img src="klematis3.jpg" title="two blue flowers">  
<span><</span>/body>`;
            })

            document.querySelector('#lvl5').innerHTML = `
            <img src="./image/icons/open-lock.svg" alt="">`;

            document.querySelector('#lvl5').classList.remove('closed')
            document.querySelector('#lvl5').classList.add('open')

        }
    }else{
        document.querySelector('#align').classList.remove('green')
        document.querySelector('#align2').classList.remove('green')
        NextBtn.classList.remove('active');
        NextBtn.classList.remove('lv5');
    }
};


function Attribute(){
    let Attribute = document.querySelector('#attribute').value

    if (Attribute == '[title~="blue"]') {
        document.querySelector('#attribute').classList.add('green')
            NextBtn.classList.add('active');
            NextBtn.classList.add('lv6');
            NextBtn.classList.remove('lv5');

            let inputs = document.querySelectorAll('.exercises > pre > input')
            
            for(elem of inputs){
                elem.setAttribute('disabled', '');
            }

            let level = document.querySelector('.lv6');

            level.addEventListener("click", function(){
                document.querySelector('.question').innerHTML = `
                Տեղադրեք երկու ֆոնային պատկերները յուրաքանչյուր վերին անկյունում: <br>
                <uu>img1.gif</uu> ձախ կողմում և <uu>img2.gif</uu> աջ կողմում:`
                document.querySelector('.exercises > pre').innerHTML = `<span><</span>style>
body {
  background-image: url('img1.gif'), url('img2.gif');
  background-repeat: no-repeat, no-repeat;
  <input type="text" id="background" style="width: 147px" oninput="Background()" maxlength="19">: <input type="text" id="background2" style="width: 51px" oninput="Background()" maxlength="8">, <input type="text" id="background3" style="width: 60px" oninput="Background()" maxlength="9">;
}
<span><</span>/style>
                
<span><</span>body>
    <span><</span>h1>This is a heading<span><</span>/h1>
    <span><</span>p>This is a paragraph<span><</span>/p>
<span><</span>/body>`
            
        })
            document.querySelector('#lvl6').innerHTML = `
            <img src="./image/icons/open-lock.svg" alt="">`;

            document.querySelector('#lvl6').classList.remove('closed')
            document.querySelector('#lvl6').classList.add('open')

    }else{
        document.querySelector('#attribute').classList.remove('green')
        NextBtn.classList.remove('active');
        NextBtn.classList.remove('lv6');
    }
};


function Background(){
    let Background = document.querySelector('#background').value
    let Background2 = document.querySelector('#background2').value
    let Background3 = document.querySelector('#background3').value

    if (Background == "background-position") {
        document.querySelector('#background').classList.add('green')

        if (Background2 == "left top") {
            document.querySelector('#background2').classList.add('green')

            if (Background3 == "right top") {
                document.querySelector('#background3').classList.add('green')
                NextBtn.classList.add('active');
                NextBtn.classList.add('lv7');
                NextBtn.classList.remove('lv6');
    
                let inputs = document.querySelectorAll('.exercises > pre > input')
                
                for(elem of inputs){
                    elem.setAttribute('disabled', '');
                }
    
                let level = document.querySelector('.lv7');
    
                level.addEventListener("click", function(){
                    document.querySelector('.question').innerHTML = `
                    Ավելացրեք 2 վայրկյան անցումային էֆեկտ ֆոնի համար և փոխակերպեք <uu><span><</span>div></uu> տարրի փոփոխությունները:`
                    document.querySelector('.exercises > pre').innerHTML = `<span><</span>style>
div {
  width: 100px;
  height: 100px;
  background: red;
  transition: <input type="text" id="transition" style="width: 105px" oninput="Transition()" maxlength="13">, <input type="text" id="transition2" style="width: 91px" oninput="Transition()" maxlength="12">;
}
                    
div:hover {
  background: blue;
  transform: rotate(180deg);
}
<span><</span>/style>

<span><</span>body>
    <span><</span>div>This is a div<span><</span>/div>
<span><</span>/body>`;
                })
    
                document.querySelector('#lvl7').innerHTML = `
                <img src="./image/icons/open-lock.svg" alt="">`;
    
                document.querySelector('#lvl7').classList.remove('closed')
                document.querySelector('#lvl7').classList.add('open')

            }
        }
    }else{
        document.querySelector('#background').classList.remove('green')
        document.querySelector('#background2').classList.remove('green')
        document.querySelector('#background3').classList.remove('green')
        NextBtn.classList.remove('active');
        NextBtn.classList.remove('lv7');
    }
};


function Transition(){
    let Transition = document.querySelector('#transition').value
    let Transition2 = document.querySelector('#transition2').value

    if (Transition == "background 2s") {
        document.querySelector('#transition').classList.add('green')

        if (Transition2 == "transform 2s") {
            document.querySelector('#transition2').classList.add('green')
            
                NextBtn.classList.add('active');
                NextBtn.classList.add('lv8');
                NextBtn.classList.remove('lv7');
    
                let inputs = document.querySelectorAll('.exercises > pre > input')
                
                for(elem of inputs){
                    elem.setAttribute('disabled', '');
                }
    
                let level = document.querySelector('.lv8');
    
                level.addEventListener("click", function(){
                    document.querySelector('.question').innerHTML = `
                    Ավելացրեք վեբ տառատեսակ «sansation» անունով և «sansation_light.woff» URL-ով:`
                    document.querySelector('.exercises > pre').innerHTML = `<span><</span>style>
<input type="text" id="font" style="width: 81px" oninput="Font()" maxlength="10">{
  font-family: <input type="text" id="font2" style="width: 69px" oninput="Font()" maxlength="9">;
  <input type="text" id="font3" style="width: 22px" oninput="Font()" maxlength="3">: <input type="text" id="font4" style="width: 180px" oninput="Font()" maxlength="27">;
}
                    
body {
  font-family: sansation;
}
<span><</span>/style>
                    
<span><</span>body>
    <span><</span>h1>This is a heading<span><</span>/h1>
    <span><</span>p>This is a paragraph<span><</span>/p>
    <span><</span>p>This is a paragraph<span><</span>/p>
<span><</span>/body>`
                
            })
                document.querySelector('#lvl8').innerHTML = `
                <img src="./image/icons/open-lock.svg" alt="">`;
    
                document.querySelector('#lvl8').classList.remove('closed')
                document.querySelector('#lvl8').classList.add('open')

        }
    }else{
        document.querySelector('#transition').classList.remove('green')
        document.querySelector('#transition2').classList.remove('green')
        NextBtn.classList.remove('active');
        NextBtn.classList.remove('lv8');
    }
};


function Font(){
    let Font = document.querySelector('#font').value
    let Font2 = document.querySelector('#font2').value
    let Font3 = document.querySelector('#font3').value
    let Font4 = document.querySelector('#font4').value

    if (Font == "@font-face") {
        document.querySelector('#font').classList.add('green')

        if (Font2 == "sansation") {
            document.querySelector('#font2').classList.add('green')

            if (Font3 == "src") {
                document.querySelector('#font3').classList.add('green')

                if (Font4 == "url('sansation_light.woff')") {
                    document.querySelector('#font4').classList.add('green')
                    NextBtn.classList.add('active');
                    NextBtn.classList.add('lv9');
                    NextBtn.classList.remove('lv8');
        
                    let inputs = document.querySelectorAll('.exercises > pre > input')
                    
                    for(elem of inputs){
                        elem.setAttribute('disabled', '');
                    }
        
                    let level = document.querySelector('.lv9');
        
                    level.addEventListener("click", function(){
                        document.querySelector('.question').innerHTML = `
                        Նշեք, որ <uu><span><</span>div></uu> տարրի անիմացիան պետք է ունենա «ease-in-out» արագություն:`
                        document.querySelector('.exercises > pre').innerHTML = `<span><</span>style>
div {
  width: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  <input type="text" id="animation" style="width: 190px" oninput="Animation()" maxlength="25">: <input type="text" id="animation2" style="width: 91px" oninput="Animation()" maxlength="12">;
}
                        
@keyframes example {
  0%   {background-color: red; left:0px;}
  50%  {background-color: yellow; left:200px;}
  100% {background-color: red; left:0px;}
}
<span><</span>/style>
                        
<span><</span>body>
    <span><</span>div>This is a div</div>
<span><</span>/body>`;
                    })
        
                    document.querySelector('#lvl9').innerHTML = `
                    <img src="./image/icons/open-lock.svg" alt="">`;
        
                    document.querySelector('#lvl9').classList.remove('closed')
                    document.querySelector('#lvl9').classList.add('open')

                }
            }
        }
    }else{
        document.querySelector('#font').classList.remove('green')
        document.querySelector('#font2').classList.remove('green')
        document.querySelector('#font3').classList.remove('green')
        document.querySelector('#font4').classList.remove('green')
        NextBtn.classList.remove('active');
        NextBtn.classList.remove('lv9');
    }
};


function Animation(){
    let Animation = document.querySelector('#animation').value
    let Animation2 = document.querySelector('#animation2').value

    if (Animation == "animation-timing-function") {
        document.querySelector('#animation').classList.add('green')

        if (Animation2 == "transform 2s") {
            document.querySelector('#animation2').classList.add('green')
            
                NextBtn.classList.add('active');
                NextBtn.classList.add('lv10');
                NextBtn.classList.remove('lv9');
    
                let inputs = document.querySelectorAll('.exercises > pre > input')
                
                for(elem of inputs){
                    elem.setAttribute('disabled', '');
                }
    
                let level = document.querySelector('.lv10');
        
                level.addEventListener("click", function(){
                    document.querySelector('.question').innerHTML = `
                    Նշեք, որ <uu><span><</span>div></uu> տարրի անիմացիան պետք է շարունակի պտտվել ընդմիշտ:`
                    document.querySelector('.exercises > pre').innerHTML = `<span><</span>style>
div {
  width: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  <input type="text" id="finish" style="width: 186px" oninput="Finish()" maxlength="25">: <input type="text" id="finish2" style="width: 48px" oninput="Finish()" maxlength="8">;
}
                        
@keyframes example {
  0%   {background-color: red; left:0px;}
  50%  {background-color: yellow; left:200px;}
  100% {background-color: red; left:0px;}
}
<span><</span>/style>
                        
<span><</span>body>
    <span><</span>div>This is a div</div>
<span><</span>/body>`;
                    })
                
                
                document.querySelector('#lvl10').innerHTML = `
                <img src="./image/icons/open-lock.svg" alt="">`;
    
                document.querySelector('#lvl10').classList.remove('closed')
                document.querySelector('#lvl10').classList.add('open')

        }
    }else{
        document.querySelector('#animation').classList.remove('green')
        document.querySelector('#animation2').classList.remove('green')
        NextBtn.classList.remove('active');
        NextBtn.classList.remove('lv10');
    }
};


function Finish(){
    let Finish = document.querySelector('#finish').value
    let Finish2 = document.querySelector('#finish2').value

    if (Finish == "animation-iteration-count") {
        document.querySelector('#finish').classList.add('green')

        if (Finish2 == "infinite") {
            document.querySelector('#finish2').classList.add('green')
            
                // NextBtn.classList.add('active');
                // NextBtn.classList.add('lv10');
                // NextBtn.classList.remove('lv9');

                document.querySelector('.finish-game-back').classList.add('active')

    
                let inputs = document.querySelectorAll('.exercises > pre > input')
                
                for(elem of inputs){
                    elem.setAttribute('disabled', '');
                }
    
                
        }
    }else{
        document.querySelector('#finish').classList.remove('green')
        document.querySelector('#finish2').classList.remove('green')
        NextBtn.classList.remove('active');
        NextBtn.classList.remove('lv10');
    }
};
