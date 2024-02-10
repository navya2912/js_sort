var in_speed=document.getElementById("a-speed");
// console.log(in_speed);
var in_size=document.getElementById("a-size");
var array_gen=document.getElementById("a-generate");
var cont=document.getElementById("a-container");

var butts_algos = document.querySelectorAll(".r button");

var div_sizes=[];
var div_array=[];
var margin=0.2;
var array_speed=in_size.value;

array_gen.addEventListener("click",generate_array);
in_size.addEventListener("input",update_array_size);

window.onload=update_array_size();

function update_array_size(){
    array_size=in_size.value;
    generate_array();
}
function generate_array()
{
    cont.innerHTML="";
    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random()*80)+10;
        div_array[i]=document.createElement("div");
        // var text=document.createTextNode(div_sizes[i]);
        // div_array[i].appendChild(text);
        cont.appendChild(div_array[i]);
        div_array[i].style="margin:0% " + margin +"% ; background-color: blue; width :" + 100 + "%; height :" + (div_sizes[i]) + "%;";
    }
}

var speed=500;

in_speed.addEventListener("input",vis_speed);

function vis_speed()
{
    var array_speed=in_speed.value;

    switch(parseInt(array_speed))
    {
        case 1: speed=1;
                break;
        case 2: speed=10;
                break;
        case 3: speed=100;
                break;
        case 4: speed=500;
                break;
        case 5: speed=1000;
                break;
        case 6: speed=10000;
                break;
    }
    delay_time=10000/(Math.floor(array_size/10)*speed);
}
    var delay_time=10000/(Math.floor(array_size/10)*speed);
    var c_delay=0;

    function div_update(cont,height,color)
    {
        window.setTimeout(function(){
        cont.style=" margin:0% " + margin + "%; width:" + 100 + "%; height:" + height + "%; background-color:" + color + ";";
        },c_delay+=delay_time);
    }
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].addEventListener("click",runalgo);
    }
    
    function runalgo()
    {
        switch(this.innerHTML)
        {
            case "Bubble":   Bubble();
                             break;
            
            case "Selection": Selection();
                              break;
            
            case "Heap":      Heap();
                                break;
            case "Merge":     Merge();
                                break;
        }
    }