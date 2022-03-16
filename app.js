// var date=document.querySelector("#date1")
// var check=document.querySelector("#btn")

function reverseString(str)
{
    var sp=str.split('')
    console.log(sp)
    var rev=sp.reverse()
    console.log(rev)
    var jo=rev.join('')
    console.log(jo)

    if(jo==='racecar')
    {
        console.log("palindrome")
    }
}
console.log(reverseString('racecar'));
var date={
    day:5,
    month:8,
    year:2022
}
function daveConver(date)
{
    var dateString={day:'',month:'',year:''}
    if(date.day<10)
    {
        dateString.day='0'+date.day
    }
    else
    {
        dateString.day=date.day.toString();
    }
    

}