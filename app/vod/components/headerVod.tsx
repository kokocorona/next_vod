"use client"

import React, { useRef } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';


export default function HeaderVod(props: any) {
  const inputRef: any = useRef();
  const router = useRouter();

  const onSearchClick = () => {
    router.push(`/vod?s=${inputRef.current.value}`)
  }

  const onKeyClick = (e: any) => {
    // console.log(e.key);
    if (e.key == "Enter") {
      onSearchClick()
    }
  }

  return (
    <header className='container-fluid bg-warning p-2'>
      <div className="container">
        <div className="row align-items-center">
          <div className='logo col-auto'>
            <h1>My vod</h1>
          </div>
          <nav className='col-auto ms-3'>
            <div className='d-flex'>
              <input onKeyDown={onKeyClick} ref={inputRef} className='form-control' placeholder='search for movies' />
              <button onClick={onSearchClick} className='btn btn-dark '>Search</button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
