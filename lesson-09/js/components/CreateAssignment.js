export default {
    template: `
        <form @submit.prevent="add" class="mt-3">
            <div class="border p-2">
                <input v-model="newAssignment" class="bg-white text-black p-2" type="text" placeholder="New assignment..."/>
                <button class="ml-2 bg-white text-black rounded p-2" type="submit">Add</button>
            </div>
        </form>
    `,

    data() {
        return {
            newAssignment: ''
        }
    },

    method: {
        // The parent communicates to the child through props, the child communicates to the parent by emitting an event
        add(e) {
            this.$emit('add', this.newAssignment)
        }
    }
}