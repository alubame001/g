var floatjs= require('./floatjs') //同一路径下的

var  bitcoinjs =  require('bitcoinjs-lib');




function Baccarat (hex,bet) {

var multiplier=[        //MULTIPLIER FOR EACH BET
      8,               //MULTIPLIER FOR TIE: PAYS 8 TO 1
      1.95,            //MULTIPLIER FOR BANKER: PAYS 1.95 TO 1
      2                //MULTIPLIER FOR PLAYER: PAYS 2 TO 1
      ]

  if (hex){
    this.result= shuffleCard(hex)
    this.result.hex = hex  

    if (bet){
        bet= calcProfit(this.result,bet,multiplier)
      this.result.bet =bet 
    }
  }
  console.log(this.result)


}

function shuffleCard(hex){
    var cards=[]
    var deck= []
    var num  = 0
  while (cards.length<6){
      num++
      var hash = bitcoinjs.crypto.sha256(hex+num)
      for (var i=0;i<hash.length;i++){
          var n= hash[i]
          if (isCard(n)){
            if (isInCards(cards,n)==false){

              var card = setCardValue(n)
              cards.push(n)
              deck.push(card)
            }         
          }

      }      
    }
   // cards=calcCardsValue(cards)
    var obj = {}
    obj.deck = deck
    obj.cards= cards
    obj.player_point_1 =(deck[0].p+deck[2].p) %10
    obj.player_point_2 = (deck[0].p+deck[2].p+deck[4].p) %10
    player_third_card=deck[4].p
    obj.player_third_card =deck[4].p


    obj.banker_point_1 =(deck[1].p+deck[3].p) %10
    obj.banker_point_2 = (deck[1].p+deck[3].p+deck[5].p) %10
   

    
    obj.player_use_third_card = false
    obj.banker_use_third_card = false 
     
    //闲家5点以下，强制博牌
    if (obj.player_point_1<=5){       
       obj.player_use_third_card = true
    } else {
       obj.player_use_third_card = false
    }

    if (obj.player_use_third_card){

      if (obj.banker_point_1==3){        
        if (player_third_card==8){
        
          obj.banker_use_third_card = false
        }  else {
        
          obj.banker_use_third_card = true          
        }
      } 
      if (obj.banker_point_1==4){
          if (player_third_card==0||player_third_card==1||player_third_card==8||player_third_card==9||player_third_card==10){
          
            obj.banker_use_third_card = false
          } else {
           
            obj.banker_use_third_card = true         
          }

      }  
      if (obj.banker_point_1==5){
          
          if (player_third_card==0 ||player_third_card==1 ||player_third_card==2||player_third_card==3||player_third_card==8||player_third_card==9||player_third_card==10){
            obj.banker_use_third_card = false
          } else {           
            obj.banker_use_third_card = true         
          }

      }

      if (obj.banker_point_1==6){
          
          if (player_third_card==0 ||player_third_card==1 ||player_third_card==2||player_third_card==3||player_third_card==4||player_third_card==5||player_third_card==8||player_third_card==9||player_third_card==10){
            obj.banker_use_third_card = false
          } else {           
            obj.banker_use_third_card = true         
          }

      }



    } else {

      if ((obj.player_point_1==6)||(obj.player_point_1==7)){
        if (obj.banker_point_1<=5){
          obj.banker_use_third_card = true
        }      

      }
    }



   

    if (obj.banker_point_1<=2){      
      obj.banker_use_third_card = true
    }

    if ((obj.banker_point_1>=8)||(obj.player_point_1>=8)){      
      obj.banker_use_third_card = false
      obj.player_use_third_card = false
    }  


    obj.player_point = obj.player_point_1
    obj.player_cards = []
    obj.player_cards.push(deck[0].n)
    obj.player_cards.push(deck[2].n)
    if (obj.player_use_third_card){
      obj.player_cards.push(deck[4].n)
     
    }

    obj.banker_point = obj.banker_point_1
    obj.banker_cards = []
    obj.banker_cards.push(deck[1].n)
    obj.banker_cards.push(deck[3].n)
    if (obj.banker_use_third_card){
      obj.banker_cards.push(deck[5].n)
     
    }    

    obj.banker_deck =[]
    obj.banker_deck.push(deck[1].p)
    obj.banker_deck.push(deck[3].p)    
    obj.banker_deck.push(deck[5].p)

    obj.player_deck =[]
    obj.player_deck.push(deck[0].p)
    obj.player_deck.push(deck[2].p)    
    obj.player_deck.push(deck[4].p)    
       

    if (obj.player_use_third_card){      
      obj.player_point = obj.player_point_2
    }
    if (obj.banker_use_third_card){     
      obj.banker_point = obj.banker_point_2
    } 

    return obj
}

Baccarat.prototype.build= function (hex) {

    this.table =  shuffleCard(hex)



   
     return this.table  
}

function isInCards(cards,num){
   var result = false
  for (var i=0;i<cards.length;i++){        
     if (cards[i] == num ) {
        result = true
        break;
     }

  }

  return result;

}

function isCard(num){
   var result = false
  if (num<52){
    result = true
  }
  return result;

}
function setCardValue(num){
   var result = false
  
  var card ={}
  card.n = num
  if (num<13){
     card.v=num +1
     card.p=card.v
     card.k ="Spade"
  }
  if ((num>=13)&&(num<26)){
     card.v=Math.abs( num -13) +1
     card.p=card.v
     card.k ="Heart"
  }  
  if ((num>=26)&&(num<39)){
     card.v=Math.abs( num -26) +1
     card.p=card.v
     card.k ="Club"
  }  
  if ((num>=39)&&(num<52)){
     card.v=Math.abs( num -39) +1
     card.p=card.v
     card.k ="Diamond" //

  }  
     if (card.v>10){
        card.p=10
     }
  return card;

}

function getCardValue(num){
    var v =0
  if (num<13){
     v=num +1
     
  }
  if ((num>=13)&&(num<26)){
     v=Math.abs( num -13) +1
     
  }  
  if ((num>=26)&&(num<39)){
     v=Math.abs( num -26) +1
    
  }  
  if ((num>=39)&&(num<52)){
     v=Math.abs( num -39) +1
     

  }  
  
  return v;

}
function getCardPoint(num){
    var v =0
  if (num<13){
     v=num +1
     
  }
  if ((num>=13)&&(num<26)){
     v=Math.abs( num -13) +1
     
  }  
  if ((num>=26)&&(num<39)){
     v=Math.abs( num -26) +1
    
  }  
  if ((num>=39)&&(num<52)){
     v=Math.abs( num -39) +1
     

  }  
 
  return v%10;

}

function calcProfit(result,bet,multiplier){
  
  console.log(result.player_point,result.banker_point)
  var profit =0;
  if (result.player_point==result.banker_point){
      var p = bet.player * multiplier[0]
      if (p>0) {profit=p}
  } else if(result.player_point<result.banker_point){

      var p = bet.player * multiplier[1]
      if (p>0) {profit=p}
  } else {
      var p = bet.player * multiplier[2]
      if (p>0) {profit=p}

  }
  

   if (bet.tie>0){
     profit = floatjs.numSub(profit,bet.tie)
   }


   if (bet.banker>0){
     profit = floatjs.numSub(profit,bet.banker)
   }
   if (bet.player>0){
     profit = floatjs.numSub(profit,bet.player)
   }
     console.log("profit",profit)   
     bet.profit = profit
     bet.new_balance = floatjs.numAdd(bet.balance,profit)
  return bet
}
/*
var multiplier=[        //MULTIPLIER FOR EACH BET
      8,               //MULTIPLIER FOR TIE: PAYS 8 TO 1
      1.95,            //MULTIPLIER FOR BANKER: PAYS 1.95 TO 1
      2                //MULTIPLIER FOR PLAYER: PAYS 2 TO 1
      ]

*/

module.exports = Baccarat
