export type UserRole = 'clinic' | 'dermatologist'

export type Shift = {
  id: string
  clinic: string
  location: string
  date: string
  duration: string
  compensation: number
  specialty: string
  ehr: string
  status: 'Open' | 'Applied' | 'Confirmed'
  applicants: number
}

export type Booking = {
  id: string
  clinic: string
  dermatologist: string
  date: string
  status: 'Awaiting acceptance' | 'Confirmed' | 'Ready for payout'
  payment: number
}

export const shifts: Shift[] = [
  {
    id: 'shift-1042',
    clinic: 'Triangle Dermatology Center',
    location: 'Raleigh, NC',
    date: 'Jun 24, 2026',
    duration: '8 hr',
    compensation: 2200,
    specialty: 'General dermatology',
    ehr: 'EMA',
    status: 'Open',
    applicants: 3,
  },
  {
    id: 'shift-1043',
    clinic: 'Blue Ridge Skin Surgery',
    location: 'Asheville, NC',
    date: 'Jun 27, 2026',
    duration: '6 hr',
    compensation: 2800,
    specialty: 'Mohs surgery',
    ehr: 'ModMed',
    status: 'Applied',
    applicants: 5,
  },
  {
    id: 'shift-1044',
    clinic: 'Coastal Pediatric Derm',
    location: 'Wilmington, NC',
    date: 'Jul 2, 2026',
    duration: '7 hr',
    compensation: 2100,
    specialty: 'Pediatric dermatology',
    ehr: 'Epic',
    status: 'Open',
    applicants: 1,
  },
]

export const bookings: Booking[] = [
  {
    id: 'book-2201',
    clinic: 'WakeMed Dermatology',
    dermatologist: 'Dr. Maya Chen',
    date: 'Jun 19, 2026',
    status: 'Confirmed',
    payment: 2400,
  },
  {
    id: 'book-2202',
    clinic: 'Triangle Dermatology Center',
    dermatologist: 'Dr. Andre Wallace',
    date: 'Jun 24, 2026',
    status: 'Awaiting acceptance',
    payment: 2200,
  },
  {
    id: 'book-2203',
    clinic: 'Carolina Skin Institute',
    dermatologist: 'Dr. Lina Patel',
    date: 'Jun 12, 2026',
    status: 'Ready for payout',
    payment: 2600,
  },
]

export const dashboardStats = [
  { label: 'Open shifts', value: '18', detail: '7 match NC providers' },
  { label: 'Avg. time to fill', value: '22h', detail: 'MVP target under 48h' },
  { label: 'Credential files', value: '84%', detail: '12 expiring this month' },
  { label: 'Platform revenue', value: '$9.8k', detail: 'Projected June fees' },
]

export const roadmap = [
  'Clinic shift posting and dermatologist discovery',
  'Application review, booking confirmation, and calendar view',
  'Stripe payment capture, invoice, receipt, and payout status',
  'Credential vault with expiration reminders',
]

export const messages = [
  {
    from: 'Triangle Dermatology Center',
    subject: 'Confirming EMA familiarity for Jun 24',
    preview: 'Can you confirm comfort with biopsy documentation and follow-up templates?',
    unread: true,
  },
  {
    from: 'Dr. Maya Chen',
    subject: 'Updated malpractice certificate',
    preview: 'I uploaded the renewed policy document to the booking vault.',
    unread: false,
  },
  {
    from: 'Carolina Skin Institute',
    subject: 'Procedure schedule finalized',
    preview: 'The morning block has two excisions and one cosmetic consult.',
    unread: false,
  },
]
