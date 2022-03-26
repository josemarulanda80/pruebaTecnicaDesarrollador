let miCarrito = [{
    Province_State: 'Alaska',
    Population: 500,
    population2: 3,
    '4/27/21': 1000
},
{
    Province_State: 'Miami',
    Population:600,
    population2: 4,
    '4/27/21': 20
},
{
    Province_State: 'Whashintonh',
    Population: 1,
    population2: 5,
    '4/27/21': 200000
},
{
    Province_State: 'Chicago',
    Population: 1,
    population2: 7,
    '4/27/21': 20
},
{
    Province_State: 'Chicago',
    Population: 1,
    population2: 6,
    '4/27/21': 20
},
{
    Province_State: 'Alaska',
    Population: 1,
    population2: 8,
    '4/27/21': 20
},
{
    Province_State: 'Alaska',
    Population: 1,
    population2: 9,
    '4/27/21': 20
},
{
    Province_State: 'Alaska',
    Population:1,
    population2: 10,
    '4/27/21': 20
},
{
    Province_State: 'Chicago',
    Population:100,
    population2: 10,
    '4/27/21': 700
},

];

function majorAccumulated(result){
const sortedResults = result.sort((a,b) =>{
    return Number.parseInt(b['4/27/21']) - Number.parseInt(a['4/27/21'])
  }) 
  console.log(`El estado con mayor acumulado hasta la fecha es ${sortedResults[0].Province_State}`)
  return sortedResults;

}
var l=majorAccumulated(miCarrito)

function minorAccumulated(arrayEstates){
    var sortedResults = arrayEstates.reverse()
    console.log(`El estado con menor acumulado hasta la fecha es ${sortedResults[0].Province_State}`)

}
var ll= minorAccumulated(l)

function percentageDeathVsPopulation(l){
    var arrayPorcentages=[]
    l.forEach(element => {
        console.log(`${element.Province_State} tiene un porcentaje de muerte de ${((element['4/27/21'])/(element.Population))*100}%  por cada ${element.Population} habitantes`)
        arrayPorcentages=push({Province_State:element.Province_State,percentage:((element['4/27/21'])/(element.Population))*100})});
        return arrayPorcentages
}

var lll=percentageDeathVsPopulation(l)

