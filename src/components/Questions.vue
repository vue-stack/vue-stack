/* eslint-disable */

<template>
    <div class="questions">
        <h1>QUESTIONS</h1>
        <div v-for="question in questions" class="question">
            <div class="vote">
                <b>{{question.score}}</b>
                <p>
                    votes
                </p>
            </div>

            <div class="answer">
                <b>{{question.answer_count}}</b>
                <p>
                    answers
                </p>
            </div>

            <div class="views">
                <b>{{question.view_count}}</b>
                <p>
                    views
                </p>
            </div>

            <div class="question-detail">
                <div class="question-title"><b>+{{question.bounty_amount}}</b> <a v-bind:href="question.link">{{question.title}}</a></div>
                <p class="tags"><span class="tag" v-for="tag in question.tags">{{tag}}</span></p>

            </div>

        </div>
    </div>
    
</template>

<script>
import QuestionService from '@/services/QuestionService'

export default {
    name: 'questions',
    data(){
        return {
            questions: []
        }
    },
    mounted(){
        this.getQuestions()
    },
    methods: {
        async getQuestions(){
            const response = await QuestionService.fetchFeaturedQuestions();
            this.questions = response.data.items;
        }
    }
}
</script>

<style scoped>
    .question {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: center;
        align-items: center;
        padding: 20px;
        border-bottom: 1px solid #ccc;
    }

    .views, .vote, .answer{
        width: 70px;
        padding: 10px;
    }

    .tags{
        margin-bottom: 0;
    }

    .answer{
        border: 1px solid #45A163;
        color: #45A163;
        border-radius: 3px;
    }

    .views p, .vote p, .answer p{
        font-size: 11px;
        margin-bottom: 0;
    } 

    .views b, .vote b, .answer b{
        display: block;
        margin-bottom: 4px;
        font-size: 17px;
    }

    .question-detail{
        margin-left: 15px;
        flex: 1;
        text-align: left;
    }

    .question-title{
        display: flex;
        margin-bottom: 5px;
        align-items: center;
        color: #07C;
    }

    .question-title b{
        color: #FFF;
        font-size: 11px;
        padding: .2em .5em .25em;
        line-height: 1.3;
        background-color: #0077dd;
        margin-right: 5px;
        border-radius: 2px;
    }

    .tag{
        display: inline-block;
        color: #39739d;
        background-color: #E1ECF4;
        border-radius: 3px;
        padding: 3px 8px;
        margin-right: 5px;
    }
</style>
