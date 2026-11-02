let is_ticket_booked=true
function Waiting_Period(){
    return new Promise ( (resolve,reject)=>{
    
    setTimeout(()=>{
        if(is_ticket_booked){
            resolve ("Ticket Is Booked")
        }
        else{
            reject ("Ticket Is Not Booked")
        }
    },1000)
    })
}

async function ticket_booked(){
    try{
        let result=await Waiting_Period()
        return result
    }
    catch(error){
        return "Ticket Is Not Available"
    }
}
ticket_booked().then (result => console.log(result))

console.log("Waiting Period")