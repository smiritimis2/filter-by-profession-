/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  
  arr.map(item=>{if(item.profession==="developer")console.log(item);})
   // console.log(newarr);

}

function PrintDeveloperbyForEach() {
  //Write your code here
     arr.forEach((item)=>{if(item.profession==="developer") console.log(item);})
}

function addData() {
  //Write your code here
  let len=arr.length;
  

    let arr2={
     id:len,
     name:'susan',
     age:'20',
     profession:'intern'
    }
    arr.push(arr2);
    /*name.value="";
    age.value="";
    profession.value="";*/








console.log(arr);



}

function removeAdmin() {
  //Write your code here
  
   let brr=arr.filter((item)=>{
      if(item.profession==="developer")
      {
        return item;
      }
    })
   console.log(brr);
   
        
}

function concatenateArray() {
  //Write your code here
  let brr=[
    { id: 7, name: "jam", age: "18", profession: "developer" },
    { id: 8, name: "jck", age: "20", profession: "developer" },
    { id: 9, name: "ren", age: "19", profession: "admin" },
     
   ]
   //arr.concat(arr,brr);
    arr=arr.concat(brr);
   console.log(arr);
  
}
