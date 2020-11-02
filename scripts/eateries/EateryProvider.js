


let eateries = []
export const useEateries = () => {
    return eateries.slice()
    
}
console.log(useEateries)
export const getEateries = () => {
    return fetch(`http://holidayroad.nss.team/eateries`)//change this fetch
        .then(response => response.json())
        .then(
            parsedEateries => {
                eateries = parsedEateries
                console.log(eateries)
                
            }
            
        )
        
}