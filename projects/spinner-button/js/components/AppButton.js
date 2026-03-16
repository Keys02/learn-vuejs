export default {
    template: `
            <button :class="bg-blue-600 px-5 py-3 text-white rounded hover:bg-blue-700 cursor-pointer px-g disabled:cursor-not-allowed" @click="disableButton" :disabled="buttonDisabledStatus"><slot /></button>
    `,

    data(){
        return {
            buttonDisabledStatus: false 
        }
    },

    methods: {
        disableButton() {
            this.buttonDisabledStatus = true
        }
    }
}