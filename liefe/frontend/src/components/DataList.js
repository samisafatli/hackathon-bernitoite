import React, { useState, useMemo, useCallback } from "react";
import DataListInput from "react-datalist-input";

const DataList = ({ myValues }) => {
    const [item, setItem] = useState();

    console.log(myValues)
    const onSelect = useCallback((selectedItem) => {
      console.log("selectedItem", selectedItem);
    }, []);
    
    const items = useMemo( () =>
        myValues.map((oneItem) => ({
          // required: what to show to the user
          label: oneItem.name,
          // required: key to identify the item within the array
          key: oneItem.id,
          // feel free to add your own app logic to access those properties in the onSelect function
          someAdditionalValue: oneItem.someAdditionalValue,
          // or just keep everything
          ...oneItem,
        })),
      [myValues]
    );
   
    return (
      <DataListInput
        placeholder="Select an option from the drop down menu..."
        items={items}
        onSelect={onSelect}
      />
    );
  };

export default DataList