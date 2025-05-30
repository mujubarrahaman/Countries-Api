import React, { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'

const CountryDetails = () => {
    const {name} = useParams()
    const [countryData,setCountryData] = useState({})
    const [isLoading,setIsLoading] = useState(true)
    useEffect(()=>{

        fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data);
            setCountryData(data [0])
        }).finally(()=>{
            setIsLoading(false)
        })

    },[name])

    if (isLoading){
        return <Loading/>
    }
  return (
    <div className='text-center mt-5 p-6'>
        <h2 className='text-3xl font-bold '>{countryData?.name?.common}</h2>
       <div className="p-4 border rounded-xl shadow-lg mt-2">
       <img className='w-full h-32 object-contain mt-3 ' src={countryData?.flags?.svg} alt="" />
        <p className='mt-2'><b>Capital</b>: {countryData?.capital?.[0]}</p>
        <p className='mt-1'><b>Region</b>: {countryData?.region}</p>
        <p className='mt-1'><b>Population</b>: {countryData?.population}</p>
       </div>
    </div>
  )
}

export default CountryDetails