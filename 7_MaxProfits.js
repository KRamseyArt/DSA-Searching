function maxProfits(arr){
  if(arr.length < 2){
    return 'not enough data'
  }
  let currMaxProf = arr[0] - arr[1]
  let dayToBuy = 0

  for(let i = 2; i < arr.length; i++){
    let profit = arr[i - 1] - arr[i]

    if(profit > currMaxProf){
      currMaxProf = profit
      dayToBuy = i - 1
    }
  }
  return `Buy on day '${dayToBuy}' for a profit of '${currMaxProf}'`
}

function main(){
  let weekOne = [
    128, 97, 121, 123, 98, 97, 105
  ]
  console.log(maxProfits(weekOne))
  let weekTwo = [
    128, 97, 121, 123, 198, 97, 105
  ]
  console.log(maxProfits(weekTwo))
  let weekThree = [
    100, 100, 100, 100, 100, 100, 100
  ]
  console.log(maxProfits(weekThree))
}

main()