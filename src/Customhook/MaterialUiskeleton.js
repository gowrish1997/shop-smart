import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import { makeStyles } from "@material-ui/core/styles";

import { Paper } from "@mui/material";
const useStyles = makeStyles({
  child: {
   
    border: 0,
    borderRadius: 3,
   color: "white",
    height: 200,
    padding: "0 30px",
    marginRight:30
  },
  main: {
    border: 0,
    borderRadius: 3,
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
alignItems:'center',
    color: "white",
     padding: "0 30px",
   
    width:'100%' ,
   
  },
  inside: {
    border: 0,
    borderRadius: 3,
   maxWidth:1200,
    color: "white",
    height: 300,
    padding: "0 30px",
    display:'flex',
    flexDirection:'row',
    justifyContent:'start',
    marginTop:60
  },
});
export default function LoadingSkeleton() {
  const Styles = useStyles();
  return (
    <Paper className={Styles.main}>
      <Paper className={Styles.inside}>
        <Skeleton variant="rectangular" className={Styles.child}   width={100}
  height={100}
 />
        <Skeleton variant="rectangular" className={Styles.child}  width={200}
  height={200} />
        <Skeleton variant="rectangular" className={Styles.child}  width={600}
  height={300} />
      </Paper>
      <Paper className={Styles.inside}>
      <Skeleton variant="rectangular" className={Styles.child}   width={100}
  height={100}
 />
        <Skeleton variant="rectangular" className={Styles.child}  width={200}
  height={200} />
        <Skeleton variant="rectangular" className={Styles.child}  width={600}
  height={300} />
      </Paper>
    </Paper>
  );
}
