const input = document.getElementById("notification");

function notification() {
    Notification.requestPermission().then(function (result) {
        if(result === 'granted'){
            showNotification();
        }else{
            console.log('Permission Denied');
        }
    });
}

function showNotification(){
    const notification = new Notification('New Notification',{
        body: input.value || "This is a default notification"
    });

    notification.onclick = function() {
        console.log("Notification is clicked");
    };
}