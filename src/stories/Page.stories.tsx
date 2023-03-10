import { ComponentMeta, ComponentStory } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import React from 'react'

import { Page } from './Page'

export default {
  title: 'Example/Page',
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Page>

// TODO: take a look :)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />

export const LoggedOut = Template.bind({})

export const LoggedIn = Template.bind({})

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
LoggedIn.play = ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const loginButton = canvas.getByRole('button', { name: /Log in/i })
  userEvent.click(loginButton)
}
