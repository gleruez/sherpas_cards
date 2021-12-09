import { FC } from 'react'
import { Typography } from '@material-ui/core'
import { Meta, Story } from '@storybook/react'

import { SPACING_2 } from '@Styles/constants/spacing'

import BasicCard, { BasicCardProps } from './BasicCard'

export default {
  title: 'Design System/Shapes/Card/BasicCard',
  component: BasicCard,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/sYM1vW0ZdHPRIzhrkTSXEn/IVTS-Composants-DS?node-id=9292%3A27376',
    },
  },
} as Meta

const Card: FC<BasicCardProps> = (props) => (
  <BasicCard style={{ padding: SPACING_2 }} {...props}>
    <Typography>Titre de la Card</Typography>
  </BasicCard>
)

const Template: Story<BasicCardProps> = (args) => <Card {...args} />

export const Default = Template.bind({})

const WithBorder: Story<BasicCardProps> = () => <Card borderColor="blue" />

export const BorderColor = WithBorder.bind({})
BorderColor.args = {
  borderColor: 'toto',
}
