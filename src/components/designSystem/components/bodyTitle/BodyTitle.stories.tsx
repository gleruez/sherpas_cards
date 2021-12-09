import { Meta, Story } from '@storybook/react'
import { rem } from 'polished'

import BodyTitle, { BodyTitleProps } from '@Components/designSystem/components/bodyTitle/BodyTitle'
import { isoDateToFormat } from '@Utils/date'

export default {
  title: 'Design System/Components/BodyTitle',
  component: BodyTitle,
} as Meta

const Template: Story<BodyTitleProps> = (args) => (
  <div css={{ width: rem(600), height: rem(400) }}>
    <BodyTitle {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  title: "Sessions d'évaluation - Maths",
  date: isoDateToFormat(new Date().toISOString()),
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
