import { ReactElement } from 'react'
import { Story, StoryContext } from '@storybook/react'

export type Decorator = (Story: Story, context: StoryContext) => ReactElement
