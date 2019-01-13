var fs          = require('fs'),
    csv2geojson = require('csv2geojson'),
    chalk       = require('chalk');

function convertCsv() {
    fs.readFile('project-files/Heritage-Trees-Portland-Coalitions.csv', 'utf-8', (err, csvString) => {
        
        if(err) throw err;
        console.log(chalk.green('Heritage-Trees-Portland-Coalitions.csv loaded'))
        console.log(chalk.green('parsing csv ...'))
        // convert to GeoJSON
        csv2geojson.csv2geojson(csvString, {
            latfield: 'X',
            lonfield: 'Y',
            delimiter: ','
        }, (err, geojson) => {

            if(err) throw err;

            var outGeoJSON = filterFields(geojson);
            
            // write file
            fs.writeFile('data/heritage-trees-portland-coalitions.json', JSON.stringify(outGeoJSON), 'utf-8', (err) => {
                
                if(err) throw err;
                
                console.log(chalk.green('heritage-trees-portland-coalitions.json written to file'));
            });
        })
    });
}

function filterFields(geojson) {

    var features = geojson.features,
        newFeatures = [];

    features.forEach((feature) => {

        var tempProps = {};

        for(var prop in feature.properties) {
            if(prop === 'ADDRESS' || prop === 'COMMON_NAM' || prop === 'NOTES' || prop === 'OWNER' || prop === 'SCIENTIFIC' || prop === 'STATUS' || prop === 'CIRCUMFERE' || prop === 'DIAMETER' || prop === 'HEIGHT' || prop === 'SPREAD' || prop === 'YEAR' || prop === 'COALITIONS') {
                tempProps[prop] = feature.properties[prop];
            }
        }

        newFeatures.push({
            "type": feature.type,
            "geometry": feature.geometry,
            "properties": tempProps
        }); 
    });

    return {
        "type": "FeatureCollection",
        "features": newFeatures
    }
}

exports.convertCsv = convertCsv;
exports.filterFields = filterFields;