
   var orderProduct =[];
   var totalNumber=[];
   


    document.getElementById("button").addEventListener('click',function(){
        var order= document.getElementById('order')
        var price= document.getElementById('price')
        var Number1 =document.getElementById('number1')
       
        totalNumber.push(Number1.innerHTML);
        console.log(totalNumber);
        
        
        orderProduct.push(price.innerHTML);
        localStorage.setItem("arry",orderProduct)
       
        showOrder();
        count();
        sumAarry();
        delivaryBill();
        totalValue();
    })
    
    document.getElementById("button2").addEventListener('click',function(){
        var order= document.getElementById('order')
        var price2= document.getElementById('price2')
        var Number2 =document.getElementById('number2')
        orderProduct.push(price2.innerHTML)
        totalNumber.push(Number2.innerHTML);
        localStorage.setItem("arry",orderProduct)
        console.log(totalNumber);

        
        showOrder();
        count();
        sumAarry();
        delivaryBill();
        totalValue();
       
    })
    
    function showOrder(){
            order.innerHTML='';
            var product = localStorage.getItem('arry')
           orderProduct.forEach(function (item){
           order.innerHTML+= "<li> " +item+" </li>";

      
       console.log(product);
          
           })
    }

    document.getElementById('orginalOrder').addEventListener('click',function(){
        var show= document.getElementById('show')
        var items= orderProduct
        show.innerHTML=items;
       var appear= document.getElementById('frm')
       appear.style.display ='block'
        
    })

     document.getElementById('msg').addEventListener('click',function(){
         alert('Thank you .Your order is Successful')
     })
    
    function count(){
        var orderNumbers =document.getElementById('cc')
    var length =orderProduct.length
    orderNumbers.innerHTML=length;
    }

    function sumAarry(){
       // var arraySum= totalNumber.reduce((total,current)=>total + current,0);
   var arrayNumber=totalNumber.reduce(function(prev,cur){
       return(Number(prev) ||0)  + (Number(cur) || 0);
      
   })
 
   var Sum =document.getElementById('sum');
   Sum.innerHTML=arrayNumber;

   console.log(arrayNumber);
 console.log(totalNumber);
    }

    function delivaryBill(){
        var delivary = document.getElementById('charge')
        var delivary2=0;
        if(totalNumber>=10)
        delivary2= 20;
        
        else{
            delivary2=20;
        }


      delivary.innerHTML= delivary2;
        console.log(delivary2);

        
    }

    function totalValue(){
        var delivary = document.getElementById('charge').innerText
       var delivaryNumber= parseFloat(delivary)
      var  Sum =document.getElementById('sum').innerText
      var SumNumber= parseFloat(Sum);

        var total =document.getElementById('total')
        var totalAmount= SumNumber+delivaryNumber;

        total.innerHTML=totalAmount;
        console.log(totalAmount);
        
    
    }

    var clicked =document.getElementById('msg')
    clicked.addEventListener('click',function(){
        const name= document.getElementById('name').value;
        const phone= document.getElementById('phn').value;
        const blok= document.getElementById('blk').value;
        const address =document.getElementById('address').value;
        const total =document.getElementById('total').innerHTML
        const totalItems =document.getElementById('cc').innerHTML
         const summary ={orderProduct,total}
        const orderedMan={name,phone,blok,address,totalItems, summary}
        console.log(orderedMan);



        fetch('http://localhost:3001/orderPlaced', {
        method:'POST',
        body: JSON.stringify(orderedMan),
        headers:{
          "Content-type": "application/json; charset=UTF-8"
        }
})
.then(res=>res.json())
.then(data=>{
  console.log('order places',data)
 

})

})

  