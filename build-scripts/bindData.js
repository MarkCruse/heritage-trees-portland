var fs          = require('fs'),
    csvParse    = require('csv-parse'),
    chalk       = require('chalk'),
    mapshaper   = require('mapshaper');

function processBindFiles() {

    fs.readFile("project-files/neighborhood-coalitions.json", 'utf8', (err, geojson) => {
        
        if(err) throw err;

        var commands = '-filter-fields MAPLABEL -simplify dp 15% -o precision=.0001 format=geojson';
        
        mapshaper.applyCommands(commands, geojson, (err, data) => {

            if(err) throw err;

            var geojson = JSON.parse(data);

            fs.readFile("project-files/Heritage-Trees-Portland-Coalitions.csv", "utf8", (err, csvString) => {
                
                if(err) throw err;
        
                csvParse(csvString, {columns: true}, (err, csv) => {
            
                    var outGeoJSON = bindData(geojson, csv);

                    fs.writeFile('data/coalitions-counts.json', JSON.stringify(outGeoJSON), 'utf8', function(err) {
                        
                        if(err) throw err;
                
                        console.log(chalk.green('coalitions-counts.json written'));
                    })
                });
            });
        });  
    });
}

function bindData(geojson, csv) {

    geojson.features.forEach(function(feature) {

        var count = 0;
        
        csv.forEach((row) => {
           
            if(row.COALITIONS === feature.properties.MAPLABEL) {
                count++
            }
        });

        feature.properties.count = count;

    });

    return geojson;

}

exports.processBindFiles = processBindFiles;
exports.bindData = bindData;
