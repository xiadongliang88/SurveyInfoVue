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
import headerData from '@/utils/mixin'
import { findPolicyInfo } from '@/modules/claim/apis/surveyApi'
import { getMenuListForIssue } from '@/modules/workbench/apis/initiate-mgt'
import SelectDemo from './SelectDemo.vue'
import SurveyInfo from './SurveyInfo.vue'
import AccidentInfo from './AccidentInfo.vue'
import InsuranceLiability from './InsuranceLiability.vue'
import InjuryInfo from './InjuryInfo.vue'
import LiabilityLoss from './LiabilityLoss.vue'
import PropertyLoss from './PropertyLoss.vue'
import EngineeringLoss from './EngineeringLoss.vue'
import FreightLoss from './FreightLoss.vue'
import ShipLoss from './ShipLoss.vue'
import OtherInfo from './OtherInfo.vue'
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
        SelectDemo,
        SurveyInfo,
        AccidentInfo,
        InsuranceLiability,
        InjuryInfo,
        LiabilityLoss,
        PropertyLoss,
        EngineeringLoss,
        FreightLoss,
        ShipLoss,
        OtherInfo,
        SurveySummary,
        Anchor
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
                injuryInfo_valid: false,
                liabilityLoss_valid: false,
                propertyLoss_valid: false,
                engineeringLoss_valid: false,
                freightLoss_valid: false,
                shipLoss_valid: false
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

        listenValidate() {
            for (let i = 0; i < Object.keys(this.validate); i++) {
                this.bus.$off(i).bus.$on(i, (result) => {
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

        submit() {
            for (const item of this.emitAry) {
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

        stage() {
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