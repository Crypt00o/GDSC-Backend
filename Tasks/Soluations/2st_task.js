// Mission 1


class Person{
	  
	  name
	  age
	  gender


	  constructor(name,age,gender){
			this.name=name
			this.age=age
			this.gender=gender
	  }


	  info(){
			console.log("Name  : ",this.name , "age : ", this.age)
	  }

	  isMale(){
			if(String( this.gender ).toLowerCase() == "male" ){
				  return true
			}
			else{
				  return false
			}
	  }


	  isFemale(){
			if(String( this.gender ).toLowerCase() == "female" ){
				  return true
			}
			else{
				  return false
			}
	  }

}



// Mission 2 

class Developer extends Person {
	  description
	  #programmingLanguges
	  #databases
	  #salary

	  constructor(name,age,gender,description){
			super(name,age,gender)
			this.description=description
			this.#salary=0
			this.#databases=[]
			this.#programmingLanguges=[]
	  }


	  info(){
				console.log("Name  : ",this.name , "age : ", this.age , "description: ",this.description)
	  }
	  
	  get getSalary(){
			return this.#salary
	  }
	  
	  set setSalary(salary){
			this.#salary=salary
	  }
	  
	  addDatabase(database){
			for(let i = 0 ; i< this.#databases.length ; i++){
				  if( this.#databases[i] == database ){
						return false
				  }
			}
				  this.#databases[this.#databases.length]=database
				  return true
	  }
	  

	  getDatabases(){
			return this.#databases
	  }
	  
	  addProgrammingLanguage(programmingLanguge){
			for(let i = 0 ; i< this.#programmingLanguges.length ; i++){
				  if( this.#programmingLanguges[i] == programmingLanguge){
						return false
				  }
			}
				  this.#programmingLanguges[this.#programmingLanguges.length]=programmingLanguge
				  return true
	  }

	  getDatabases(){
			return this.#programmingLanguges
	  }



	  
}




// Mission 3 

function returnPromiseIFinished(){

	  return  new Promise((resolve,_reject)=>{
			
			setTimeout(
				  ()=>{
						resolve("I Finished")

				  },
			3000
			)

	  })

}



async function iWillLogResolved(){
	  
	  let result = await returnPromiseIFinished()
	  console.log(result)

}




