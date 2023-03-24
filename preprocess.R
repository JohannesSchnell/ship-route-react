getwd()
setwd("")
#define import file 
data = read.csv("./import.csv", sep = ";", dec = ",")
lat = strsplit(data$Latitude, " ")
lng = strsplit(data$Longitude, " ")

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
 print(n)
 print(d)
 print(ne_sw)
  return( as.numeric(ne_sw)*(n+d) )
}


data$Latitude= latlng_degree2decimal(lat)
data$Longitude = latlng_degree2decimal(lng)
#define export name
write.csv(data, "export.csv")
