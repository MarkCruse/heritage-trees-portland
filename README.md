# MAP675 Assignment 04
### Team: Mark Cruse & Derek Waggenspack

#### Data & Data Source(s)
* Heritage Trees Portland from http://opendata-esri23.opendata.arcgis.com/datasets/a539e9fe98964fbca427fe84629db1be_0 [ESRI Portland R&D Center Open Data]
*  Joined Neighborhood Coalition MAPLABEL field using QGIS 2.14.19 -- dw
* Neighborhood Coalitions from http://gis-pdx.opendata.arcgis.com/datasets/neighborhood-coalitions-regions [Portland Maps Open Data]

#### Terminal Commands
ogr2ogr -f "GeoJSON" ../project-files/heritage-trees-portland.json Heritage_Trees_Portland.shp
ogr2ogr -f "GeoJSON" -select "MAPLABEL" ../data/neighborhood-coalitions.json Neighborhood_Coalitions_regions.shp

#### Build Notes

#### 10-31-2017
* created repo on Github and invited Mark to the party --dw

#### 11-01-2017
* communicated and agreed on using Portland's Heritage Tree data along with neighborhood regions --dw --mc

#### 11-03-2017
* downloaded and processed data shapefiles to json for use with project -- dw
* began initial web & map layout (index.html) -- mc

#### 11-04-2107
* code to remove the null neighborhood-coalitions from showing in legend -- mc
* recode legend map mouse hover to work with heritage tree dataset -- mc
* custom design tree icon using GIMP -- mc
* replace standard leflet marker with custom marker (tree-icon) -- mc
* add JS code to capitalize the first letter of the tree common name -- mc
* Add footer CSS and html to index.html -- mc


#### 11-06-2017
* moved the legend next to the map -- dw

#### 11-07-2017
* changed the font and background color to be more arboreous -- dw