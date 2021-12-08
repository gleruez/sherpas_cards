import { Meta, Story } from '@storybook/react'

import Mea, { MeaProps } from '@Components/designSystem/components/mea/Mea'

export default {
  title: 'Design System/Components/Mea',
  component: Mea,
} as Meta

const Template: Story<MeaProps> = (args) => <Mea {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Demande acceptée',
  mode: 'ACCEPTED',
}
export const Refused = Template.bind({})
Refused.args = {
  title: 'Demande refusée',
  mode: 'REFUSED',
}
