import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index.vue'
import analysisDay from '../views/analysis-day'
import analysisWeek from '../views/analysis-week'
import analysisMonth from '../views/analysis-month'
import rankingDay from '../views/ranking-day'
import rankingWeek from '../views/ranking-week'
import rankingMonth from '../views/ranking-month'
import turnoverRent from '../views/turnover-rent'
import dataCorrection from '../views/data-correction'
import correctionRecord from '../views/correction-record'
import dataAlarm from '../views/data-alarm'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        }, {
            path: '/analysis-total',
            name: 'analysis-total',
            component: Index
        }, {
            path: '/analysis-day',
            name: 'analysis-day',
            component: analysisDay
        }, {
            path: '/analysis-week',
            name: 'analysis-week',
            component: analysisWeek
        }, {
            path: '/analysis-month',
            name: 'analysis-month',
            component: analysisMonth
        }, {
            path: '/ranking-day',
            name: 'ranking-day',
            component: rankingDay
        }, {
            path: '/ranking-week',
            name: 'ranking-week',
            component: rankingWeek
        }, {
            path: '/ranking-month',
            name: 'ranking-month',
            component: rankingMonth
        }, {
            path: '/turnover-rent',
            name: 'turnover-rent',
            component: turnoverRent
        }, {
            path: '/data-correction',
            name: 'data-correction',
            component: dataCorrection
        }, {
            path: '/correction-record',
            name: 'correction-record',
            component: correctionRecord
        }, {
            path: '/data-alarm',
            name: 'data-alarm',
            component: dataAlarm
        }
    ]
})
