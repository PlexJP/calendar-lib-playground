import { guid } from '@progress/kendo-react-common'
import {
  AgendaView,
  DayView,
  MonthView,
  Scheduler as KendoScheduler,
  SchedulerDataChangeEvent,
  SchedulerDateChangeEvent,
  SchedulerViewChangeEvent,
  TimelineView as KendoTimelineView,
  WeekView,
} from '@progress/kendo-react-scheduler'
import { useState } from 'react'
import {
  customModelFields,
  displayDate,
  sampleDataWithCustomSchema,
} from './scripts'

type EditableSchedulerProps = {
  orientation: 'horizontal' | 'vertical'
}
export const EditableScheduler = ({ orientation }: EditableSchedulerProps) => {
  const [view, setView] = useState('day')
  const [date, setDate] = useState(displayDate)
  const [data, setData] = useState(sampleDataWithCustomSchema)

  const handleViewChange = (event: SchedulerViewChangeEvent) => {
    setView(event.value)
  }

  const handleDateChange = (event: SchedulerDateChangeEvent) => {
    setDate(event.value)
  }

  const handleDataChange = ({
    created,
    updated,
    deleted,
  }: SchedulerDataChangeEvent) => {
    setData(old =>
      old
        .filter(
          item =>
            deleted.find(current => current.TaskID === item.TaskID) ===
            undefined,
        )
        .map(
          item =>
            updated.find(current => current.TaskID === item.TaskID) || item,
        )
        .concat(
          created.map(item => Object.assign({}, item, { TaskID: guid() })),
        ),
    )
  }

  return (
    <KendoScheduler
      editable
      data={data}
      view={view}
      date={date}
      onDataChange={handleDataChange}
      onViewChange={handleViewChange}
      onDateChange={handleDateChange}
      // defaultDate={displayDate}
      modelFields={customModelFields}
      group={{
        resources: ['Persons', 'Location'],
        orientation,
      }}
      resources={[
        {
          name: 'Persons',
          data: [
            { text: '田中太郎', value: 1 },
            { text: '佐藤二郎', value: 2, color: '#FF7272' },
          ],
          field: 'PersonID',
          valueField: 'value',
          textField: 'text',
          colorField: 'color',
        },
        {
          name: 'Location',
          data: [
            { text: '現場A', value: 1, color: '#5392E4' },
            { text: '現場B', value: 2, color: '#54677B' },
          ],
          field: 'LocationIDs',
          valueField: 'value',
          textField: 'text',
          colorField: 'color',
        },
      ]}
    >
      <KendoTimelineView />
      <DayView />
      <WeekView />
      <MonthView />
      <AgendaView />
    </KendoScheduler>
  )
}
