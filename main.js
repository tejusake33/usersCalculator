function cal(event){
    if(event){
        event.preventDefault();
    }
    
    let launchingUsers = document.querySelector("[name='launchingUsers']").value;
    let growth = document.querySelector("[name='growth']").value;
    let growth2 = (growth/100)+1;
    let churn = document.querySelector("[name='churn']").value;
    let churn2 = (churn/100);
    let u0 = launchingUsers;

    var u1 = (u0*growth2) - (u0*churn2);
    var u2 = (u1*growth2) - (u1*churn2);
    var u3 = (u2*growth2) - (u2*churn2);
    var u4 = (u3*growth2) - (u3*churn2);
    var u5 = (u4*growth2) - (u4*churn2);

    console.log("details",launchingUsers,growth,churn);

    launchingUsers=parseFloat(launchingUsers);
    growth=parseFloat(growth);
    churn=parseFloat(churn);

    let finalAmount;
    let data = [];
    let labels = [];

    for (let a=1; a<=5; a++){
        finalAmount = [];
        finalAmount.push(u1);
        finalAmount.push(u2);
        finalAmount.push(u3);
        finalAmount.push(u4);
        finalAmount.push(u5);
        data.push(u1,u2,u3,u4,u5);
        labels.push(a);
    }
    console.log(data);

    let result = document.querySelector("[class='result']");
    console.log("final amount ", finalAmount[4]);

    result.innerHTML = Math.trunc(finalAmount[4]) + "users";
    createChart(labels,data);
}

let myChart = null;

function createChart(labelData,dataPoints){

    let labels = labelData;
    const data = {
        labels : labels,
        datasets : [
            {
                label : "yearly users growth",
                data : dataPoints,
                fill : false,
                borderColor : "rgb(75,192,192)",
                tension : 0.1
            }
        ]
    };
    const config = {
        type: "line",
        data: data,
        options: {responsive:false}
    };

    const ctx = document.getElementById("myChart").getContext('2d');

    if(myChart!=null){
        myChart.destroy();
    }
    myChart = new Chart(ctx,config);
}
cal();

