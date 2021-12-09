import { Meta, Story } from '@storybook/react'

import SherpasCard, { SherpasCardProps } from '@Components/designSystem/presentational/sherpasCard/SherpasCard'

export default {
  title: 'Design System/Presentational/SherpasCard',
  component: SherpasCard,
} as Meta

const Template: Story<SherpasCardProps> = (args) => <SherpasCard {...args} />

export const Default = Template.bind({})
Default.args = {
  mode: 'IN_PROGRESS',
  title: "Sessions d'évaluation - Maths",
  date: new Date().toISOString(),
  startHour: '21h',
  endHour: '22h',
  degree: 'collège',
  url: 'https://google.fr',
}
Default.argTypes = {
  updateBooking: { action: 'booking will be updated' },
  acceptBooking: { action: 'booking will be accepted' },
}

export const Accepted = Template.bind({})
Accepted.args = {
  ...Default.args,
  mode: 'ACCEPTED',
}
Accepted.argTypes = {
  updateBooking: { action: 'booking will be updated' },
}

export const Refused = Template.bind({})
Refused.args = {
  ...Default.args,
  mode: 'REFUSED',
}
Refused.argTypes = {
  updateBooking: { action: 'booking will be updated' },
  cancelBooking: { action: 'booking will be canceled' },
}
