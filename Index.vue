<template lang="pug">
    el-container
        el-main
        el-collapse
            SelectDemo
            SurveyInfo
            AccidentInfo
            InsuranceLiability
            InjuryInfo
            LiabilityLoss
            PropertyLoss
            EngineeringLoss
            FreightLoss
            ShipLoss
            OtherInfo
            SurveySummary
        Anchor
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import Anchor from '@/components/Anchor/index.vue'
// 导入SubHeader
import headerData from '@/utils/mixin'

import { findPolicyInfo } from '@/modules/claim/apis/surveyApi'
// 导入估损信息(公共组件)
// import LossAssessmentAHI from '@/modules/claim/views/Common/LossAssessmentAHI'
import { getMenuListForIssue } from '@/modules/workbench/apis/initiate-mgt'
// import { initiateRouter } from '@/utils/base'

// 导入SelectDemo测试组件
import SelectDemo from './SelectDemo.vue'
// 导入查勘信息
import SurveyInfo from './SurveyInfo.vue'
// 导入出险信息
import AccidentInfo from './AccidentInfo.vue'
// 导入保险责任初判
import InsuranceLiability from './InsuranceLiability.vue'
// 导入人伤信息
import InjuryInfo from './InjuryInfo.vue'
// 导入物损责任险
import LiabilityLoss from './LiabilityLoss.vue'
// 导入物损财产险
import PropertyLoss from './PropertyLoss.vue'
// 导入物损工程险
import EngineeringLoss from './EngineeringLoss.vue'
// 导入物损货运险
import FreightLoss from './FreightLoss.vue'
// 导入物损船舶险
import ShipLoss from './ShipLoss.vue'
// 导入其他信息
import OtherInfo from './OtherInfo.vue'
// 导入查勘小结
import SurveySummary from './SurveySummary.vue'


const chileData = {
    info: [
        { title: '报案号', value: '1385695405' },
        { title: '被保险人', value: '刘三妹' }
    ],
    first: [
        { text: '提交', handler: 'submit' },
        { text: '发起', group: [] }
    ],
    second: [
        { text: '资料收集', handler: '' },
        { text: '暂存', handler: 'stage' }
    ]
}

export default {
    name: 'SurveyEnterUAHI',

    mixins: [headerData(chileData)],

    components: {
        SelectDemo, // Select测试组件
        SurveyInfo, // 查勘信息
        AccidentInfo, // 出险信息
        InsuranceLiability, // 保险责任初判
        InjuryInfo, // 人伤信息
        LiabilityLoss, // 物损-责任险
        PropertyLoss, // 物损-财产险
        EngineeringLoss, // 物损-工程险
        FreightLoss, // 物损-货运险
        ShipLoss, // 物损-船舶险
        OtherInfo, // 其他信息
        SurveySummary, // 查勘小结
        Anchor,
    },

    data() {
        return {
            policyInfo: null,
            sss: 'ssssss',
            surveyInfo: {
                states: {},
                mutations: {},
            },
            emitAry: [
                'surveyInfo',
                'accidentInfo',
                'insuranceLiability',
                'injuryInfo',
                'liabilityLoss',
                'propertyLoss',
                'engineeringLoss',
                'freightLoss',
                'shipLoss',
            ],
            validate: {
                surveyInfo_valid: false,
                accidentInfo_valid: false,
                insuranceLiability_valid: false,
                // - injuryInfo_valid: false,
                // - liabilityLoss_valid: false,
                // - propertyLoss_valid: false,
                // - engineeringLoss_valid: false,
                // - freightLoss_valid: false,
                // - shipLoss_valid: false
            },
            message: {},
            subHeaderReqData: {
                issueTaskConfigBO: {
                    workflowTaskType: 'clm_acceptance_input'
                },
            }
        }
    },

    created() {
        this.fetchData()
        this.listenValidate()
    },

    computed: {
        ...mapState({
            surveyBO: state => state.SurveyEnterUAHI.DTO.claimSurveyBO.surveyBO,
            surveyRecordsBOList: state => state.SurveyEnterUAHI.DTO.claimSurveyBO.surveyBO.surveyRecordsBOList
        }),
    },

    methods: {
        ...mapMutations({
            surveyBOCommit: 'SurveyEnterUAHI/surveyBOCommit',
            surveyRecordsBOListCommit: 'SurveyEnterUAHI/surveyRecordsBOListCommit'
        }),

        fetchData() {
            this.surveyInfo.states.surveyBO = this.surveyBO
            this.surveyInfo.states.surveyRecordsBOList = this.surveyRecordsBOList
            this.surveyInfo.mutations.surveyBOCommit = this.surveyBOCommit
            this.surveyInfo.mutations.surveyRecordsBOListCommit = this.surveyRecordsBOListCommit

            findPolicyInfo({}).then(response => {
                this.policyInfo = response.data.bizData
            })
        },

        routingTo(params) {
            if (params.issueFromUi === 1) {
                this.$router.push({ path: params.url })
                chileData.first[1].group = []
            } else {
                console.log('0')
            }
        },

        handleSubHeaderRes(responseBiz) {
            for (let i = 0; i < responseBiz.length; i++) {
                chileData.first[1].group.push({
                    text: responseBiz[i].issueTaskTypeName,
                    handler: 'routingTo',
                    url: responseBiz[i].entryUrl
                })
            }
        },

        initSubHeader() {
            getMenuListForIssue(this.subHeaderReqData).then(response => {
                chileData.first[1].group = []
                this.handleSubHeaderRes(response.data.bizData)
            })
        },

        listenValidate() { // 监听校验
            for (let i = 0; i < Object.keys(this.validate); i++) {
                this.bus.$off(i).bus.$on(i, (result) => { // 接受子组件返回值
                    if (result) {
                        console.log(`${i}校验OK`)
                        this.validate[i] = true
                    } else {
                        console.log(`${i}校验NG`)
                        this.validate[i] = false
                    }
                })
            }
        },

        submit() { // 提交按钮
            for (const item of this.emitAry) { // 派发到子组件
                this.bus.$emit(item)
            }

            if (
                this.validate.surveyInfo_valid
                && this.validate.accidentInfo_valid
            ) {
                this.sendStore()
            } else {
                console.log('error')
            }
        },

        stage() { // 暂存按钮
            console.log('stage')
        },

        sendStore() {
            this.initValidate()
        },

        initValidate() {
            for (let i = 0; i < Object.keys(this.validate); i++) {
                this.validate[i] = false
            }
        }
    }
}
</script>
<style scoped>
</style>