import React, { Suspense } from 'react'
// import HeaderVod from '../../components/headerVod'
import VodInfo from '../components/vodInfo'
import Loading from '../../loading'

export default function VodInfoPage(props: any) {
  return (
    <React.Fragment>
      {/* <HeaderVod /> */}
      <Suspense key={Date.now()} fallback={<Loading />}>

        <VodInfo {...props} />
      </Suspense>
    </React.Fragment>
  )
}
