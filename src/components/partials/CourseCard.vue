<template>
    <div class="max-w-sm bg-white rounded-2xl border !border-[var(--color-gray-200)] overflow-hidden">
        <img :src="props.image" alt="Course image" class="w-full h-54 object-cover">
        <div class="p-4">
            <span class="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full mb-2">
                {{ props.badge }}
            </span>
            <h2 class="text-lg font-semibold mb-2">{{ props.title }}</h2>
            <p class="text-gray-600 text-base mb-4 line-clamp-3">
                {{ props.description }}
            </p>
            <a href="#" class="flex ">Read More <svg class="pt-2" width="24px" height="24px" viewBox="0 0 24 24"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z"
                            fill="#1C274C"></path>
                    </g>
                </svg></a>
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

</script>
