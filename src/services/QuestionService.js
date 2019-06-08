import Api from '@/services/Api'

export default {
  fetchFeaturedQuestions () {
    return Api().get('questions/featured?order=desc&sort=activity&site=stackoverflow');
  }
}