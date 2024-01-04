import './Profile.css';
import { Route, Link, Routes } from "react-router-dom";

const Profile = () => {
    return (
        <div className="profile-wrapper">
            <DashboardMenu />
            
            <LinkedAccounts />
            <Settings />
            
        <Routes>
        <Route path="/profile/dashboard" component={DashboardMenu} />
        <Route path="/profile/linked-accounts" component={LinkedAccounts} />
        </Routes>
        </div>

    )
}

export default Profile; 


const DashboardMenu = () => {
    const menuList = [
        'Dashboard',
        'Linked Accounts',
        'Settings'
    ]

    return (
        <div className="dashboard-list">
            {menuList.map((item, index) => (
                <li key={index}>
                    {item}
                </li>
            ))}
        </div>
    )
}

const LinkedAccounts = () => {
    const accountsList = [
        'Facebook',
        'Twitter',
        'Tik Tok'
    ]
    return (
        <div className="accounts-list">
        {accountsList.map((item, index) => (
            <li key={index}>
                {item}
            </li>
        ))}
        </div>
    )
}

const Settings = () => {
    return (
        <p>settings image</p>
    )
}