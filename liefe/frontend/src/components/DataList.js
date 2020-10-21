import React, { useState, useMemo, useCallback } from "react";
import DataListInput from "react-datalist-input";
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  dataList: {
      width: '220px',
      marginLeft:'10px',
      marginBottom: '60px',
      marginTop: '10px',
  },
}));

const DataList = ({ data }) => {
    const [item, setItem] = useState();
    const classes = useStyles();

    const onSelect = useCallback((selectedItem) => {}, []);
    
    const items = useMemo( () =>
        data.map((oneItem) => ({
          label: oneItem.name,
          key: oneItem.id,
        })),
      [data]
    );
   
    return (
      <div className={classes.dataList}>
        <DataListInput 
          items={items}
          onSelect={onSelect}
          placeholder="Categoria do produto"
          clearInputOnSelect={true}
        />
       </div>
    );
  };

export default DataList