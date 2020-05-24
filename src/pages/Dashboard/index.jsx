import React from 'react'
import AsideMenu from './AsideMenu/AsideMenu'
import TripsSettings from './TripsSettings/TripsSettings'
import Home from './Home/Home'
//Styles
import { DashboardContainer } from './styles'

const Dashboard = () => {
  return (
    <DashboardContainer>
      <AsideMenu />
      <TripsSettings />
      <Home />
    </DashboardContainer>
  )
}

export default Dashboard
