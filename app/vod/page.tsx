import React, { Suspense } from 'react'

// import HeaderVod from './components/headerVod'
import VodList from './components/vodList'
import Loading from './loading'

export default function Vod(props: any) {
  return (
    <React.Fragment>
      {/* <HeaderVod /> */}
      <Suspense key={Date.now()} fallback={<Loading />} >
        <VodList {...props} />
      </Suspense>
    </React.Fragment>
  )
}
