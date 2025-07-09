<template>
    <div class="max-w-sm bg-white rounded-2xl border !border-[var(--color-gray-200)] overflow-hidden">
        <img :src="props.image" alt="Course image" class="w-full h-50 object-cover">
        <div class="p-4">
            <span class="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full mb-2">
                {{ props.badge }}
            </span>
            <h2 class="text-lg font-semibold mb-2">{{ props.title }}</h2>
            <p class="text-gray-600 text-sm mb-4 ">
                {{ props.description }}
            </p>
            <button @click="handleReadMore"
                class="bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Read More
            </button>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    image: {
        type: String,
        required: true
    },
    badge: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    }
})

function handleReadMore() {
    alert(`Read more about: ${props.title}`)
}
</script>
