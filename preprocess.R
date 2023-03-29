library("rgdal")
getwd()
setwd("")
#define import file 
data = read.csv("./import.csv", sep = ";", dec = ",")


#seperate coordinates in: degree minute hemisphere
lat = strsplit(data$Latitude, " ")
lng = strsplit(data$Longitude, " ")


#calc and rebuilding to decimal coordinates
latlng_degree2decimal = function(latlng_list){
  n = as.numeric(sapply(latlng_list, "[[", 1))
  d = as.numeric(sapply(latlng_list, "[[", 2))/60
  ne_sw = sapply(latlng_list, "[[", 3)
  for (i in c(1:length(ne_sw))) {
    if (ne_sw[i] == "N" | ne_sw[i] == "E") {
      as.numeric(1) -> ne_sw[i]
    }else{
     as.numeric(-1) -> ne_sw[i] 
    }
  }
 #print(n)
 #print(d)
 #print(ne_sw)
  return( as.numeric(ne_sw)*(n+d) )
}

#transform lat lng and replace in data
data$Latitude= latlng_degree2decimal(lat)
data$Longitude = latlng_degree2decimal(lng)

#save as geojson
writeOGR(data, dsn = './tmp/out.GeoJSON', layer = "layer_name", driver = "GeoJSON")

#transform into .js file so the content is exported as a variable
#./data/preprocessed.js is the file to reference in index.js
# import { jsonData } from "./data/preprocessed.js";
geojson = readLines("./tmp/out.GeoJSON")
writeLines(paste("export const jsonData = ", geojson), "./data/preprocessed.js")

#write as csv 
#write.csv(data, "data.csv")
