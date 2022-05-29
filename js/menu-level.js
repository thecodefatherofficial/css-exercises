document.querySelector('#lvl1').addEventListener("click", function(){
    document.querySelector('.question').innerHTML = `
    Սահմանեք «2px» հորիզոնական և «2px» ուղղահայաց, «կանաչ» տեքստի ստվեր <uu><span><</span>h1></uu> տարրի համար՝ «5px» blur շառավղով:`;

    document.querySelector('.exercises > pre').innerHTML = `<span><</span>style>
h1 {
      text-shadow: <input type="text" id="text-shadow" class="green" style="width: 130px" oninput="TextShadow()" maxlength="17" value="2px 2px 5px green" disabled> ;
    }
<span><</span>/style>
                            
<span><</span>body>
    <span><</span>h1>This is a heading<span><</span>/h1>
    <span><</span>p>This is a paragraph<span><</span>/p>
    <span><</span>p>This is a paragraph<span><</span>/p>
<span><</span>/body>`
});


document.querySelector('#lvl2').addEventListener("click", function(){
    document.querySelector('.question').innerHTML = `
    Օգտագործեք CSS պատկերի թափանցիկությունը 50% սահմանելու համար:`;

    document.querySelector('.exercises > pre').innerHTML = `<span><</span>style>
img {
    <input value="opacity" type="text" id="opacity" class="green" style="width: 53px" oninput="Opacity()" maxlength="7" disabled>: <input value="0.5" type="text" id="opacity2" class="green" style="width: 24px" oninput="Opacity()" maxlength="3" disabled>
}
<span><</span>/style>
    
<span><</span>body>
    <span><</span>img src="klematis.jpg" width="150" height="113">
<span><</span>/body>`
});


document.querySelector('#lvl3').addEventListener("click", function(){
    document.querySelector('.question').innerHTML = `
    Սահմանեք գծային գրադիենտ ֆոն <uu><span><</span>div></uu> տարրի համար՝ անցնելով ձախից աջ:`;

    document.querySelector('.exercises > pre').innerHTML = `<span><</span>style>
    div {
        background-image: linear-gradient(<input value="to right" type="text" id="gradient" class="green" style="width: 53px" oninput="Gradient()" maxlength="8" disabled>, white, green);
    }
<span><</span>/style>
                
<span><</span>body>
    <span><</span>div style="height:200px"></div>
<span><</span>/body>`
});


document.querySelector('#lvl4').addEventListener("click", function(){
    document.querySelector('.question').innerHTML = `
    Տեղադրեք <uu><span><</span>div></uu> տարրը աջ մասում՝ օգտագործելով բացարձակ դիրքավորում:`;

    document.querySelector('.exercises > pre').innerHTML = `<span><</span>style>
    .intro {
      width: 200px;
      margin: auto;
      <input type="text" value="position" id="align" class="green" style="width: 57px" oninput="Align()" maxlength="8" disabled>: absolute;
      <input type="text" value="right" id="align2" class="green" style="width: 34px" oninput="Align()" maxlength="8" disabled>: 0px;
    }
<span><</span>/style>
                
<span><</span>body>
                
    <span><</span>div class="intro">
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
    <span><</span>/div>                
<span><</span>/body>`
});


document.querySelector('#lvl5').addEventListener("click", function(){
    document.querySelector('.question').innerHTML = `
    Սահմանեք <uu><span><</span>img></uu> տարրերի համար border, որոնք ունեն վերնագրի հատկանիշ և պարունակում են կապույտ բառը:`;

    document.querySelector('.exercises > pre').innerHTML = `<span><</span>style>
    img<input type="text" value='[title~="blue"]' id="attribute" class="green" style="width: 95px" oninput="Attribute()" maxlength="15" disabled>{
      border: 5px solid red;
    }
<span><</span>/style>
                    
<span><</span>body>
    <span><</span>img src="klematis.jpg" title="blue flower">
    <span><</span>img src="klematis2.jpg" title="purple flowers">
    <span><</span>img src="klematis3.jpg" title="two blue flowers">  
<span><</span>/body>`
});


document.querySelector('#lvl6').addEventListener("click", function(){
    document.querySelector('.question').innerHTML = `
    Տեղադրեք երկու ֆոնային պատկերները յուրաքանչյուր վերին անկյունում: <br>
    <uu>img1.gif</uu> ձախ կողմում և <uu>img2.gif</uu> աջ կողմում:`;

    document.querySelector('.exercises > pre').innerHTML = `<span><</span>style>
    body {
      background-image: url('img1.gif'), url('img2.gif');
      background-repeat: no-repeat, no-repeat;
      <input type="text" id="background" class="green" style="width: 147px" oninput="Background()" maxlength="19" value="background-position" disabled>: <input type="text" id="background2" class="green" style="width: 51px" oninput="Background()" maxlength="8" value="left top" disabled>, <input type="text" class="green" id="background3" style="width: 60px" oninput="Background()" maxlength="9" value="right top" disabled>;
    }
<span><</span>/style>
                    
<span><</span>body>
    <span><</span>h1>This is a heading<span><</span>/h1>
    <span><</span>p>This is a paragraph<span><</span>/p>
<span><</span>/body>`
});


document.querySelector('#lvl7').addEventListener("click", function(){
    document.querySelector('.question').innerHTML = `
    Ավելացրեք 2 վայրկյան անցումային էֆեկտ ֆոնի համար և փոխակերպեք <uu><span><</span>div></uu> տարրի փոփոխությունները:`;

    document.querySelector('.exercises > pre').innerHTML = `<span><</span>style>
    div {
      width: 100px;
      height: 100px;
      background: red;
      transition: <input type="text" value="background 2s" id="transition" class="green" style="width: 105px" oninput="Transition()" maxlength="13" disabled>, <input type="text" id="transition2" value="transform 2s" class="green" style="width: 91px" oninput="Transition()" maxlength="12" disabled>;
    }
                        
    div:hover {
      background: blue;
      transform: rotate(180deg);
    }
<span><</span>/style>
    
<span><</span>body>
    <span><</span>div>This is a div<span><</span>/div>
<span><</span>/body>`
});


document.querySelector('#lvl8').addEventListener("click", function(){
    document.querySelector('.question').innerHTML = `
    Ավելացրեք վեբ տառատեսակ «sansation» անունով և «sansation_light.woff» URL-ով:`;

    document.querySelector('.exercises > pre').innerHTML = `<span><</span>style>
    <input type="text" id="font" value="@font-face" class="green" style="width: 81px" oninput="Font()" maxlength="10" disabled>{
      font-family: <input type="text" id="font2 value="sansation" class="green"" style="width: 69px" oninput="Font()" maxlength="9" disabled>;
      <input type="text" id="font3" value="src" class="green" style="width: 22px" oninput="Font()" maxlength="3" disabled>: <input type="text" id="font4" value="url('sansation_light.woff')" class="green" style="width: 180px" oninput="Font()" maxlength="26" disabled>;
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
});


document.querySelector('#lvl9').addEventListener("click", function(){
    document.querySelector('.question').innerHTML = `
    Նշեք, որ <uu><span><</span>div></uu> տարրի անիմացիան պետք է ունենա «ease-in-out» արագություն:`;

    document.querySelector('.exercises > pre').innerHTML = `<span><</span>style>
    div {
      width: 100px;
      background-color: red;
      animation-name: example;
      animation-duration: 4s;
      <input type="text" id="animation" value="animation-timing-function" class="green" style="width: 190px" oninput="Animation()" maxlength="25" disabled>: <input type="text" id="animation2" value="transform 2s" class="green" style="width: 85px" oninput="Animation()" maxlength="11" disabled>;
    }
                            
    @keyframes example {
      0%   {background-color: red; left:0px;}
      50%  {background-color: yellow; left:200px;}
      100% {background-color: red; left:0px;}
    }
<span><</span>/style>
                            
<span><</span>body>
    <span><</span>div>This is a div</div>
<span><</span>/body>`
});


document.querySelector('#lvl10').addEventListener("click", function(){
    document.querySelector('.question').innerHTML = `
    Նշեք, որ <uu><span><</span>div></uu> տարրի անիմացիան պետք է շարունակի պտտվել ընդմիշտ:`;

    document.querySelector('.exercises > pre').innerHTML = `<span><</span>style>
    div {
      width: 100px;
      background-color: red;
      animation-name: example;
      animation-duration: 4s;
      <input type="text" id="finish" value="animation-iteration-count" class="green" style="width: 186px" oninput="Finish()" maxlength="25" disabled>: <input type="text" id="finish2" value="infinite" class="green" style="width: 48px" oninput="Finish()" maxlength="8" disabled>;
    }
                            
    @keyframes example {
      0%   {background-color: red; left:0px;}
      50%  {background-color: yellow; left:200px;}
      100% {background-color: red; left:0px;}
    }
<span><</span>/style>
                            
<span><</span>body>
    <span><</span>div>This is a div</div>
<span><</span>/body>`
});