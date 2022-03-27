import * as fs from "fs";
import * as path from "path";
import { parse } from 'csv-parse';
import { groupAndFilter, majorAccumulated, minorAccumulated, percentageDeathVsPopulation, mostAffectedState } from './functions'
(() => {

  //librería para leer documento: https://csv.js.org/parse/options/
const csvFilePath = path.resolve(__dirname, 'files/time_series_covid19_deaths_US.csv');
  const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });
  parse(fileContent, {
    delimiter: ',',
    columns: true,
    cast: (columnValue, context) => {
      if (context.column === 'Population') {
        return parseInt(columnValue, 10)
      };
      if (context.column === '4/27/21') {
        return parseInt(columnValue, 10)
      }
      return columnValue;
    }
  }, (error, result: any[]) => {
    if (error) {
      console.error(error);
    }
    var informationStates = groupAndFilter(result)

    var arrayStatesOrdened = majorAccumulated(informationStates)
    console.log('****************************************************************************')

    minorAccumulated(arrayStatesOrdened)
    console.log('****************************************************************************')
    var arrayPorcentajes = percentageDeathVsPopulation(arrayStatesOrdened)
    //console.log(arrayPorcentajes);
    console.log('****************************************************************************')
    mostAffectedState(arrayPorcentajes)
  });
})();