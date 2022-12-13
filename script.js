
let arr=[
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]
let bar=document.getElementsByClassName("bar");
let value=document.getElementsByClassName("box");
for(let i=0;i<bar.length;i++)
{
    if(i==2)
        bar[i].style.backgroundColor="hsl(186, 34%, 60%)";
    let perc=String(arr[i].amount +0.6*(arr[i].amount))+"px";
    value[i].innerHTML="$"+arr[i].amount;
    bar[i].style.height=perc;
}