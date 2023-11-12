import React from 'react'
import { API_KEY } from "../../data/secret"
import VodItem from './vodItem';
import { resolve } from 'path';
import { rejects } from 'assert';

// /vod?s=lego
export default async function VodList(props: any) {
  const searchQ = props.searchParams?.s || "lego"
  // await new Promise((resolve:any,reject:any) => {
  //     setTimeout(() => {
  //       resolve("aaa")
  //     },2000)
  //   })

  const url = `https://www.omdbapi.com/?s=${searchQ}&apikey=${API_KEY}`;
  const resp = await fetch(url);
  const data = await resp.json();
  console.log(data.Search);
  const vod_ar = data.Search

  if (vod_ar) {

    return (
      <div className='container'>
        <h1>List of Shows:</h1>
        <div className="row">
          {vod_ar.map((item: any) => {
            return (
              <VodItem key={item.imdbID} item={item} />
            )
          })}
        </div>
      </div>
    )
  }
  else{
    return(
      <div className="container">
        <h2>Movies not found</h2>
      </div>
    )
  }
}


// await new Promise((resolve:any,reject:any) => {
//   setTimeout(() => {
//     resolve("aaa")
//   },2000)
// })