var x=[{
    devices: "IV",
    mac_address: "00:1B:44:11:3A:B7",
    ip: "127.0.0.2",
    createdDate: "2022-03-14",
    powerConsumption: 50
}, {
    devices: "Washer",
    mac_address: "00:1B:44:11:3A:B7",
    ip: "127.0.0.2",
    createdDate: "2022-03-14",
    powerConsumption: 60
},
    {
        devices: "Refrigerator",
        mac_address: "00:1B:44:11:3A:B7",
        ip: "127.0.0.2",
        createdDate: "2022-03-14",
        powerConsumption: 80
    },
    {
        devices: "Selling Fan",
        mac_address: "00:1B:44:11:3A:B7",
        ip: "127.0.0.2",
        createdDate: "2022-03-14",
        powerConsumption: 100
    }
];
var dataset=x;
reload(dataset);
/*------------chart------------------*/
const ctx = document.getElementById('myChart');
const data = {
    labels: [
        'TV',
        'Washer',
        'Refrigerator',
        'Selling Fan',
    ],
    datasets: [{
        label: 'Power Consumpotion',
        data: [50, 60, 80, 100],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(235, 160, 54)',
            'rgb(255, 205, 86)',
            'rgb(54, 220, 235)',
        ],
        hoverOffset: 4
    }]
};
const config = {
    type: 'doughnut',
    data: data,
};
const myChart = new Chart(ctx, config);
/*------------------reload---------------------*/
function reload(dataset){
    table="<thead><tr><th>Devices</th><th>MAC Address</th><th>IP</th><th> Created Date</th><th>Power Consumpiton (Kw/H)</th><th>Action</th></tr></thead><tbody>";
    a=0;
    for (let i = 1; i <dataset.length+1; i++) {
        a=a+dataset[i-1].powerConsumption;
        table += "<tr><td>" +
            dataset[i-1].devices +
            "</td><td>" +
            dataset[i-1].mac_address+
            "</td><td>" +
            dataset[i-1].ip +
            "</td><td>" +
            dataset[i-1].createdDate+
            "</td><td>" +
            dataset[i-1].powerConsumption+
            "</td></tr>";
    };
    table = table+"<tr><td>"+"Total"+"</td><td colspan=\"4\">"+a+"</td></tr></tbody>"
    document.getElementById("table").innerHTML = table;
}
function submit(){
    var name = document.getElementById("name").value;
    var ip = document.getElementById("ip").value;
    var mac_address= document.getElementById("mac_address").value;
    var powerConsumption = document.getElementById("powerConsumption").value;
    var today = new Date();
    var date = today.getFullYear()+"-"+(today.getMonth()+1+"-"+today.getDate());
    powerConsumption=parseInt(powerConsumption);
    console.log(name);
    console.log(ip);
    if(name == "" || ip =="" || powerConsumption =="" || mac_address ==""){
        alert("name or ip or power Consumption or mac address are null");
    }
    else {
        alert("Thành công");
        dataset.push({
            devices: name,
            mac_address: mac_address,
            ip: ip,
            createdDate: date,
            powerConsumption: powerConsumption,
        });
        reload(dataset);
    }
}
function menu(){
    var aside=document.getElementById("aside");
    aside.style.display='block';
}
$(document).ready(function () {
    $(window).resize(function() {
        var width = $(window).width();
        if (width < 600){
            $(document).click(function() {
                //Hide the menus if visible
                $('#aside').hide();
            });
            $('#iconMenu').click(function(event) {
                //Hide the menus if visible
                event.stopPropagation();
            });
        }
    });

});

