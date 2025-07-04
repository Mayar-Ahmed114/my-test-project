const x = require("./data5")
const fs = require("fs")
const validator = require("validator")


const yargs = require("yargs")

yargs.command({
    command : "add",
    description : " to add an item",
    builder :{
        fname : {
            type : 'string',
            demandOption : true,
        },
        lname : { 
      type: 'string', 
      demandOption: true 
        },
        age : { 
      type: 'number', 
      demandOption: true 
    },
        id: { 
     type: 'string', 
     demandOption: true
     },
    
    city: { 
     type: 'string', 
     demandOption: true 
    }
    },
    handler : (x)=>{
        data5.addPerson(x.fName,x.lName,x.age,x.id,x.city)
    }

})
yargs.command({
  command: 'read all persons',
  describe: 'read all persons',
  handler: ()=> {
   data5.readAllPersons()
  }
  
});

yargs.command({
  command: 'read spec Persons',
  describe: 'read specific persons by id',
  builder :{
    id :{
        type : 'string',
        demandCommand : true
    }
  },
  handler: (x)=> {
   data5.readById(x.id)
  }
  
});

yargs.command({
  command: 'delete all persons',
  describe: 'delete all persons',
  handler:()=>{
     people.deleteAllpersons

  }
});

yargs.command({
    command : "delete spec persons",
    description : " delete specific persons",
    builder :{
        id :{  
            demandOption : true,
            type : 'String'

        }
    },
    handler : (x)=>{
        data5.deleteById(x.id)
    }

})

yargs.command({
  command: 'names and cities',
  describe: 'View full name and city of each person',
  handler:()=>{ 
    data5.viewNamesAndCities
  }
});

yargs.parse();
