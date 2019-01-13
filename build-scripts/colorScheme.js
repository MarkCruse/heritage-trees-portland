var fs          = require('fs'),
    chalk       = require('chalk');


function extractColors() {
    // Pull the "Vivid" scheme from cartocolors.json
    fs.readFile('project-files/cartocolors.json', function(err, data) {

        if(err) throw err;

        console.log(chalk.blue("cartocolors.json data loaded!"));

        var data = JSON.parse(data);

        console.log(chalk.blue("cartocolors.json data parsed to JSON"));

        var outputData = {'Vivid': data['Vivid'] };

        console.log(chalk.blue("vivid scheme extracted from parsed data"));

        fs.writeFile('data/vividcolors.json', JSON.stringify(outputData), 'utf-8', function(err) {
            
            if(err) throw err;
            
            console.log(chalk.blue('vividcolors.json written to data/ dir'));
        });
    });
}

exports.extractColors = extractColors