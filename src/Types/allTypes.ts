import { e } from './index';

export type FinalForm =
    | (form_student_step1 & form_student_step2)
    | form_tutor_step1;

export type user = {
    displayName: string;
    email: string | null;
    emailVerified: boolean;
    phoneNumber: string | null;
    photoURL?: string;
    refreshToken?: string;
    uid?: string;
};

export type properties = {
    lh?: string;
    wd?: string;
    maxwd?: string;
    minwd?: string;
    ht?: string;
    pos?: string;
    mrgn?: string;
    bgcl?: string;
    bgcl2?: string;
    zindx?: string;
    pd?: string;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    br?: string;
    size?: string;
    cursor?: string;
    shadow?: string;
    wght?: string;
    ls?: string;
    va?: string;
    minht?: string;
    maxht?: string;
    cl?: string;
    bd?: string;
    flow?: string;
    dsply?: string;
    accht?: string;
    pdli?: string;
    transform?: string;
    transition?: string;
    flex?: string;
    td?: string;
    font?: string;
    opacity?: string;
    gc?: string;
    gr?: string;
    bdtop?: string;
    bdbottom?: string;
    bdright?: string;
    bdleft?: string;
    txt?: string;
    scrollht?: string;
    scrollwd?: string;
    bgimg?: string;

    sizee?: string;
    overflowY?: string;
    overflowX?: string;

    phfont?: string;
    phsize?: string;
    phbd?: string;
    blurbd?: string;
    focusbd?: string;
    phcl?: string;

    jc?: string;
    ai?: string;
    dir?: string;
    wrap?: string;

    red?: string | boolean;
    blue?: string | boolean;
    green?: string | boolean;
    yellow?: string | boolean;
    orange?: string | boolean;
    purple?: string | boolean;
    black?: string | boolean;
    cyan?: string | boolean;

    bgpos?: string;
    gap?: string;
    col?: string;
    area?: string;
    ac?: string;
    ji?: string;
    ws?: string;
    to?: string;
    row?: string;
    gar?: string;
    pi?: string;
    pdl?: string;
    gac?: string;
    bgsize?: string;
};

export type allPath = {};

export type form_student_step1 = {
    [e.field_in_student.name]: string;
    [e.field_in_student.parent]: string;
    [e.field_in_student.details]: string;
    [e.field_in_student.whatsapp]: string;
    [e.field_in_student.phone]: string;
    [e.field_in_student.classs]: string[];
    [e.field_in_student.subjects]: string[];
    [e.field_in_student.board]: string[];
    [e.field_in_student.gender]: string;
    [e.field_in_student.timing]: string[];
    [e.field_in_student.wantDemo]: boolean;
};
export type form_student_step2 = {
    [e.field_in_student.within]: string;
    [e.field_in_student.inthe]: string;
    [e.field_in_student.urgency]: string;
    [e.field_in_student.address]: string;
    [e.field_in_student.city]: string;
    [e.field_in_student.landmark]: string;
};

export type form_tutor_step1 = {
    [e.field_in_tutor.name]: string;
    [e.field_in_tutor.details]: string;
    [e.field_in_tutor.whatsapp]: string;
    [e.field_in_tutor.phone]: string;
    [e.field_in_tutor.classs]: string[];
    [e.field_in_tutor.subjects]: string[];
    [e.field_in_tutor.board]: string[];
    [e.field_in_tutor.location]: string[];
    [e.field_in_tutor.experience]: string;
    [e.field_in_tutor.timing]: string[];
    [e.field_in_tutor.demo]: boolean;
};
