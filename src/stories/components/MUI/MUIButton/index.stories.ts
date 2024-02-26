import type { Meta, StoryObj } from '@storybook/react'
import { MUIButton } from '@/stories/components/MUI/MUIButton/index'

const meta = {
  title: 'MUI/MUIButton',
  component: MUIButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MUIButton>

export default meta
type Story = StoryObj<typeof meta>

export const Story_MUIButton: Story = {
  args: {
    label: 'MUIのボタンコンポーネント',
  },
}
