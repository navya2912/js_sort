function Merge(){
    c_delay=0;
    partition(0,array_size-1);
}

function merge(start,mid,end){

var i=0,j=0,k=0;
    var n=mid-start+1;
    var q=end-mid;
    var l=[];
    var t=[];
    for(i=0;i<n;++i){
        l[i]=div_sizes[start+i];
        div_update(div_array[start+i],div_sizes[start+i],"red");
    }
    for(j=0;j<q;++j){
        t[j]=div_sizes[mid+1+j];
        div_update(div_array[mid+1+j],div_sizes[mid+1+j],"red");

    }
    i=0;
    j=0;
    k=start;
    while(i<n && j<q){
        if(l[i]<=t[j]){
            div_sizes[k]=l[i];
            i++;
        }
        else{
            div_sizes[k]=t[j];
            j++;
        }
        div_update(div_array[k],div_sizes[k],"purple");
        k++;
    }
    while(i<n){
        div_sizes[k]=l[i];
        div_update(div_array[k],div_sizes[k],"purple");
        i++;
        k++;
    }
    while(j<q){
        div_sizes[k]=t[j];
        div_update(div_array[k],div_sizes[k],"purple");
        j++;
        k++;
    }
}
function partition(start,end){
    if(start<end){
        var mid=Math.floor((start+end)/2);
        div_update(div_array[mid],div_sizes[mid],"yellow");
        partition(start,mid);
        partition(mid+1,end);
        merge(start,mid,end);
    }
}
