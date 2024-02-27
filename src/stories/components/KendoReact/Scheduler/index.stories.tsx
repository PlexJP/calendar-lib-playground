import { Scheduler } from '@/stories/components/KendoReact/Scheduler'
import { LocalizationProvider } from '@progress/kendo-react-intl'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Kendo/Scheduler',
  component: Scheduler,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => {
      return (
        <LocalizationProvider language="jp">
          <Story />
        </LocalizationProvider>
      )
    },
  ],
} satisfies Meta<typeof Scheduler>

export default meta
type Story = StoryObj<typeof meta>

export const Story_Scheduler: Story = {}
