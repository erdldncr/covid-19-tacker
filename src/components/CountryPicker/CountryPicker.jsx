import { FormControl, NativeSelect } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import { countries } from '../../api'
import styles from './CountryPicker.module.css'
const CountryPicker = ({handleCountryChange}) => {
    const[fetchedCountries,setFetchedCountries]=useState([])
useEffect(()=>{

    const fetchCountries=async()=>{
        const response=await countries()
        setFetchedCountries(await response)
    }
    fetchCountries()
},[setFetchedCountries])
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect  defaultValue='' onChange={(e)=>handleCountryChange(e.target.value)} >
                <option value="">Global</option>
                {fetchedCountries.map((country,idx)=> <option  key={idx}value={country}>{country}</option> )}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
