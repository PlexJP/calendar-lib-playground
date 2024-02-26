import { Button } from '@/stories/components/MUI/Button/index'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'MUI/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Story_MUIButton: Story = {
  args: {
    label: 'MUIのボタンコンポーネント',
  },
}
