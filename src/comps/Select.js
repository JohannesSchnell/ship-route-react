import React from "react";
import { Chart } from "./Charts/Chart";
//wird im interface vom user erstellt oder bei bereinigten Daten liegt er schon vor
import { keyButtner as keyS } from "../data/keys";

import { subSample } from "./Charts/chartHelper";

//data reduction von user oder automatisch? -benötigt keyS
export function Select(props) {
  const selectData = subSample(
    props.appData,
    25,
    "%d.%m.%Y %H:%M",
    keyS.date_key,
    [
      keyS.var1_key,
      keyS.var2_key,
      keyS.var3_key,
      keyS.var4_key,
      keyS.var5_key,
      keyS.var6_key,
      keyS.var7_key,
      keyS.var8_key,
      keyS.var9_key,
    ],
    keyS.lat_key,
    keyS.lng_key
  );
  console.log(selectData);
  return (
    <div>
      <Chart {...selectData} />
    </div>
  );
}
