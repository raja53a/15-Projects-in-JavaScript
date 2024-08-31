const toastBox = document.getElementById('toastBox');

const successMsg = "<i class='bx bx-md bxs-check-circle'></i>Success";
const failedMsg = "<i class='bx bx-md bxs-x-circle'></i>Failed";
const invalidMsg = "<i class='bx bx-md bxs-alarm-exclamation' ></i>Invalid";



function showNotification(msg){
    const notification = document.createElement('div');
    notification.classList.add('toast');
    notification.innerHTML = msg;
    toastBox.appendChild(notification);

    if(msg.includes("Failed")){
        notification.classList.add("error");
    }
    if(msg.includes("Invalid")){
        notification.classList.add("invalid");
    }

    setTimeout(()=>{
        notification.remove();
    },4000);
}

