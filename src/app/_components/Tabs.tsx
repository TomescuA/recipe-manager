import React from 'react'
import { TabsContainer, TabButton } from './styles/Tabs.styles'

interface TabsProps {
  tabs: string[]
  activeTab: string
  onTabChange: (tab: string) => void
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <TabsContainer>
      {tabs.map((tab) => (
        <TabButton
          key={tab}
          className={activeTab === tab ? 'active' : ''}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </TabButton>
      ))}
    </TabsContainer>
  )
}

export default Tabs
