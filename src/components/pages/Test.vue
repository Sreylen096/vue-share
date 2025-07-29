<template>
    <div class="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-xl shadow bg-white">
        <div class="text-2xl font-bold mb-6 text-gray-800 flex"><svg fill="#0d1a59" width="24px" height="24px"
                viewBox="0 0 16 16" id="register-16px" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path id="Path_184" data-name="Path 184"
                        d="M57.5,41a.5.5,0,0,0-.5.5V43H47V31h2v.5a.5.5,0,0,0,.5.5h5a.5.5,0,0,0,.5-.5V31h2v.5a.5.5,0,0,0,1,0v-1a.5.5,0,0,0-.5-.5H55v-.5A1.5,1.5,0,0,0,53.5,28h-3A1.5,1.5,0,0,0,49,29.5V30H46.5a.5.5,0,0,0-.5.5v13a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-2A.5.5,0,0,0,57.5,41ZM50,29.5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5V31H50Zm11.854,4.646-2-2a.5.5,0,0,0-.708,0l-6,6A.5.5,0,0,0,53,38.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.354-.146l6-6A.5.5,0,0,0,61.854,34.146ZM54,40V38.707l5.5-5.5L60.793,34.5l-5.5,5.5Zm-2,.5a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1,0-1h2A.5.5,0,0,1,52,40.5Zm0-3a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1,0-1h2A.5.5,0,0,1,52,37.5ZM54.5,35h-5a.5.5,0,0,1,0-1h5a.5.5,0,0,1,0,1Z"
                        transform="translate(-46 -28)"></path>
                </g>
            </svg><span class="ml-2">User Registration</span></div>
        <form @submit.prevent="submit">
            <div class="mb-4">
                <label for="name" class="block mb-1 font-medium text-gray-700">Full Name</label>
                <input v-model="form.name" id="name" type="text" placeholder="Enter your name"
                    @input="validateForm('name')"
                    class="w-full border border-gray-300 p-2 rounded focus:outline-none" />
                <p v-if="formErrors.name" class="text-red-500 text-sm mt-1">{{ formErrors.name }}</p>
            </div>
            <div class="mb-4">
                <label for="email" class="block mb-1 font-medium text-gray-700">Email Address</label>
                <input v-model="form.email" id="email" type="email" placeholder="Enter your email"
                    @input="validateForm('email')"
                    class="w-full border border-gray-300 p-2 rounded focus:outline-none" />
                <p v-if="formErrors.email" class="text-red-500 text-sm mt-1">{{ formErrors.email }}</p>
            </div>

            <div class="mb-6">
                <label for="message" class="block mb-1 font-medium text-gray-700">Message</label>
                <textarea v-model="form.message" id="message" placeholder="Leave a message..."
                    @input="validateForm('message')"
                    class="w-full border border-gray-300 p-2 rounded h-28 resize-none focus:outline-none"></textarea>
                <p v-if="formErrors.message" class="text-red-500 text-sm mt-1">{{ formErrors.message }}</p>
            </div>
            <button type="submit" class="w-full bg-slate-700 text-white py-2 px-4 rounded-lg hover:bg-slate-800 transition">
                Submit
            </button>
        </form>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import { z } from 'zod'
import { useFormValidation } from '@/composable/useFormValidation'

const form = reactive({ name: '', email: '', message: '' })
const schema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    message: z.string().min(10, 'Message must be at least 10 characters')
})

const { formErrors, validateForm, clearErrors } = useFormValidation(schema, form)

function submit() {
    if (!validateForm()) return
    alert('Success!')
    form = { name: '', email: '', message: '' }
    clearErrors()
}
</script>
