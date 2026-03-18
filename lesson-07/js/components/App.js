import AppButton from "./AppButton.js";

export default {
    template: `
        <section class="mt-2" v-show="inProgressAssignments.length">
            <h1 class="font-bold mb-2">In Progress</h1>
            <ul>
                <li 
                    v-for="assignment in inProgressAssignments" 
                    :key="assignment.id"
                >
                    <label>
                        {{ assignment.name }}
                        <input type="checkbox" v-model="assignment.complete">
                    </label>
                </li>
            </ul>
        </section>

        <section v-show="completedAssignments.length" class="mt-2">
            <h1 class="font-bold">Completed Assignments</h1>
            <ul>
                <li 
                    v-for="assignment in completedAssignments" 
                    :key="assignment.id"
                >
                    <label class="line-through">
                        {{ assignment.name }}
                        <input type="checkbox" v-model="assignment.complete">
                    </label>
                </li>
            </ul>
        </section>
    `,

    components: {
        'app-button': AppButton
    },

    data() {
        return {
            assignments: [
                {id: 1, name: 'Clean my room', complete: false},
                {id: 2, name: 'Walk the dog', complete: false},
                {id: 3, name: 'Do my homework', complete: false},
            ]
        }
    },

    computed: {
        inProgressAssignments() {
            return this.assignments.filter(a => ! a.complete)
        },

        completedAssignments() {
            return this.assignments.filter(a => a.complete) 
        }
    }
}