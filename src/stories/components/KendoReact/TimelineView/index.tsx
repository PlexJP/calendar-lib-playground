import { Day } from '@progress/kendo-date-math'
import {
  Scheduler as KendoScheduler,
  TimelineView as KendoTimelineView,
} from '@progress/kendo-react-scheduler'
import { displayDate, sampleData } from '../scripts'

type TimelineViewProps = React.ComponentProps<typeof KendoTimelineView>
export const TimelineView = (props: TimelineViewProps) => {
  return (
    <KendoScheduler data={sampleData} defaultDate={displayDate}>
      <KendoTimelineView
        {...props}
        title="Hour-By-Hour"
        numberOfDays={2}
        columnWidth={100}
        slotDuration={60}
        slotDivisions={1}
        startTime={'08:00'}
        endTime={'18:00'}
        workDayStart={'09:00'}
        workDayEnd={'17:00'}
        workWeekStart={Day.Sunday}
        workWeekEnd={Day.Monday}
        showWorkHours={false}
      />
    </KendoScheduler>
  )
}
