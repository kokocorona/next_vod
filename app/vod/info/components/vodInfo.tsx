import React from 'react'
import {API_KEY} from "../../../data/secret"
import InfoBtn from './infoBtn';

export default async function VodInfo(props:any) {
  const {id} = props.params;
  
  const url = `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`;
  const resp = await fetch(url);
  const data = await resp.json();
  console.log(data);

  return (
    <div className='container text-center col-md-9'>
      <img src={data.Poster} className='col-3 my-3'/>
      <h2 className='center'>{data.Title}</h2>
      <div>Runtime: {data.Runtime}</div>
      <div>Rating: {data.imdbRating}</div>
      <div>Genere:{data.Genre}</div>
      <p>Plot:
        {data.Plot}
      </p>
      <InfoBtn />
    </div>
  )
}
