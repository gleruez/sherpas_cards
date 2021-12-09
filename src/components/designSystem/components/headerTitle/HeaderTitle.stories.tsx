import { Meta, Story } from '@storybook/react'

import HeaderTitle from '@Components/designSystem/components/headerTitle/HeaderTitle'

export default {
  title: 'Design System/Components/HeaderTitle',
  component: HeaderTitle,
} as Meta

const Template: Story = (args) => <HeaderTitle {...args} />

export const Default = Template.bind({})
