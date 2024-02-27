import { Button } from '@/stories/components/KendoReact/Button'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Kendo/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Story_KendoButton: Story = {
  args: {
    label: 'Kendoのボタンコンポーネント',
  },
}
