//Si fuera un proyecto mas complejo o que requiera consumir Apis crearía interfaces para tipar adecuadamente los elementos; ya que marcar una propiedad como any no es una buena practica, 

//Función para agrupar la información de los estados
export function groupAndFilter(result: any) {
    const dataByStates = result.reduce((accumulator: any, currentValue: any) => {
        const elementoYaExiste = accumulator.find((ele: { Province_State: string; Population: number }) => ele.Province_State === currentValue.Province_State);
        if (elementoYaExiste) {
            return accumulator.map((ele: { Province_State: string; cantidad: number; Population: number }) => {
                if (ele.Province_State === currentValue.Province_State) {
                    return {
                        ...ele,
                        Population: ele.Population + currentValue.Population
                    }
                }
                return ele;
            });
        }
        return [...accumulator, currentValue];
    }, []);
    return dataByStates
}

//Función para encontrar el estado mas afectado
export function majorAccumulated(arrayEstates: any) {
    const sortedResults = arrayEstates.sort((a: any, b: any) => {
        return Number.parseInt(b['4/27/21']) - Number.parseInt(a['4/27/21'])
    })
    console.log(`El estado con mayor acumulado hasta la fecha es ${sortedResults[0].Province_State} con un acumulado de ${sortedResults[0]['4/27/21']}`)
    return sortedResults
}

//Función para encontrar ell estado menos afectado
export function minorAccumulated(arrayEstates: any) {
    var sortedResults = arrayEstates.reverse()
    console.log(`El estado con menor acumulado hasta la fecha es ${sortedResults[0].Province_State} con un acumulado de ${sortedResults[0]['4/27/21']}`)
}

//Función que imprime porcentaje de muertos por pobación para cada estado
export function percentageDeathVsPopulation(arrayEstates: any) {
    var arrayPorcentages: any[] = []

    arrayEstates.forEach((element: { [x: string]: any; Province_State: any; Population: any; }) => {
        var porcentage = (((element['4/27/21']) / (element.Population)) * 100).toFixed(5)
        console.log(`${element.Province_State} tiene un porcentaje de muerte de ${porcentage}%  por ${element.Population} habitantes`);
        arrayPorcentages.push({ Province_State: element.Province_State, percentage: parseFloat(porcentage) });
            });
    return arrayPorcentages
}

// Función que nuestra el estado mas afectado por el covid
export function mostAffectedState(arrayEstates: any) {
    var arrayPercentages:any[] =[]
    arrayEstates.forEach((ele: { percentage: any; })=>{
        arrayPercentages.push(ele.percentage)
    })
    var myArrClean = arrayPercentages.filter(Boolean).filter(ele =>ele!=Infinity); 
  //  console.log(Math.max(...myArrClean))
    var StateMostAffect = arrayEstates.find((ele: { percentage: number; }) => ele.percentage === Math.max(...myArrClean));
    console.log(`El estado mas afectado es ${StateMostAffect.Province_State} con un porcentaje de ${StateMostAffect.percentage}% `)
}



