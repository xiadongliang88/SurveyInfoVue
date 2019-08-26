<template lang="pug">
    el-collapse-item(title="查勘信息", name="1", class="anchor" anchor="1")
        el-form(:model='surveyBO', :rules='rules', ref='basicInfo', label-position="top")
        h2(anchor="2") 基本信息
        el-row(:gutter="20")
            el-col(:span="6")
            el-form-item(label="查勘联系人")
                el-input(v-model='surveyBO.surveyContactPerson', placeholder="请输入内容", @input='setState("surveyContactPerson",$event)')
            el-col(:span="6")
            el-form-item(label="查勘联系人电话", prop='surveyContactInfo')
                el-input(v-model='surveyBO.surveyContactInfo', placeholder="请输入内容", @input='setState("surveyContactInfo",$event)')
            el-col(:span="6")
            el-form-item(label="查勘次数", prop='surveyTimes')
                el-input(v-model='surveyBO.surveyTimes', placeholder="内容", @input='setState("surveyTimes",$event)', disabled)
            el-col(:span="6")
            el-form-item(label="主责查勘人", prop='mainSurveyor')
                el-input(v-model='surveyBO.mainSurveyor', placeholder="请输入内容", @input='setState("mainSurveyor",$event)', disabled)
        el-row(:gutter="20")
            el-col(:span="6")
            el-form-item(label="其他查勘人")
                el-input(v-model='surveyBO.subSurveyors', placeholder="请输入内容", @input='setState("subSurveyors",$event)')
            el-col(:span="6")
            el-form-item(label="查勘日期", prop='surveyTime')
                el-date-picker.el-block(v-model='surveyBO.surveyTime', type='date', placeholder="选择日期")
            el-col(:span="12")
            el-form-item(label="查勘地点区域")
                el-select.el-block(v-model='surveyBO.survAreaCode', placeholder='请选择', @input='setState("survAreaCode",$event)')
                el-option(v-for='item in options', :key='item.value', :label='item.label', :value='item.value')
        el-row(:gutter="20")
            el-col(:span="12")
            el-form-item(label="详细地址")
                el-input(v-model='surveyBO.survAddress', placeholder="请输入内容", @input='setState("survAddress",$event)')
            el-col(:span="6")
            el-form-item(label="经度")
                el-input(v-model='surveyBO.survLongitude', placeholder="35E", @input='setState("survLongitude",$event)')
            el-col(:span="6")
            el-form-item(label="纬度")
                el-input(v-model='surveyBO.survLatitude', placeholder="45N", @input='setState("survLatitude",$event)')
        hr.line
        el-form(:rules='rules', ref='recordsInfo' :model='recordsInfo', label-position="top")
        div(v-for='(item,index) in recordsInfo.surveyRecordsBOList')
            h2 笔录信息{{item.recordsId}}
            el-row(:gutter="20")
            el-col(:span="6")
                el-form-item(label="笔录对象", :prop='"surveyRecordsBOList." + index + ".recordsObj"',
                :rules='{required: true, message: "笔录对象不能为空", trigger: "blur"}')
                el-input(v-model='item.recordsObj', placeholder="请输入内容", @input='commitRecords("recordsObj",index,$event)')
            el-col(:span="6")
                el-form-item(label="证件类型", :prop='"surveyRecordsBOList." + index + ".certType"',
                :rules='{required: true, message: "证件类型不能为空", trigger: "blur"}')
                el-input(v-model='item.certType', @input='commitRecords("certType",index,$event)')
            el-col(:span="6")
                el-form-item(label="证件号码", :prop='"surveyRecordsBOList." + index + ".certCode"',
                :rules='{required: true, message: "证件号码不能为空", trigger: "blur"}')
                el-input(v-model='item.certCode', placeholder="请输入内容", @input='commitRecords("certCode",index,$event)')
            el-col(:span="6")
                el-form-item(label="性别", :prop='"surveyRecordsBOList." + index + ".sex"',
                :rules='{required: true, message: "性别不能为空", trigger: "blur"}')
                el-input(v-model='item.sex', placeholder="请输入内容", @input='commitRecords("sex",index,$event)')
            el-row(:gutter="20")
            el-col(:span="6")
                el-form-item(label="联系电话", :prop='"surveyRecordsBOList." + index + ".contactInfo"',
                :rules='{required: true, message: "联系电话不能为空", trigger: "blur"}')
                el-input(v-model='item.contactInfo', placeholder="请输入内容", @input='commitRecords("contactInfo",index,$event)')
            el-col(:span="6")
                el-form-item(label="笔录时间", :prop='"surveyRecordsBOList." + index + ".recordsDate"',
                :rules='{required: true, message: "笔录时间不能为空", trigger: "blur"}')
                el-input(v-model='item.recordsDate', placeholder="选择日期", @input='commitRecords("recordsDate",index,$event)')
            el-col(:span="6")
                el-form-item(label="与保险人关系", :prop='"surveyRecordsBOList." + index + ".relToInsured"',
                :rules='{required: true, message: "与保险人关系不能为空", trigger: "blur"}')
                el-input(v-model='item.relToInsured', placeholder="请选择", @input='commitRecords("relToInsured",index,$event)')
            el-col(:span="6")
                el-form-item(label="其他补充")
                el-input(v-model='item.otherRel', placeholder="请输入内容", @input='commitRecords("otherRel",index,$event)')
        el-row.margin-top-mini(type="flex", justify="center")
            el-form-item.item.center
            el-button(:plain="true", size='small', @click='deleteRecords') 删除
            el-button(type='primary', size="small", @click='addRecords') 添加
</template>
<script>
import { mapState, mapMutations } from 'vuex';

export default{
    name: 'SurveyInfo',

    data() {
        return {
            recordsInfo: {
                surveyRecordsBOList: this.$store.state.SurveyEnterUAHI.DTO.claimSurveyBO.surveyBO.surveyRecordsBOList
            },
            validate: {
                basicInfo_valid: false,
                recordsInfo_valid: false
            },
            options: [
                {
                    value: '黄金糕',
                    label: '黄金糕'
                },
                {
                    value: '双皮奶',
                    label: '双皮奶'
                },
                {
                    value: '蚵仔煎',
                    label: '蚵仔煎'
                },
                {
                    value: '龙须面',
                    label: '龙须面'
                },
                {
                    value: '北京烤鸭',
                    label: '北京烤鸭'
                }
            ],
            value: '',
            rules: {
                // 基本信息
                surveyContactInfo: [
                    {
                        required: true,
                        message: '查勘次数不能为空'
                    },
                    ],
                    surveyTimes: [
                    {
                        required: true,
                        message: '查勘次数不能为空'
                    },
                    ],
                    mainSurveyor: [
                    {
                        required: true,
                        message: '主责查勘人不能为空'
                    },
                    ],
                    surveyTime: [
                    {
                        required: true,
                        message: '查勘日期不能为空'
                    },
                    ],
                    survAreaCode: [
                    {
                        required: true,
                        message: '查勘地点区域不能为空'
                    },
                    ],
                    survAddress: [
                    {
                        required: true,
                        message: '详细地址不能为空'
                    },
                ],
            }
        }
    },

    created() {
        this.bus.$off('surveyInfo').bus.$on('surveyInfo', this.handleValidate)
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
            surveyRecordsBOListCommit: 'SurveyEnterUAHI/surveyRecordsBOListCommit',
        }),

        setState(key, value) {
            this.surveyBOCommit(key, value)
            console.log(this.$store.state.SurveyEnterUAHI.DTO.claimSurveyBO.surveyBO[key])
        },

        // 修改笔录信息
        commitRecords(key, index, value) {
            this.surveyRecordsBOListCommit({ key, index, value })
            console.log(this.$store.state.SurveyEnterUAHI.DTO.claimSurveyBO.surveyBO.surveyRecordsBOList[index][key])
        },

        // 添加一行笔录信息
        addRecords() {
            this.$store.commit('SurveyEnter_unAHI/addSurveyRecordsBOItemCommit')
            console.log(this.$store.state.SurveyEnterUAHI.DTO.claimSurveyBO.surveyBO.surveyRecordsBOList)
        },

        // 删除一行笔录信息
        deleteRecords() {
            this.$store.commit('SurveyEnter_unAHI/deleteSurveyRecordsBOItemCommit')
            console.log(this.$store.state.SurveyEnterUAHI.DTO.claimSurveyBO.surveyBO.surveyRecordsBOList)
        },

        // 提交校验
        handleValidate() {
            this.$refs.basicInfo.validate(valid => { // 查勘信息校验
                if (valid) {
                    this.validate.basicInfo_valid = true
                    console.log('basicInfo correct')
                } else {
                    this.validate.basicInfo_valid = false
                    console.log('basicInfo error')
                }
            })

            this.$refs.recordsInfo.validate(valid => { // 笔录信息校验
                if (valid) {
                    this.validate.recordsInfo_valid = true
                    console.log('recordsInfo correct')
                } else {
                    console.log('recordsInfo error')
                }
            })

            if (this.validate.basicInfo_valid && this.validate.recordsInfo_valid) {
                this.bus.$emit('surveyInfo_valid', true)
            }
        },

        initValidate() {
            console.log('initValidate')
        }
    }
}
</script>
<style scoped>
.row_center.el-row {
    width:100%;
    display: block;
    margin-left: 100px;
    background: #000;
}
.line {
    padding: 0 20px 0;
    margin: 20px 0;
    line-height: 1px;
    border-left: 200px solid #ddd;
    border-right: 200px solid #ddd;
    text-align: center;
}
</style>