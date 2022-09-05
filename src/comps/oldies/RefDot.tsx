//https://github.com/recharts/recharts/issues/544

import * as React from 'react';
import { ReferenceDot, ReferenceLine } from 'recharts';
import type { Props as ReferenceDotProps } from 'recharts/src/cartesian/ReferenceDot';
import type { Props as ReferenceLineProps } from 'recharts/src/cartesian/ReferenceLine';

//type Props = ReferenceDotProps;

/* export const PositionDot = (props: Props) => {
    console.info('MyReferenceLine | RENDER');
    return (
        <ReferenceDot 
         {...props} />
    );
};


// Without the following, recharts will not render the component!
PositionDot.displayName = ReferenceDot.displayName;
PositionDot.defaultProps = ReferenceDot.defaultProps;
 */

 export const myLineContext = React.createContext<[string, (x: string) => void]>(["", () => { }])

 export const ActiveWeekLabel: typeof ReferenceLine = (props) => {
  const x = React.useContext(myLineContext)[0]
  
  return <ReferenceLine {...props} x = {x} />
}
ActiveWeekLabel.displayName = ReferenceLine.displayName;
ActiveWeekLabel.defaultProps = ReferenceLine.defaultProps;
