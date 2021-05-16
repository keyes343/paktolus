import { css } from './enums/css';
export { css };

export enum allPath {
    home = '/',
    pricing = '/pricing',
}

export enum filters {
    today = 'Today',
}

export enum field_in_student {
    name = 'Name',
    parent = "Parent's Name",
    classs = 'Class',
    subjects = 'Subjects',
    details = 'Extra details',
    board = 'Board',
    timing = 'Preferred timings',
    gender = 'Who do you prefer',
    whatsapp = 'Whatsapp no.',
    phone = 'Phone',
    wantDemo = 'Want Demo',

    within = 'Within the next',
    inthe = 'In The',
    city = 'City',
    address = 'Address',
    landmark = 'Landmark',
    urgency = 'Urgently Required',
}

export enum field_in_tutor {
    name = 'Name',
    classs = 'Class You Teach',
    phone = 'Phone no.',
    subjects = 'Subjects You Teach',
    details = 'Extra details',
    board = 'Board',
    timing = 'Preferred timings',
    location = 'Nearest locations',
    whatsapp = 'Whatsapp no.',
    experience = 'Teaching experience',
    vehicle = 'Own a vehicle',

    address = 'Address',
    landmark = 'Landmark',
    demo = 'Demo',
}
