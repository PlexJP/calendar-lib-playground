import { TimelineView } from '@/stories/components/KendoReact/TimelineView'
import { LocalizationProvider } from '@progress/kendo-react-intl'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Kendo/TimelineView',
  component: TimelineView,
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
} satisfies Meta<typeof TimelineView>

export default meta
type Story = StoryObj<typeof meta>

export const Story_TimelineView: Story = {}
