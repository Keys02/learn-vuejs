import CreateAssignment from "./CreateAssignment.js"

export default {

    components: { CreateAssignment },

    template: `
        <section class="mt-2" v-show="inProgressAssignments.length">
            <h1 class="font-bold mb-2">In Progress</h1>
            <ul class="border divide-y">
                <li 
                    v-for="assignment in inProgressAssignments" 
                    :key="assignment.id"
                >
                    <label class="p-2 flex justify-between">
                        {{ assignment.name }}
                        <input type="checkbox" v-model="assignment.complete" class="ml-3">
                    </label>
                </li>
            </ul>
        </section>

        <section class="space-y-6" v-show="completedAssignments.length">
            <h1 class="font-bold mb-2 mt-3">Completed Assignments</h1>
            <ul class="border divide-y">
                <li 
                    v-for="assignment in completedAssignments" 
                    :key="assignment.id"
                >
                    <label class="line-through p-2 flex justify-between">
                        {{ assignment.name }}
                        <input type="checkbox" v-model="assignment.complete" class="ml-3">
                    </label>
                </li>
            </ul>
        </section>
        <CreateAssignment @add="add"></CreateAssignment>
    `,

    data() {
        return {
            assignments: [
                {id: 1, name: 'Clean my room', complete: false},
                {id: 2, name: 'Walk the dog', complete: false},
                {id: 3, name: 'Do my homework', complete: false},
            ],

            newAssignment: ''
        }
    },

    computed: {
        inProgressAssignments() {
            return this.assignments.filter(a => ! a.complete)
        },

        completedAssignments() {
            return this.assignments.filter(a => a.complete) 
        }
    },

    methods: {
        add(name) {
            this.assignments.push(
                {
                    id: this.assignments.length + 1,
                    name: name,
                    completed: false

                }
            )
            this.newAssignment = ''
        }
    }

}