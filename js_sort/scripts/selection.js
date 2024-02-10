function Selection(){
    c_delay=0;
    for(var i=0;i<array_size;i++){
        div_update(div_array[i],div_array[i],"red");
        var min=i;

        for(var j=i+1;j<array_size;j++){
            if(div_sizes[j]<div_sizes[min]){
                div_update(div_array[min],div_sizes[min],"blue");
                min=j;
                div_update(div_array[min],div_sizes[min],"red");
            }
            else{
                div_update(div_array[j],div_sizes[j],"blue"); 
            }
        }
        if(min!=i){
            var temp=div_sizes[min];
            div_sizes[min]=div_sizes[i];
            div_sizes[i]=temp;
            div_update(div_array[min],div_sizes[min],"red");
            div_update(div_array[i],div_sizes[i],"red");
            div_update(div_array[min],div_sizes[min],"blue");
        }
        div_update(div_array[i],div_sizes[i],"purple");
    }
}