import CreateAssignment from "./CreateAssignment.js"

export default {
    components: { CreateAssignment },

    template: `
        <section class="mt-2" v-show="inProgressAssignments.length">
            <h1 class="font-bold mb-2">
                In Progress
                <span>({{ assignments.length }})</span>
            </h1>
            <div class="flex gap-2">
                <button 
                @click="currentTag = tag"
                class="cursor-pointer border px-1 py-px rounded text-xs" v-for="tag in tags"
                >{{ tag }}</button> 
            </div>
            <ul class="border divide-y mt-6">
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
        <create-assignment @add="add"></create-assignment>
    `,

    data() {
        return {
            assignments: [
                {id: 1, name: 'Clean my room', complete: false, tag: 'home'},
                {id: 2, name: 'Walk the dog', complete: false, tag: 'home'},
                {id: 3, name: 'Do my homework', complete: false, tag: 'school'},
            ],

            currentTag: 'home'
        }
    },

    computed: {
        inProgressAssignments() {
            if (this.currentTag == 'all') return this.assignments.filter(a => ! a.complete)

            return this.assignments.filter(a => ! a.complete && a.tag === this.currentTag)
        },

        completedAssignments() {
            if (this.currentTag == 'all') return this.assignments.filter(a => a.complete)

            return this.assignments.filter(a => a.complete && a.tag === this.currentTag) 
        },

        tags() {
            return ['all', ...new Set(this.assignments.map(a => a.tag))]
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
        }
    }

}