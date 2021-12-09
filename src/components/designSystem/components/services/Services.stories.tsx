import { Meta, Story } from '@storybook/react'

import Services, { ServicesProps } from '@Components/designSystem/components/services/Services'

export default {
  title: 'Design System/Components/Services',
  component: Services,
} as Meta

const Template: Story<ServicesProps> = (args) => <Services {...args} />

export const Default = Template.bind({})
Default.args = {
  date: new Date().toISOString(),
  startHour: '21h',
  endHour: '22h',
  degree: 'collège',
  url: 'https://google.fr',
}

export const TwoHours = Template.bind({})
TwoHours.args = {
  date: new Date().toISOString(),
  startHour: '21h',
  endHour: '23h',
  degree: 'lycée',
  url: 'https://google.fr',
}
