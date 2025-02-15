import React, { useMemo, useRef, useState } from 'react';
import { Select, Spin } from 'antd';
import type { SelectProps } from 'antd';
import debounce from 'lodash.debounce';
import { locode } from '@/network/endpoints';
import { title } from 'process';
import { isNumber } from '@/components/utils';

export interface DebounceSelectProps<ValueType = any>
  extends Omit<SelectProps<ValueType | ValueType[]>, 'options' | 'children'> {
  fetchOptions: (search: string) => Promise<ValueType[]>;
  debounceTimeout?: number;
}

function DebounceSelect<
  ValueType extends { key?: string; label: React.ReactNode; value: string | number ,extra:any } = any,
>({ fetchOptions, debounceTimeout = 400, ...props }: DebounceSelectProps<ValueType>) {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState<ValueType[]>([]);
  const fetchRef = useRef(0);

  const debounceFetcher = useMemo(() => {
    const loadOptions = (value: string) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);

      fetchOptions(value).then((newOptions) => {
        if (fetchId !== fetchRef.current) {
          return;
        }
        
        setOptions(newOptions);
        setFetching(false);
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);

  return (
    <Select
        showSearch
      labelInValue
      filterOption={false}
      optionFilterProp={"label"}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
      options={options}
    />
  );
}

// Usage of DebounceSelect
interface UserValue {
  label: string;
  value: string;
}

// async function fetchUserList(username: string): Promise<any> {  
//   if(username.length<3){
//     return [];
//   }
//   return locode(username)
//          .then(r=>{
//           console.log(r.data);
//             return r.data.map((i:any)=>({...i,key:(Math.random()*1000).toFixed(0),value:i.sea_port_code,label:`${i.sea_port_code} ${i.port_name} ${i.country}`,title:i}))
//          })
//          .catch(r=>{
            
//          })   ;
// }
async function fetchUserList(username: string, modeOfShipment: string): Promise<any> {  
  if (username.length < 3) return [];

  return locode(username, modeOfShipment)  // Pass modeOfShipment to the API
    .then(r => {
      console.log(r.data);

      return r.data.map((i: any) => {
        // Determine the fields based on modeOfShipment
        const value = (modeOfShipment.toLowerCase() === "air") ? i.iata_code : i.sea_port_code;
        const label = (modeOfShipment.toLowerCase() === "air") 
          ? `${i.iata_code} ${i.airport_name} ${i.country}`
          : `${i.sea_port_code} ${i.port_name} ${i.country}`;

        return {
          ...i,
          key: (Math.random() * 1000).toFixed(0),
          value: value,
          label: label,
          title: i
        };
      });
    })
    .catch(r => {
      console.error("Error fetching locodes:", r);
      return [];
    });
}



// const LocodeSelect = ({change,changeLocation,wholeValue,...props}:{wholeValue?:any,props?:any,mode?:any,change:any,changeLocation?:any}) => {
//   const [value, setValue] = useState<UserValue[]>([]);
  
//   return (
//     <DebounceSelect
//       value={value}
//       style={{ width: '90%' }}
//       {...props}
//       placeholder="Select Port"
//       suffixIcon={null}
//       fetchOptions={fetchUserList}
//       onChange={(newValue:any) => {
//         if(changeLocation){
//           changeLocation(newValue?.title.countryname,newValue?.title.statename);
//         }
//         if(wholeValue){
//           wholeValue(newValue)
//         }
//         change(newValue?.value);
//         setValue(newValue as UserValue[]);
//       }}
//     />
//   );
// };

const LocodeSelect = ({ change, changeLocation, wholeValue, form, modeOfShipment, style, ...props }: { wholeValue?: any, props?: any, mode?: any, change: any, changeLocation?: any, form: any, modeOfShipment?: any,  style?: React.CSSProperties; }) => {
  const [value, setValue] = useState<UserValue[]>([]);

  console.log("🔍 modeOfShipment in LocodeSelect:", modeOfShipment); // Debugging

  return (
    <DebounceSelect
      value={value}
      style={style}
      {...props}
      placeholder="Select Port"
      suffixIcon={null}
      fetchOptions={(username) => fetchUserList(username, modeOfShipment || form.getFieldValue("modeOfShipment"))} // Pass modeOfShipment
      onChange={(newValue: any) => {
        if (changeLocation) {
          changeLocation(newValue?.title.countryname, newValue?.title.statename);
        }
        if (wholeValue) {
          wholeValue(newValue);
        }
        change(newValue?.value);
        setValue(newValue as UserValue[]);
      }}
    />
  );
};


export default LocodeSelect;