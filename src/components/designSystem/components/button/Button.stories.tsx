import { Meta, Story } from '@storybook/react'
import { rem } from 'polished'

import Buttons from '@Components/designSystem/components/button/Button'

export default {
  title: 'Design System/Components/Button',
  component: Buttons,
} as Meta

const Template: Story = (args) => (
  <div css={{ display: 'flex', height: rem(50) }}>
    <Buttons {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Refused',
}
Default.argTypes = {
  onClick: { action: 'bouton cliqué' },
}
