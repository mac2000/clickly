import {ReportRow} from './dashboard.component';

export interface Aggregated {
  name: string;
  count: number;
  users: number;
}

export interface AggregatedEvent extends Aggregated {
  labels: Aggregated[];
}

export interface AggregatedData {
  events: AggregatedEvent[];
  clicks: number;
  users: number;
}

const uniqueActions = (events: ReportRow[]): string[] => events
  ? Array.from(new Set<string>(events.map((e: ReportRow): string => e.eventAction)))
  : [];

const uniqueUsers = (events: ReportRow[]): number[] => events
  ? Array.from(new Set<number>(events.map((e: ReportRow): number => e.clientId)))
  : [];

const uniqueLabels = (events: ReportRow[]): string[] => events
  ? Array.from(new Set<string>(events.map((e: ReportRow): string => e.eventLabel)))
  : [];

const uniqueUsersCount = (events: ReportRow[]) => uniqueUsers(events).length;
const clicksCount = (events: ReportRow[]) => events.filter((e: ReportRow): boolean => e.eventAction !== 'view').length;

export const countEvents = (events: ReportRow[]): AggregatedData => {
  const data = uniqueActions(events)
    .map(action => ({
      action,
      events: events.filter(e => e.eventAction === action)
    }))
    .map(action => ({
      name: action.action,
      count: action.events.length,
      users: uniqueUsersCount(action.events),
      labels: uniqueLabels(action.events)
        .map((label: string): Aggregated => ({
          name: label,
          count: action.events.filter(e => e.eventLabel === label).length,
          users: uniqueUsersCount(action.events.filter(e => e.eventLabel === label))
        }))
        .sort((a, b) => b.count - a.count)
    }))
    .sort((a, b) => b.count - a.count);

  return {
    events: data,
    clicks: clicksCount(events),
    users: uniqueUsersCount(events)
  };
};

export const buildExitEvent = (event: ReportRow): ReportRow => ({
  eventCategory: 'exit',
  eventAction: 'exit',
  eventLabel: 'exit',
  clientId: event.clientId,
  timestamp: event.timestamp
});
