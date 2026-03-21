export default {
    template: `
        <button 
            :class="{
                'bg-blue-200 ml-4 hover:bg-gray-400 border rounded px-5 py-5 cursor-pointer disabled:cursor-not-allowed': type=='primary',
                'bg-red-200 ml-4 hover:bg-gray-400 border rounded px-5 py-5 cursor-pointer disabled:cursor-not-allowed': type=='secondary',
                'bg-green-200 ml-4 hover:bg-gray-400 border rounded px-5 py-5 cursor-pointer disabled:cursor-not-allowed': type=='tertiary',
                isloading: 'processing',
            }"
            :disabled="processing"
        >
            <slot/>
        </button>
    `,

    props: {
        type: {
            type: String,
            default: 'primary'
        }
    }
}