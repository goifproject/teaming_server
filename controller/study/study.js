let model = require('../../model/study/studyModel');
let logger = require('../../util/logger');
let result = require('../../response/result');
let error = require('../../response/error');

// 스터디 생성
// router.post('/:study_id', study.create);
function createNewStudy(req, res, next) {
    new Promise((resolve, reject)=>{
        logger.debug('[2]controller-createNewStudy');
        var dataObj = req.body;
        dataObj.reg_date = new Date();
        // TODO Datetime 클라이언트랑 협의 필요함
        dataObj.start_date = new Date();
        model.createNewStudy(dataObj, resolve, reject);
    }).
    then((data)=>{
        result.send(200, "스터디 생성이 완료되었습니다", {}, res);
    }).
    catch((error)=>{
        next(error);
    });
}

// 스터디 1개 조회
// router.get('/:study_id', study.selectSingle);
function getStudyInfo(req, res, next) {
    new Promise((resolve, reject)=>{
        logger.debug('[2]controller-getStudyInfo');
        let study_id = req.params.study_id;
        model.getStudyInfo(study_id, resolve, reject);
    }).
    then((data)=>{
        result.send(200, `${req.params.study_id}번 스터디 조회가 완료되었습니다`, data, res);
    }).
    catch((error)=>{
        next(error);
    });
}

// 스터디 전체 조회
// router.get('/', study.selectAll);
function getStudyInfoList(req, res, next) {
    new Promise((resolve, reject)=>{
        logger.debug('[2]controller-getStudyInfoList');
        model.getStudyInfoList(resolve, reject);
    }).
    then((data)=>{
        result.send(200, "스터디 전체 조회가 완료되었습니다", data, res);
    }).
    catch((error)=>{
        next(error);
    });
}

// 스터디 업데이트
// router.put('/:study_id', study.update);
function changeStudyInfo(req, res, next) {
    new Promise((resolve, reject)=>{
        logger.debug('[2]controller-changeStudyInfo');
        let study_id = req.params.study_id;
        var dataObj = req.body;
        dataObj.update_date = new Date();
        // TODO Datetime 클라이언트랑 협의 필요함
        model.changeStudyInfo(study_id, dataObj, resolve, reject)
    }).
    then((data)=>{
        result.send(200, `${req.params.study_id}번 스터디 업데이트가 완료되었습니다`, {}, res);
    }).
    catch((error)=>{
        next(error);
    });
}

// 스터디 삭제
// router.delete('/:study_id', study.delete);
function closeStudy(req, res, next) {
    new Promise((resolve, reject)=>{
        logger.debug('[2]controller-closeStudy');
        let study_id = req.params.study_id;
        model.closeStudy(study_id, resolve, reject);
    }).
    then((data)=>{
        result.send(200, `${req.params.study_id}번 스터디 삭제가 완료되었습니다`, {}, res);
    }).
    catch((error)=>{
        next(error);
    });
}

module.exports = {
    createNewStudy : createNewStudy,
    getStudyInfo : getStudyInfo,
    getStudyInfoList : getStudyInfoList,
    changeStudyInfo : changeStudyInfo,
    closeStudy : closeStudy
}