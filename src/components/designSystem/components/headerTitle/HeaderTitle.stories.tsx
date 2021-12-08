import { Meta, Story } from '@storybook/react'

import HeaderTitle, { HeaderTitleProps } from '@Components/designSystem/components/headerTitle/HeaderTitle'

export default {
  title: 'Design System/Components/HeaderTitle',
  component: HeaderTitle,
} as Meta

const Template: Story<HeaderTitleProps> = (args) => <HeaderTitle {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Proposition de cours',
}
