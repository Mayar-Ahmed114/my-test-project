const fs = require ("fs")
const addPersons = ( fname,lname,age,id,city)
const allData = loadPersons()


const duplicatedData = allData.filter((obj)=>{
    return obj.id === id
})
  
if(duplicatedData.length==0){

allData.push({
    fname : fname,
    lname : lname,
    age : age,
    id : id,
    city : city

})
       saveData(allData)
}else{
    console.log("Error duplicated Data ")
}

//////////////////////////////////////////////
  

const deleteAllpersons = () => {
  saveallData([]);
  console.log('All persons deleted.');
};

const deleteById = (id)=>{
    const allData = loadinfo()
    const dataToKeep = allData.filter((obj)=>{
        return obj.id !== id 
    })
    console.log(dataToKeep)
    console.log(" you have already deleted ")
}

/////////////////////////////////
 const readAllPersons = () => {
  const allData = loadPersons();
  console.log(allData);
};

const readById = (id)=>{
    const allData = loadPersons()
    const idNeeded = allData.find((obj)=>{
        return obj.id === id
    })
    if(idNeeded ){
        console.log(idNeeded )
    }else {
        console.log(" id Needed not found")
    }
}

//////////////////////////////////////
 const viewNamesAndCities = ()=>{
    const allData = loadPersons()
    allData.forEach((obj)=>{
        console.log(obj.fname+obj.lname , obj.city)
    })
 }




/////////////////////////////////////////////
const loadPersons = ()=>{
    try{
    const dataJSON = fs.readFileSync("data20.json").toString()
    return JSON.parse(dataJSON)
    }
    catch {
        return []
    }
}

    const saveData = (allData)=>{
        const allDataJSON = json.stringfy(allData)
        fs.writeFileSync("data20.json", allDataJSON)
    }


    ///////////////////////////////

    module.exports={
        addPersons,
        deleteAllpersons,
        deleteById,
        readAllPersons,
        readById,
        viewNamesAndCities
    }