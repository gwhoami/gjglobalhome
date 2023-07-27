import React from "react";

const NavList = {
    user: [{
        menu: 'Dashboard',
        icon: <i className="bx bx-grid-alt"></i>,
        sub: [
            { name: 'Home', path: "/user" },
        ]
    }, {
        menu: 'Profile',
        icon: <i className="bx bxs-graduation"></i>,
        sub: [
            { name: 'Profile' },
            { icon: <i className="bx bx-info-square"></i>, name: 'General', path: "/user/profile/general" },
            { icon: <i className="bx bx-clipboard"></i>, name: 'Job', path: "/user/profile/job" },
            { icon: <i className="bx bxs-component"></i>, name: 'Business', path: "/user/profile/business" }
        ]
    },
    {
        menu: 'Event',
        icon: <i className="bx bxs-graduation"></i>,
        sub: [
            { name: 'Event' },
            {
                icon: <i className="bx bx-info-square"></i>,
                name: 'General',
                path: '/user/event/general',
            },
            {
                icon: <i className="bx bx-clipboard"></i>,
                name: 'Menu',
                path: '/user/event/menu',
            },
            {
                icon: <i className="bx bxs-component"></i>,
                name: 'Team',
                path: '/user/event/team',
            },
            {
                icon: <i className="bx bxs-component"></i>,
                name: 'Focus',
                path: '/user/event/focus',
            },
            {
                icon: <i className="bx bxs-component"></i>,
                name: 'Achievement',
                path: '/user/event/achievement',
            },
            {
                icon: <i className="bx bxs-component"></i>,
                name: 'Custumerscomments',
                path: '/user/event/Custumerscomments',
            },
            {
                icon: <i className="bx bxs-component"></i>,
                name: 'Gallery',
                path: '/user/event/gallery',
            },
            {
                icon: <i className="bx bxs-component"></i>,
                name: 'Schedule',
                path: '/user/event/schedule',
            },

        ],
    },
    {
        menu: 'Education',
        icon: <i className="bx bxs-book-reader"></i>,// bx bxs-institution
        sub: [
            { name: 'Education' },
            { icon: <i className="bx bxs-school"></i>, name: 'School', path: "/user/education/school" },
            { icon: <i className="bx bxs-institution"></i>, name: 'College', path: "/user/education/college" },
            { icon: <i className="bx bx-grid-horizontal"></i>, name: 'Others', path: "/user/education/other" }

        ]
    },
    {
        menu: 'Medical',
        icon: <i className="bx bx-plus-medical"></i>,
        sub: [
            { name: 'Medical' },
            { icon: <i className="bx bx-info-circle"></i>, name: 'General', path: "/user/medical/general" },
            { icon: <i className=" bx bxs-injection"></i>, name: 'Immunization', path: "/user/medical/immune" },
            { icon: <i className="bx bxs-virus"></i>, name: 'Allergies', path: "/user/medical/allergi" },
            { icon: <i className="bx bxs-first-aid"></i>, name: 'Health-Info', path: "/user/medical/healthinfo" },
            { icon: <i className="bx bxs-hotel"></i>, name: 'Surgery', path: "/user/medical/surgery" },
            { icon: <i className="bx bx-capsule"></i>, name: 'Medication', path: "/user/medical/medication" },
        ]
    },
    {
        menu: 'Settings',
        icon: <i className="bx bx-cog"></i>,
        sub: [
            { name: 'Settings' },
        ]
    }]
}
export default NavList;