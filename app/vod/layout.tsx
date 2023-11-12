import React from 'react'
import HeaderVod from './components/headerVod'

export default function LayoutVod({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <React.Fragment>
      
      <HeaderVod />
      {children}
    </React.Fragment>
  )
}
