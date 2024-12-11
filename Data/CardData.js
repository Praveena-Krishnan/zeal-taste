import { HiLocationMarker, HiClock, HiCalendar } from 'react-icons/hi';

const cardData = [
  {
    icon: <HiLocationMarker className="text-white text-4xl" />,
    title: 'Find Us',
    description: [
      '1234 Innovation Drive',
      'Suite 567 Cityville, State',
      '89012 Country',
    ],
  },
  {
    icon: <HiClock className="text-white text-4xl" />,
    title: 'Open Hours',
    description: [
      'Mon To Fri',
      '9:00 AM - 9:00 PM',
      'Sat 9:00 AM - 10 PM',
    ],
  },
  {
    icon: <HiCalendar className="text-white text-4xl" />,
    title: 'Reservation',
    description: [
      '+1 (800) 555-1234',
      'abc@zealtaste.com',
    ],
  },
];

export default cardData;
