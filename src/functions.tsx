
export function getQuizTitle(num: number){
    switch(num){
        case 1:
            return "Das Unternehmen und die eigene Rolle im Betrieb beschreiben"
        case 2:
            return "Arbeitsplätze nach Kundenwunsch ausstatten"
        case 3:
            return "Clients in Netzwerke einbinden"
        case 4:
            return "Schutzbedarfsanalyse im eigenen Arbeitsbereich durchführen"
        case 5:
            return "Software zur Verwaltung von Daten anpassen"
        case 6:
            return "Serviceanfragen bearbeiten"
        case 7:
            return "Cyber-physische Systeme ergänzen"
        case 8:
            return "Daten systemübergreifend bereitstellen"
        case 9:
            return "Netzwerke und Dienste bereitstellen"
    }
}

export function formatInput(value: string){
    const valueNumberArray = value.split(",") ;
    const result  = valueNumberArray.map((el: string) => {
    if(Number(el)){
        return Number(el)
    } 
    })
    if(!Number(result[result.length - 1])){
        result.pop();
    }
    return result;
}

export function formatString(value: string){
    const result = value.length > 60 ?  value.slice(0,60) + "..." : value;
    return result
}

