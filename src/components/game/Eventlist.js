import React, { useEffect } from "react"
import { getEvent } from "./GameManager.js"

export const GameList = (props) => {
    const [ event, setEvents ] = useState([])

    useEffect(() => {
        getEvent().then(data => setEvents(data))
    }, [])

    return (
        <article className="event">
            {
                event.map(event => {
                    return <section key={`event--${event.id}`} className="event">
                        <div className="event__title">{event.game} has an event hosted by {event.organizer}</div>
                        <div className="event__description">Event description {event.description}</div>
                        <div className="event__date">Event date is {event.date}</div>
                        <div className="event__time">Event start at {event.time}</div>
                    </section>
                })
            }
        </article>
    )
}