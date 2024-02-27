import { EditableScheduler } from '@/stories/components/KendoReact/EditableScheduler/index'
import { TimelineView } from '@/stories/components/KendoReact/TimelineView'
import { IntlProvider, LocalizationProvider } from '@progress/kendo-react-intl'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Kendo/EditableScheduler',
  component: EditableScheduler,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => {
      return (
        <LocalizationProvider language="jp">
          <IntlProvider locale="ja">
            <Story />
          </IntlProvider>
        </LocalizationProvider>
      )
    },
  ],
} satisfies Meta<typeof EditableScheduler>

export default meta
type Story = StoryObj<typeof meta>

export const Story_EditableScheduler: Story = {
  args: {
    orientation: 'vertical',
  },
}
