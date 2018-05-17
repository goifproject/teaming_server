let database = require('../../database/database');
let tablename = 'exposure'
let logger = require('../../util/logger');

const user_id = "user_id",
      age = "age",
      region = "region",
      introduction = "introduction",
      email = "email",
      phone = "phone",
      social_id = "social_id",
      profile_img = "profile_img",
      thumbnail = "thumbnail",
      career = "career",
      interest = "interest";

function create(param_user_id, callback) {
    logger.debug('[3]exposureDao-create');
    let values = [param_user_id,0,0,0,0, 0,0,0,0,0, 0];
    let query = `INSERT INTO ${tablename} (
                        ${user_id},
                        ${age},
                        ${region},
                        ${introduction},
                        ${email},
                        ${phone},
                        ${social_id},
                        ${profile_img},
                        ${thumbnail},
                        ${career},
                        ${interest}) 
                VALUES (?,?,?,?,? ,?,?,?,?,? ,?)`;
    logger.debug(query);
    database.executeByValues(query, values, callback);
}

function select(param_user_id, callback) {
    logger.debug('[3]exposureDao-select');
    let query = `SELECt * FROM ${tablename} WHERE ${user_id}=${param_user_id}`;
    database.executeByRaw(query, callback);
}

function update(param_user_id, dataObj, callback) {
    logger.debug('[3]exposureDao-update');
    let values = [dataObj.age,
                    dataObj.region,
                    dataObj.introduction,
                    dataObj.email,
                    dataObj.phone,
                    dataObj.social_id,
                    dataObj.profile_img,
                    dataObj.thumbnail,
                    dataObj.career,
                    dataObj.interest];
    let query = `UPDATE ${tablename} SET
                            ${age}=?,
                            ${region}=?,
                            ${introduction}=?,
                            ${email}=?,
                            ${phone}=?,
                            ${social_id}=?,
                            ${profile_img}=?,
                            ${thumbnail}=?,
                            ${career}=?,
                            ${interest}=?  
                WHERE ${user_id}=${param_user_id}`;
    logger.deleteUser(query);
    database.executeByValues(query, values, callback);
}

function deleteExposure(param_user_id) {

}

module.exports = {
    create : create,
    select : select,
    update : update,
    delete : deleteExposure
}