# The Second Task

- ####  Topics Included : [ OOP , Promises  ]


<br><br>

### 1. First Mission 

<br>

Declare a Class Called `Person` 

- With The Following Attributes 

|  Accessibility  | Attribute name | Attribute type  |
|-----------------|----------------|-----------------|
|    `public`     |    `name`      |    `string`     |
|    `public`     |    `age`       |    `number`     |
|    `public`     |    `gender`    |    `string`     |

- With The Following Methods

|  Accessibility |  Method                        | return Type | Description                                              |
|----------------|--------------------------------|-------------|----------------------------------------------------------|
|    `public`    | `Constructor(name,age,gender)` |  `void`     | Person Constructor That Set  name,age,gender			   |
|    `public`    | `info()`						  |  `void`     | Log or Print  name , age Attributes in Your Favourite Way| 
|    `public`    | `isMale()`					  |  `boolean`	| return true if Person is Male and False if not		   |
|    `public`    | `isFemale()`					  |  `boolean`	| return true if Person is Female and False if not		   |



<br>

---

<br>

###  2. Second Mission

<br>

Declare A Class Called `Developer` Which inherit all Methods,Attributes from Class`Person` 

- With The Following Attributes 

|  Accessibility   |  Attribute name          | Attribute type  |
|------------------|--------------------------|-----------------|
|    `public`      |    `description`        |    `string`     |
|	 `private`     |    `programmingLanguges`|    `Array`      |
|	 `private`	   |    `databases`			 |    `Array`      |
|    `private`     |    `salary`             |    `number`     |

- With The Following Methods

|  Accessibility |  Method                                    | return Type | Description                                                             |
|----------------|--------------------------------------------|-------------|-------------------------------------------------------------------------|
|    `public`    | `Constructor(name,age,gender,description)` |  `void`     | Developer Constructor That Set  name,age,gender, description			  |
|    `public`    | `info()`						              |  `void`     | Override Info() and make it Log or Print  name , age , description  Attributes in Your Favourite Way| 
|    `public`    | `getSalary()`							  |  `number`   | getter method which return salary if Developer salary had Been Set or 0 if not				  |	
|    `public`    | `setSalary(salary)`					      |  `void`	    | setter method which set salary Attribute if it a number and return boolean  		                  |
|    `public`    | `addDatabase(database)`					  | `boolean`   | add new database as string into databases Attribute if only databases doesn,t contain it and if inserted return true   |
|	 `public`	|  `getDatabases()`							  | `Array`     | return databases Attribute Value  |
|	 `public`	|  `addProgrammingLanguage(programmingLanguge)`| `boolean`  | same as addDatabase(database) but Work With Attribute : programmingLanguges
|	 `public`	|  `getProgrammingLanguages()`					| `Array`   | return programmingLanguges Attribute Value 



<br>

---

<br>

### 3. Third Mission 

1. Create a Function return -> a Promise and That Promise -> return "I Finished " after 10 Seconds 
2. Then Create  an Async Function and inside it  Call The Previous  Function  and Awaits it,s return value then then log or print the returned value 

