export default {

    surveyBOCommit(state, key, value) {
        state.DTO.claimSurveyBO.surveyBO.key = value
    },

    lossBOCommit(state, key, value) {
        state.DTO.claimSurveyBO.surveyBO.key = value
    },

    surveyRecordsBOListCommit(state, obj) {
        state.DTO.claimSurveyBO.surveyBO.surveyRecordsBOList[obj.index][obj.key] = obj.value
    },

    addSurveyRecordsBOItemCommit(state) {
        state.DTO.claimSurveyBO.surveyBO.surveyRecordsBOList.push({
            certCode: '',
            certType: '',
            contactInfo: '',
            otherRel: '',
            pageRequestEx: {
            jpaPageable: {
                offset: 0,
                pageNumber: 0,
                pageSize: 0,
                paged: true,
                sort: {
                sorted: true,
                unsorted: true,
                },
                unpaged: true,
            },
            offset: 0,
            pageIndex: 0,
            pageSize: 0,
            sortExpression: '',
            },
            recordsDate: null,
            recordsId: 0,
            recordsObj: '',
            relToInsured: '',
            requestContextEx: {
            eventName: '',
            functionName: '',
            moduleName: '',
            requestId: '',
            requestIp: '',
            requestTime: null,
            token: '',
            userCode: '',
            },
            sex: '',
            surveyId: 0,
        })
    },

    deleteSurveyRecordsBOItemCommit(state) {
        state.DTO.claimSurveyBO.surveyBO.surveyRecordsBOList.pop()
    },

    liabilityLossBoCommit(state, key, value) {
        state.DTO.claimSurveyBO.lossBO.liabilityLossBo.key = value
    },

    liabilityLossItemBosCommit(state, obj) {
        state.DTO.claimSurveyBO.lossBO.liabilityLossBo.liabilityLossItemBos[obj.index][obj.key] = obj.value
    },

    addLiabilityLossItemCommit(state) {
        state.DTO.claimSurveyBO.lossBO.liabilityLossBo.liabilityLossItemBos.push({
            claimAmount: 0,
            currency: 'string', 
            dataInputStage: 'string',
            itemName: 'string',
            liabilityLossId: 0,
            liabilityLossItemId: 0,
            lossAmount: 0,
            purchaseAmount: 0,
            quantity: 0,
            remark: 'string',
            requestContextEx: {
                eventName: 'string',
                functionName: 'string',
                moduleName: 'string',
                requestId: 'string',
                requestIp: 'string',
                requestTime: null,
                token: 'string',
                userCode: 'string',
            },
            totalLossFlag: 'string',
            unit: 'string',
            usedTime: null,
        })
    },
  
    deleteLiabilityLossItemCommit(state, index) {
        state.DTO.claimSurveyBO.lossBO.liabilityLossBo.liabilityLossItemBos.splice(index, 1)
    },

    propertyLossBoCommit(state, key, value) {
        state.DTO.claimSurveyBO.lossBO.propertyLossBo.key = value;
    },

    propertyLossItemBosCommit(state, obj) {
        state.DTO.claimSurveyBO.lossBO.propertyLossBo.propertyLossItemBos[obj.index][obj.key] = obj.value
    },

    addPropertyLossItemCommit(state) {
        state.DTO.claimSurveyBO.lossBO.propertyLossBo.propertyLossItemBos.push({
            claimAmount: 0,
            currency: 'string',
            dataInputStage: 'string',
            insuredAmount: 0,
            insuredName: 'string',
            insuredSpec: 'string',
            insuredTotalCount: 0,
            insuredType: 'string',
            insuredValue: 0,
            lossAmount: 0,
            lossDesc: 'string',
            possibleTreatWay: 'string',
            propertyLossId: 0,
            propertyLossItemId: 0,
            quantity: 0,
            requestContextEx: {
                eventName: 'string',
                functionName: 'string',
                moduleName: 'string',
                requestId: 'string',
                requestIp: 'string',
                requestTime: null,
                token: 'string',
                userCode: 'string'
            },
            unit: 'string',
        })
    },

    deletePropertyLossItemCommit(state, index) {
        state.DTO.claimSurveyBO.lossBO.propertyLossBo.propertyLossItemBos.splice(index, 1)
    },

    engineeringLossBoCommit(state, key, value) {
        state.DTO.claimSurveyBO.lossBO.engineeringLossBO.key = value
    },

    engineeringLossItemBosCommit(state, obj) {
        state.DTO.claimSurveyBO.lossBO.engineeringLossBO.engineeringLossItemBO[obj.index][obj.key] = obj.value
    },

    addEngineeringLossItemCommit(state) {
        state.DTO.claimSurveyBO.lossBO.engineeringLossBo.engineeringLossItemBos.push({
            claimAmount: 0,
            currency: 'string',
            dataInputStage: 'string',
            engineeringLossId: 0,
            engineeringLossItemId: 0,
            lossAmount: 0,
            packaging: 'string',
            quantity: 0,
            remark: 'string',
            requestContextEx: {
                eventName: 'string',
                functionName: 'string',
                moduleName: 'string',
                requestId: 'string',
                requestIp: 'string',
                requestTime: null,
                token: 'string',
                userCode: 'string',
            },
            unit: 'string',
        })
    },

    deleteEngineeringLossItemCommit(state, index) {
        state.DTO.claimSurveyBO.lossBO.engineeringLossBo.engineeringLossItemBos.splice(index, 1)
    },

    freightLossBoCommit(state, index) {
        state.DTO.claimSurveyBO.lossBO.freightLossBo.key = value
    }
}