import React from 'react';
import './Events.css';

const eventsData = [
  {
    id: 1,
    title: 'Summer Music Festival',
    date: '2024-09-15',
    time: '6:00 PM',
    description: 'Join us for an evening of live music from popular bands and artists. Enjoy great food, drinks, and fun activities.',
    image: 'https://www.eventbrite.com/blog/wp-content/uploads/2022/08/image3-min-1.png', // Replace with actual event image
  },
  {
    id: 2,
    title: 'Tech Conference 2024',
    date: '2024-10-10',
    time: '9:00 AM',
    description: 'A full day of tech talks, workshops, and networking opportunities with industry leaders and innovators.',
    image: 'https://media.licdn.com/dms/image/D4D12AQFxuo8CWk6qIg/article-cover_image-shrink_720_1280/0/1681980612057?e=2147483647&v=beta&t=3UqUyScRpe57OfnfM_R1IiYRfooYgHhNCKykNPGVYeI', // Replace with actual event image
  },
  {
    id: 3,
    title: 'Art Exhibition Opening',
    date: '2024-11-01',
    time: '5:00 PM',
    description: 'Experience the latest art from emerging artists at our exclusive opening night event.',
    image: 'https://www.contrado.co.uk/blog/wp-content/uploads/2018/01/2-886x550.jpg', // Replace with actual event image
  },
];

const Events = () => {
  return (
    <div className="events-page">
      <h2>Upcoming Events</h2>
      <div className="events-container">
        {eventsData.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-details">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-date-time">
                {event.date} at {event.time}
              </p>
              <p className="event-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
