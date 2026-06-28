import { useMemo } from 'react'
import './ActivityTagCloud.css'

const doneFaceImg = `${import.meta.env.BASE_URL}smiley-face.jpg`
const notDoneFaceImg = `${import.meta.env.BASE_URL}frowny-face.jpg`

type Activity = {
  title: string
  done: boolean
  date: string
  doneImg?: string
  notDoneImg?: string
}

export const activities: Activity[] = [
  { title: 'Watch one of every sport', done: true, date: '8/25/2026' },
  { title: 'Union bowling', done: false, date: '' },
  { title: 'Paint a pot', done: false, date: '' },
  { title: 'ASLC Movi', done: false, date: '' },
  { title: 'Flip', done: false, date: '' },
  { title: '$', done: false, date: '' },
  { title: 'Landis Spikeball', done: false, date: '' },
  { title: 'Suwannee', done: false, date: '' },
  { title: 'Sem Caf', done: false, date: '' },
  { title: 'Rez', done: false, date: '' },
  { title: 'Salley Volleyball', done: false, date: '' },
  { title: 'IM Champions', done: false, date: '' },
  { title: 'Racquetball', done: false, date: '' },
  { title: 'Truco', done: false, date: '' },
  { title: 'DS night', done: false, date: '' },
  { title: 'Dinner party', done: false, date: '' },
  { title: 'Quantum BBQ', done: false, date: '' },
  { title: 'Karaoke', done: false, date: '' },
  { title: 'Thomasville Trip', done: false, date: '' },
  { title: 'White elephant party', done: false, date: '' },
  { title: 'Christmas movie party', done: false, date: '' },
  { title: 'Halloween movie party', done: false, date: '' },
  { title: 'Carson birthday rager', done: false, date: '' },
  { title: 'Amaya birthday rager', done: false, date: '' },
  { title: 'Beach day', done: false, date: '' },
  { title: 'Picnic', done: false, date: '' },
  { title: 'Half marathon + training', done: false, date: '' },
  { title: 'Bar crawl', done: false, date: '' },
  { title: 'Costume party', done: false, date: '' },
  { title: 'Seafood boil', done: false, date: '' },
  { title: 'Sink hole', done: false, date: '' },
  { title: 'Lazy river place (forgot the name', done: false, date: '' },
  { title: 'Fun station', done: false, date: '' },
  { title: 'Maclay gardens', done: false, date: '' },
  { title: 'FSU Play', done: false, date: '' },
  { title: 'FSU Symphony', done: false, date: '' },
  { title: 'Downtown happy hour', done: false, date: '' },
  { title: 'Grad pictures', done: false, date: '' },
  { title: 'Ring ceremony', done: false, date: '' },
  { title: 'Graduation', done: false, date: '' },
  { title: 'Pickleball', done: false, date: '' },
  { title: 'Outdoor pursuit', done: false, date: '' },
  { title: 'Circus', done: false, date: '' },
  { title: 'Mason comedy show', done: false, date: '' },
  { title: 'Spin class', done: false, date: '' },
  { title: 'Yoga', done: false, date: '' },
  { title: 'Asad', done: false, date: '' },
  { title: 'Hillel', done: false, date: '' },
  { title: '2016 party', done: false, date: '' },
  { title: 'Wine night', done: false, date: '' },
  { title: 'Fruit tier list night', done: false, date: '' },
  { title: 'Spelling bee night', done: false, date: '' },
  { title: 'Twister night', done: false, date: '' },
  { title: 'Dance classes', done: false, date: '' },
  { title: 'Outdoor pursuit', done: false, date: '' },
]

type ActivityTagCloudProps = {
  activities?: Activity[]
}

function getTagClass(title: string) {
  const score = title.split('').reduce((total, letter) => {
    return total + letter.charCodeAt(0)
  }, 0)

  return `tag-cloud__item tag-cloud__item--${(score % 5) + 1}`
}

function getStatusImage(activity: Activity) {
  return activity.done
    ? activity.doneImg || doneFaceImg
    : activity.notDoneImg || notDoneFaceImg
}

function ActivityTagCloud({ activities: activityList = activities }: ActivityTagCloudProps) {
  const uniqueActivities = useMemo(() => {
    const seenTitles = new Set<string>()

    return activityList.filter((activity) => {
      const cleanTitle = activity.title.trim()

      if (!cleanTitle || seenTitles.has(cleanTitle)) {
        return false
      }

      seenTitles.add(cleanTitle)
      return true
    })
  }, [activityList])

  const doneCount = uniqueActivities.filter((activity) => activity.done).length

  return (
    <section className="tag-cloud" aria-labelledby="activity-tag-cloud-heading">
      <h2 id="activity-tag-cloud-heading">Senior Year Max Activities</h2>
      <p>
        {doneCount} done. {uniqueActivities.length - doneCount} not done.
      </p>
      <div className="tag-cloud__list">
        {uniqueActivities.map((activity) => {
          const statusLabel = activity.done ? `Conquered on ${activity.date}` : 'Unconquered (for now).'

          return (
            <article
              aria-label={`${activity.title}: ${statusLabel}`}
              className={`${getTagClass(activity.title)} ${
                activity.done ? 'tag-cloud__item--done' : 'tag-cloud__item--not-done'
              }`}
              key={activity.title}
            >
              <span className="tag-cloud__title">{activity.title}</span>
              <span className="tag-cloud__status">
                <img alt="" src={getStatusImage(activity)} />
                <span>{statusLabel}</span>
              </span>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default ActivityTagCloud
