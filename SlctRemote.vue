<template lang="pug">
    el-select.el-block(v-model='model', filterable, remote, reserve-keyword, :remote-method='remoteMethod', :loading='loading', placeholder="请选择", @change='setState')
        el-option(v-for="item in options" :key="item.bizDictCode" :label="item.bizDictDesc" :value="item.bizDictCode")
</template>

<script>
import { qryOptions } from '@/apis/selection'

export default {
    props: {
        code: String,
        slctModel: String,
    },

    data() {
        return {
            bfrModel: null,
            options: [],
            loading: true
        }
    },

    created() {
        this.options = []
        this.bfrModel = this.slctModel

        if (this.slctModel !== null && this.slctModel !== '') {
            qryOptions({
                bizDictCode: this.slctModel,
                categoryCode: this.code
            }).then(response => {
                this.options = response.data.bizData[this.code]
                this.loading = false
            })
        }
    },

    computed: {
        model: {
            get() {
                return this.bfrModel
            },
            set(value) {
                this.bfrModel = value
            }
        }
    },

    methods: {
        setState() {
            this.$emit('input', this.model)
        },

        remoteMethod(query) {
            qryOptions({
                bizDictDesc: query,
                categoryCode: this.code
            }).then(response => {
                this.options = response.data.bizData[this.code]
                this.loading = false
            })
        }
    }
}
</script>