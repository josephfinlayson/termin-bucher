import knexConfigured from "../data/index";

export default async function getLocationsForUsers(id){
    
    const q = `
    select locations.location_id from location_user_mapping 
    join locations on locations.authority_id = location_user_mapping.authority_id 
    where location_user_mapping.user_id='${id}'`

    const data = await knexConfigured.raw(q)
    console.log(data.rows)
    if (data.rows.length === 0) {
        return
    }
    const locations = data.rows.map(row => row.location_id).join()
    
    return `https://service.berlin.de/terminvereinbarung/termin/restart/?providerList=${locations}&requestList=120686&source=dldb`
}