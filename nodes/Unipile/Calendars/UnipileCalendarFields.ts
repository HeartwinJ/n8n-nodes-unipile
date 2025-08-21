import type { INodeProperties } from 'n8n-workflow';
import { calendarListFields } from './CalendarListFields';
import { calendarGetFields } from './CalendarGetFields';
import { calendarListEventsFields } from './CalendarListEventsFields';
import { calendarCreateEventFields } from './CalendarCreateEventFields';
import { calendarGetEventFields } from './CalendarGetEventFields';
import { calendarEditEventFields } from './CalendarEditEventFields';
import { calendarDeleteEventFields } from './CalendarDeleteEventFields';

export const unipileCalendarFields: INodeProperties[] = [
	...calendarListFields,
	...calendarGetFields,
	...calendarListEventsFields,
	...calendarCreateEventFields,
	...calendarGetEventFields,
	...calendarEditEventFields,
	...calendarDeleteEventFields,
];
