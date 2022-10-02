import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, XAxis, YAxis, Tooltip } from "recharts";

const PhoneBar = () => {
    const [phones, setPhones] = useState([]);
    
    useEffect(() =>{
        // fetch(' https://openapi.programming-hero.com/api/phonesLoaded?search=iphone')
        // .then(res => res.json())
        // .then(data => setphonesLoaded(data))

        axios.get("https://openapi.programming-hero.com/api/phonesLoaded?search=iphone")
        .then(data => {
            const phonesLoaded = data.data.data;
          const phoneData = phonesLoaded.map(phone =>{
            const parts = phone.slug.split('-');
            const price = parseInt(parts[1]);
            const singlePhone = {
                name: phone.phone_name ,
                price: price
            }
            return singlePhone;
          })
          console.log(phoneData);
          setPhones(phoneData);
        })


    },[])
    return (
      <BarChart width={500} height={400} data={phones}>
        <Bar dataKey="price" fill="#8884d8"></Bar>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip> 
      </BarChart>
    );
};

export default PhoneBar; 