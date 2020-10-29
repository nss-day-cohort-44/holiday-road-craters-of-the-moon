
const eventHub = document.querySelector(".container")

let bizarries = []
export const useBizarries = () => {
    return bizarries.slice()
    
}
console.log(useBizarries)
export const getBizarries = () => {
    return fetch(`http://holidayroad.nss.team/bizarreries`)//change this fetch
        .then(response => response.json())
        .then(
            parsedBizarries => {
                bizarries = parsedBizarries
                console.log(bizarries)
                
            }
            
        )
        
}