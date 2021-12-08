import { CSSProperties } from 'react'
import { Typography as MaterialTypography } from '@material-ui/core'
import { Variant } from '@material-ui/core/styles/createTypography'
import { Meta, Story } from '@storybook/react'
import { rem } from 'polished'

import { DESKTOP_VIEWPORT, LIGHT_THEME_SURFACE } from '@Constants/storybook'
import { SPACING_2 } from '@Styles/constants/spacing'

export default {
  title: 'Design System/Theme/Typography',
  parameters: {
    backgrounds: { default: LIGHT_THEME_SURFACE },
    controls: { disabled: true },
    viewport: { defaultViewport: DESKTOP_VIEWPORT },
  },
} as Meta

const mainStyle: CSSProperties = {
  lineHeight: 1.4,
  listStyle: 'none',
  maxWidth: 1290,
  margin: 15,
}

const smallTextStyle: CSSProperties = {
  fontSize: rem(16),
  lineHeight: 1,
  marginBottom: SPACING_2,
  textTransform: 'uppercase',
}

type TypeTypography = { label: string; variant: Variant }

const typographies: TypeTypography[] = [
  { label: 'Head Line 1', variant: 'h1' },
  { label: 'Head Line 2', variant: 'h2' },
  { label: 'Head Line 3', variant: 'h3' },
  { label: 'Body 1', variant: 'body1' },
  { label: 'Body 2', variant: 'body2' },
  { label: 'Subtitle 1', variant: 'subtitle1' },
  { label: 'caption', variant: 'caption' },
]

const Template: Story = () => (
  <ul style={mainStyle}>
    {typographies.map((typography) => (
      <li key={typography.label}>
        <div>
          <div style={smallTextStyle}>
            <small>{typography.label}</small>
          </div>
          <MaterialTypography variant={typography.variant}>typography test</MaterialTypography>
        </div>

        <br />
        <br />
      </li>
    ))}
  </ul>
)

export const Typography = Template.bind({})
Typography.args = {}
