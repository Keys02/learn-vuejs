export default {
    template: `
        <button 
            class="bg-gray-200 hover:bg-gray-400 border rounded px-5 py-5 disabled:cursor-not-allowed"
        >
            <slot/>
        </button>
    `
}