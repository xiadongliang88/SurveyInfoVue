export default {
    // 查勘
    surveyBOCommit(state, key, value) {
        state.DTO.claimSurveyBO.surveyBO.key = value
    },

    // 损失
    lossBOCommit(state, key, value) {
        state.DTO.claimSurveyBO.surveyBO.key = value
    },

    // 笔录信息
    surveyRecordsBOListCommit(state, obj) {
        state.DTO.claimSurveyBO.surveyBO.surveyRecordsBOList[obj.index][obj.key] = obj.value
    },

    // 新增笔录
    addSurveyRecordsBOItemCommit(state) {
        state.DTO.claimSurveyBO.surveyBO.surveyRecordsBOList.push({
            certCode: '', // 证件号码
            certType: '', // 证件类型
            contactInfo: '', // 联系电话
            otherRel: '', // 其他补充
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
            recordsDate: null, // 笔录时间
            recordsId: 0,
            recordsObj: '', // 笔录对象
            relToInsured: '', // 与被保险人关系
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
            sex: '', // 性别
            surveyId: 0,
        })
    },

    // 删除笔录
    deleteSurveyRecordsBOItemCommit(state) {
        state.DTO.claimSurveyBO.surveyBO.surveyRecordsBOList.pop()
    },

    // 物损责任险
    liabilityLossBoCommit(state, key, value) {
        state.DTO.claimSurveyBO.lossBO.liabilityLossBo.key = value
    },

    // 物损责任险->受损项目
    liabilityLossItemBosCommit(state, obj) {
        state.DTO.claimSurveyBO.lossBO.liabilityLossBo.liabilityLossItemBos[obj.index][obj.key] = obj.value
    },

    // 物损责任险->新增
    addLiabilityLossItemCommit(state) {
        state.DTO.claimSurveyBO.lossBO.liabilityLossBo.liabilityLossItemBos.push({
            claimAmount: 0, // 索赔金额
            currency: 'string', // 币种
            dataInputStage: 'string',
            itemName: 'string', // 物损名称
            liabilityLossId: 0,
            liabilityLossItemId: 0,
            lossAmount: 0, // 预估金额
            purchaseAmount: 0, // 原始购置金额
            quantity: 0, // 数量
            remark: 'string', // 备注
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
            totalLossFlag: 'string', // 是否全损
            unit: 'string', // 单位
            usedTime: null, // 使用时间
        })
    },
  
    // 物损责任险->删除
    deleteLiabilityLossItemCommit(state, index) {
        state.DTO.claimSurveyBO.lossBO.liabilityLossBo.liabilityLossItemBos.splice(index, 1)
    },

    // 物损财产险
    propertyLossBoCommit(state, key, value) {
        state.DTO.claimSurveyBO.lossBO.propertyLossBo.key = value;
    },

    // 物损财产险->受损项目
    propertyLossItemBosCommit(state, obj) {
        state.DTO.claimSurveyBO.lossBO.propertyLossBo.propertyLossItemBos[obj.index][obj.key] = obj.value
    },

    // 物损财产险->新增
    addPropertyLossItemCommit(state) {
        state.DTO.claimSurveyBO.lossBO.propertyLossBo.propertyLossItemBos.push({
            claimAmount: 0, // 损失金额
            currency: 'string', // 币种
            dataInputStage: 'string', //
            insuredAmount: 0,
            insuredName: 'string', // 物损名称
            insuredSpec: 'string', // 物损规格型号
            insuredTotalCount: 0,
            insuredType: 'string', // 物损类型
            insuredValue: 0,
            lossAmount: 0,
            lossDesc: 'string', // 损失描述
            possibleTreatWay: 'string', // 可能处置方式
            propertyLossId: 0,
            propertyLossItemId: 0,
            quantity: 0, // 物损数量
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
            unit: 'string', // 单位
        })
    },

    // 物损财产险->删除
    deletePropertyLossItemCommit(state, index) {
        state.DTO.claimSurveyBO.lossBO.propertyLossBo.propertyLossItemBos.splice(index, 1)
    },

    // 物损工程险
    engineeringLossBoCommit(state, key, value) {
        state.DTO.claimSurveyBO.lossBO.engineeringLossBO.key = value
    },

    // 物损工程险->受损项目
    engineeringLossItemBosCommit(state, obj) {
        state.DTO.claimSurveyBO.lossBO.engineeringLossBO.engineeringLossItemBO[obj.index][obj.key] = obj.value
    },

    // 物损工程险->新增
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

    // 物损工程险->删除
    deleteEngineeringLossItemCommit(state, index) {
        state.DTO.claimSurveyBO.lossBO.engineeringLossBo.engineeringLossItemBos.splice(index, 1)
    },

    // 物损货运险
    freightLossBoCommit(state, index) {
        state.DTO.claimSurveyBO.lossBO.freightLossBo.key = value
    }
}