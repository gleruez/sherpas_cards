import { Meta, Story } from '@storybook/react'

import BodyTitle, { BodyTitleProps } from '@Components/designSystem/components/bodyTitle/BodyTitle'

export default {
  title: 'Design System/Components/BodyTitle',
  component: BodyTitle,
} as Meta

const Template: Story<BodyTitleProps> = (args) => <BodyTitle {...args} />

export const Default = Template.bind({})
Default.args = {
  title: "Sessions d'évaluation- Maths",
  subtitle: 'Envoyé le DD/MM/YYYY à HH:MM',
  mode: 'IN_PROGRESS',
  modeTitle: 'OFFERT',
}

export const Accepted = Template.bind({})
Accepted.args = {
  ...Default.args,
  mode: 'ACCEPTED',
  modeTitle: 'Demande acceptée',
}

export const Refused = Template.bind({})
Refused.args = {
  ...Default.args,
  mode: 'REFUSED',
  modeTitle: 'Demande refusée',
}
