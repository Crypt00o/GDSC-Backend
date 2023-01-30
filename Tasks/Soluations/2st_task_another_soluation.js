// Mission 1


function Person(name,age,gender){

			this.name=name
			this.age=age
			this.gender=gender
	  


	  this.info = function() {
	  	
			console.log("Name  : ",this.name , "age : ", this.age)
	  }

	  this.isMale = function(){
			if(String( this.gender ).toLowerCase() == "male" ){
				  return true
			}
			else{
				  return false
			}
	  }


	  this.isFemale = function(){
			if(String( this.gender ).toLowerCase() == "female" ){
				  return true
			}
			else{
				  return false
			}
	  }

}



// Mission 2 

function Developer(name,age,gender,description){

	  let programmingLanguges=[],databases=[],salary=0

	  Person.call(this,name,age,gender)
	  
	  this.description=description


	  this.info=function(){
				console.log("Name  : ",this.name , "age : ", this.age , "description: ",this.description)
	  }
	  
	  this.getSalary= function(){
			return salary
	  }
	  
	  this.setSalary=function(salaryValue){
			salary=salaryValue
	  }
	  
	  this.addDatabase=function(database){
			for(let i = 0 ; i<databases.length ; i++){
				  if( databases[i] == database ){
						return false
				  }
			}
				  databases[databases.length]=database
				  return true
	  }
	  

	  this.getDatabases=function(){
			return databases
	  }
	  
	  this.addProgrammingLanguage=function(programmingLanguge){
			for(let i = 0 ; i< programmingLanguges.length ; i++){
				  if( programmingLanguges[i] == programmingLanguge){
						return false
				  }
			}
				  programmingLanguges[programmingLanguges.length]=programmingLanguge
				  return true
	  }

	  this.getProgrammingLanguages=function(){
			return programmingLanguges
	  }



	  
}




// Mission 3 

function returnPromiseIFinished(){

	  return  new Promise((resolve,_reject)=>{
			
			setTimeout(
				  ()=>{
						resolve("I Finished")

				  },
			10000
			)

	  })

}



async function iWillLogResolved(){
	  
	  let result = await returnPromiseIFinished()
	  console.log(result)

}




