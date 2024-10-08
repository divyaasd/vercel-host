import React, { useState } from 'react'

function Pay() {
    const [amount,setAmount]=useState()
    const handleSubmit=()=>{
           
        if(amount==''){
            alert("please enter amount")
        }
        else{
            var option={
                key:'',
                key_secret:'',
                amount:amount*100,
                currency:'INR',
                name:"Payment gateway",
                description:"Sample",
                handler:function(response){
                    alert(response.razorpay_payment_id)
                },
                prefill:{
                    name:'Divya',
                    email:'divyaas340@gmail.com',
                    contact:'9876543210'
                },
                notes:{
                    address:'Razorpay office'
                },
                theme:{
                    color:'blue'
                }
            }

            var pay1=new window.RAZORPAY(option);
            pay1.open()
        }

    }
  return (
    <div>
        <input type="text" placeholder='Enter amount' value={amount} onChange={(e)=>setAmount(e.target.value)} />
        <br /><br />
        <input type="submit" value="Submit" onClick={handleSubmit} />
    </div>
  )
}

export default Pay