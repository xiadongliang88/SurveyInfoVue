import { claimRequest } from '@/utils/common'

export const findPolicyInfo = data => claimRequest('/policy/findPolicyInfo', data, '', '')

export const queryBySurveyId = data => claimRequest('/survey/queryBySurveyId', data, '', '')

export const completeClmSurveyInput = data => claimRequest('/survey/completeClmSurveyInput', data, '', '')

export const completeClmSurveyReview = data => claimRequest('/survey/completeClmSurveyReview', data, 'audit', 'completeClmSurveyReview')

export const openClmSurvey = data => claimRequest('/survey/openClmSurvey', data, '', '')

export const raiseClmSurvey = data => claimRequest('/survey/raiseClmSurvey', data, 'audit', 'returnClmSurveyReview')

export const returnClmSurveyReview = data => claimRequest('/survey/returnClmSurveyReview', data, '', '')

export const save = data => claimRequest('/survey/save', data, '', '')
