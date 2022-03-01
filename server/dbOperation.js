var config = require('./dbConfig');
var sql = require('mssql');


async function getdata(){
    try{
        let pool = await sql.connect(config);
        console.log("MSsql successfully connected");
    }
    catch(err){
        console.log("Error while connect "+err);
    }
}
async function addParking(user){
try{
    let pool = await sql.connect(config);
    let input = await pool.request()
                    .input('name',user.name)
                    .input('vehicle',user.vehicle)
                    .execute('[insert_parking]');

    return input.recordsets;
}
catch(err){
    console.log(err);
}
}

async function getParking(){
    let pool = await sql.connect(config);
    let out = await pool.request()
                .execute('[get_parking_details]')

    return out.recordsets;
}

async function deleteParking(id){
    let pool = await sql.connect(config);
    let del = await pool.request()
                .input('rnid',id)
                .execute('[delete_parking_details]')

    return del.recordsets;
}

module.exports ={
    getdata:getdata,
    addParking:addParking,
    getParking:getParking,
    deleteParking:deleteParking
}