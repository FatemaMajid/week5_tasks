import './notifications.css';

const notificationsData = [
    { imgSrc: "./pr1.png", name: "Zainab Saad", action: "commented on your project", time: "2h ago" },
    { imgSrc: "./pr2.png", name: "Ali Saad", action: "applied to your project", time: "2h ago" },
    { imgSrc: "./pr3.png", name: "Karar Emad", action: "liked your project", time: "2h ago" },
    { imgSrc: "./pr4.png", name: "Zainab Saad", action: "commented on your project", time: "1h ago" },
    { imgSrc: "./pr5.png", name: "Ghoufran Saad", action: "commented on your project", time: "2h ago" },
    { imgSrc: "./pr6.png", name: "Huda Salih", action: "commented on your project", time: "3h ago" },
    { imgSrc: "./pr7.png", name: "Mohammed Saad", action: "commented on your project", time: "1 week ago" },
];

const Notifications = ({ isVisible }) => {
    return (
        <div className={`notificationPageCode ${isVisible ? 'show' : 'hide'}`}>
            <h1>Notifications</h1>
            <p>You have {notificationsData.length} new <a href="#">notifications</a> today!</p>
            
            <div className="notificationSection">
                <h1>Today</h1>
                {notificationsData.slice(0, 3).map((notif, index) => (
                    <div key={index} className="notificationItem">
                        <img src={notif.imgSrc} alt={notif.name} />
                        <div className="text">
                            <p><a href="#">{notif.name}</a> {notif.action} <span>{notif.time}</span></p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="notificationSection">
                <h2>This Week</h2>
                {notificationsData.slice(3).map((notif, index) => (
                    <div key={index} className="notificationItem">
                        <img src={notif.imgSrc} alt={notif.name} />
                        <div className="text">
                            <p><a href="#">{notif.name}</a> {notif.action} <span>{notif.time}</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notifications;
