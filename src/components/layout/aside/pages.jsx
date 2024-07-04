import DashboardIcon from '../../../assets/svgs/pagesIcons/DashboardIcon';
import ProjectsIcon from '../../../assets/svgs/pagesIcons/ProjectsIcon';
import MapsIcon from '../../../assets/svgs/pagesIcons/MapsIcon';
import VehiclesIcon from '../../../assets/svgs/pagesIcons/VehiclesIcon';
import UsersIcon from '../../../assets/svgs/pagesIcons/UsersIcon';
import SensorsIcon from '../../../assets/svgs/pagesIcons/SensorsIcon';
import ViolationsIcon from '../../../assets/svgs/pagesIcons/ViolationsIcon';
import ScoreCardIcon from '../../../assets/svgs/pagesIcons/ScoreCardIcon';
import PlansAndPricingIcon from '../../../assets/svgs/pagesIcons/PlansAndPricingIcon';
import SettingsIcon from '../../../assets/svgs/pagesIcons/SettingsIcon';

export const pages = [
    {
        title: 'Dashboard',
        icon: <DashboardIcon />,
        subPages: [
            {
                title: 'Home',
                link: '/home'
            },
            {
                title: 'Active Devices',
                link: '/active-devices'
            },
            {
                title: 'Workforce',
                link: '/workforce'
            },
            {
                title: 'Device Data',
                link: '/device-data'
            },
            {
                title: 'Vehicles Data',
                link: '/vehicles-data'
            },
            {
                title: 'SOS',
                link: '/sos'
            },
        ]
    },
    {
        title: 'Projects',
        link: '/projects',
        icon: <ProjectsIcon />,
    },
    {
        title: 'Maps',
        icon: <MapsIcon />,
        subPages: [
            {
                title: 'Realtime',
                link: '/realtime'
            },
            {
                title: 'Geofence',
                link: '/geofence'
            },
        ]
    },
    {
        title: 'Vehicles',
        link: '/vehicles',
        icon: <VehiclesIcon />,
    },  
    {
        title: 'Users',
        link: '/users',
        icon: <UsersIcon />,
    },  
    {
        title: 'Sensors',
        link: '/sensors',
        icon: <SensorsIcon />,
    },  
    {
        title: 'Violations',
        link: '/violations',
        icon: <ViolationsIcon />,
    },  
    {
        title: 'Score Card',
        link: '/score-card',
        icon: <ScoreCardIcon />,
    },
    {
        title: 'Plans & Pricing',
        icon: <PlansAndPricingIcon />,
        subPages: [
            {
                title: 'Plans',
                link: '/plans'
            },
            {
                title: 'Transactions',
                link: '/transactions'
            },
        ]
    }, 
    {
        title: 'Settings',
        icon: <SettingsIcon />,
        subPages: [
            {
                title: 'Update Profile',
                link: '/update-profile'
            },
        ]
    },
]