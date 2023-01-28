(()=>{
	  Array.prototype.reverse=()=>{
			console.log("[-] Sorry You Shouldn,t Use This Try Use Your Logic");
	  }
	  Array.prototype.sort=Array.prototype.reverse;
})();



// To Test Your Soluation After Finishing , Try Run It With :open cmd and run  node <yourfilename>.js
// if you can,t to it just visit https://replit.com/languages/nodejs and copy all of this code with soluation and paste this on editor you will find and run the code and wait for Results

function reverseArraySoluation(someArray){
	  // You Will Recieve A Random array called someArray 
	  // Your Mission is to Complete This Function to Reverse it  and return it


	  // Write Your Logic Here Below This Comment
			
	       // My Soluation 
			for(let i =0 ; i<someArray.length/2 ; i++){
				  let tmp=someArray[i]
				  someArray[i]=someArray[someArray.length -1 - i]				   someArray[someArray.length -1 - i]=tmp
			}
			
	  // Write Your Logic Here Above This Comment
	  return someArray
}


function whoAmI(someObject){
	  // You Will Recieve a Some Object Your Task Is to Show Me That You can Change  Probs of This Object What Ever Challenge You can Face You Should Try Untill Get A Soluation 
	  
	  // someObject = {name : "eslam" , age:0 , gitHubUrl:"https://github.com/Crypt00o"}
	  
	  
	  // modify this Object to be {name: <yourname> , age: <yourage> , gitHubUrl: <your github url> }
	  
	  	  	  
	  //Soluation

	  // If You Look @testWhoAmI you will find Created Object Properties will be :
	  // value , initial value of a key 
	  // writable , mean value can be overwritten or not 
	  // enumerable  , mean value  can be read or not 
	  // configurable  ,  mean  value can be deleted or not 
	  
	  // overwrite it with any problem because it was writable
	  someObject.name="eslam_mohamed" // use your name 

	  // overwrite it with any problem because it was writable
	  someObject.age= 21 // use your age 
	  //  you can,t overwrite gitHubUrl  because it was unwritable , but it was configurable mean can be deleted so we will delete it and initialaize it again with new value without any problem

	  delete someObject.gitHubUrl 
	  someObject.gitHubUrl="https://github.com/john"
	  
	  
	  return;
}

function fixMe(){
	 const fix=()=>{
			console.log(fixSoluation);
	  }
	  
		  {
		
			// Soluation :  replace let with var in this case
			
			var fixSoluation = "Thanks You Fixed Me Successfully :) "
			
		  }
  

	 
	  try{
			fix();
	  }
	  catch(error){
			console.log("[-] You Didn,t Fix Me :( ")
	  }
}


function testWhoAmI(){
	  const me = Object.create(Object.prototype,{
			name:{
				  value:"eslam mohamed",
				  writable:true,
				  configurable:false,
				  enumerable:true
			} ,
			age:{
				  value:0, 
				  writable:true,
				  configurable:false,
				  enumerable:true
			},
			gitHubUrl:{
				  value:"https://github.com/Crypt00o/",
				  writable:false,
				  configurable:true,
				  enumerable:true
			}
	  })
	  
	  whoAmI(me)
	  
	  if (me.name !="eslam mohamed" || me.age !==0 || me.gitHubUrl!= "https://github.com/Crypt00o/" ){
			console.log("[-] whoAmI Didn,t Pass , try harder")
			console.log( me )

	  }
	  else{
			console.log("[+] whoAmI Passed Successfully ")
			console.log( me )
			  }

}

function testArrayReverse(){
	 let createRandomArray=()=>{
			let arr=[];
			for (let i = parseInt(Math.random()*10)+5 ; i>=0 ; i--){
				  arr[i]=i*3;
			}
			return arr;
	  }

	 let someArray = createRandomArray();

	  console.time()
     
	  let reversedArray= reverseArraySoluation([...someArray]);
	  
	  console.timeEnd()
	  
	  let isReversedCorrecttly = true;
	  
	  reversedArray.map((value,index,_)=>{
			if (value!=someArray[someArray.length - index - 1]){
				  isReversedCorrecttly=false	  
			}
	  })

	  if (!isReversedCorrecttly){
			console.log("[-] Invalid Reverse Array Soluation " )
			console.log("\nBefore Reverse :",someArray)
			console.log("\nAfter Reverse :",reversedArray)
	  }
	  else{
			console.log("[+] Reverse Array Soluation  Passed Successfully ")
			console.log("\nBefore Reverse :",someArray)
			console.log("\nAfter Reverse :",reversedArray)
	  }
}

console.log("1) - Reverseing Array Result : ")
testArrayReverse()
console.log("\n---------------------------\n")
console.log("2) - Fix Me Result : ")
fixMe()
console.log("\n---------------------------\n")
console.log("3) -  WhoAmi Result ")
testWhoAmI()
