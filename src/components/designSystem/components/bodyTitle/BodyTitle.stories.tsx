import { Meta, Story } from '@storybook/react'

import BodyTitle, { BodyTitleProps } from '@Components/designSystem/components/bodyTitle/BodyTitle'
import { isoDateToFormat, isoHourToFormat } from '@Utils/date'

export default {
  title: 'Design System/Components/BodyTitle',
  component: BodyTitle,
} as Meta

const Template: Story<BodyTitleProps> = (args) => <BodyTitle {...args} />

export const Default = Template.bind({})
Default.args = {
  title: "Sessions d'évaluation - Maths",
  date: isoDateToFormat(new Date().toISOString()),
  time: isoHourToFormat(new Date().toISOString()),
  mode: 'IN_PROGRESS',
}

export const Accepted = Template.bind({})
Accepted.args = {
  ...Default.args,
  mode: 'ACCEPTED',
}

export const Refused = Template.bind({})
Refused.args = {
  ...Default.args,
  mode: 'REFUSED',
}
