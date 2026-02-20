interface Location { 
    latitude: number,
    longitude: number,
    readonly numberLocation:number
}

const getLocation = (location: Location):string =>{

    return `${location.latitude} - ${location.longitude}`
}

// const location = { 
//     latitude:12311,
//     longitude: 321122
// }

// getLocation(location)

const location: Location = {
    latitude: 123,
    longitude: 321,
    numberLocation: 456
}

class LocationMap implements Location {
    latitude: number
    longitude: number
    numberLocation: number = 0
    
    constructor(latitude:number, longitude:number){
        this.latitude = latitude
        this.longitude = longitude
    }

    getLocation():string{
        return 'any';
    }
}
