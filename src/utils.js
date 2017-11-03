export const addDays = (date, days) => {
    const result = new Date(date)
    result.setDate(result.getDate() + days)
    return result
}

export const dateDaysAgo = days => addDays(new Date(), days)

export const dateToAnalyticsFormat = date => date.toISOString().split('T').shift()

export const dateFromAnalyticsFormat = str => new Date(str.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3'))