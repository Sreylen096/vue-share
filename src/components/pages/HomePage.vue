<template>
    <section class="my-10">
        <div class="px-[120px]">

            <div class="grid grid-cols-3 mb-9">
                <div class="relative w-full">
                    <input v-model="search" placeholder="Search courses..."
                        class="w-full pr-10 rounded-lg border px-3 py-3 !border-[var(--color-gray-300)] outline-none" />
                    <button v-if="search" @click="search = ''" type="button"
                        class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-700"
                        aria-label="Clear search">
                        <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g id="Menu / Close_MD">
                                    <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#4f4f4f"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </g>
                            </g>
                        </svg>
                    </button>
                </div>

            </div>
            <p v-if="search" class="mb-5 text-gray-600">
                 <span class="!font-bold">{{ filteredCourses.length }}</span> course{{ filteredCourses.length !== 1 ? 's' : '' }} for "{{ search
                }}"
            </p>

            <div class="grid gap-13 sm:grid-cols-2 md:grid-cols-3" v-if="filteredCourses.length > 0">
                <CourseCard v-for="course in filteredCourses" :key="course.id" :image="course.image"
                    :badge="course.badge" :title="course.title" :description="course.description" />
            </div>
            <div v-else>
                <div class="flex flex-col items-center justify-center space-y-3 text-center">
                    <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M10.5 15L13.5 12M13.5 15L10.5 12" stroke="#1C274C" stroke-width="1.5"
                                stroke-linecap="round"></path>
                            <path
                                d="M22 11.7979C22 9.16554 22 7.84935 21.2305 6.99383C21.1598 6.91514 21.0849 6.84024 21.0062 6.76946C20.1506 6 18.8345 6 16.2021 6H15.8284C14.6747 6 14.0979 6 13.5604 5.84678C13.2651 5.7626 12.9804 5.64471 12.7121 5.49543C12.2237 5.22367 11.8158 4.81578 11 4L10.4497 3.44975C10.1763 3.17633 10.0396 3.03961 9.89594 2.92051C9.27652 2.40704 8.51665 2.09229 7.71557 2.01738C7.52976 2 7.33642 2 6.94975 2C6.06722 2 5.62595 2 5.25839 2.06935C3.64031 2.37464 2.37464 3.64031 2.06935 5.25839C2 5.62595 2 6.06722 2 6.94975M21.9913 16C21.9554 18.4796 21.7715 19.8853 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V11"
                                stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path>
                        </g>
                    </svg>
                    <p class="text-xl text-gray-700 font-medium">Course Not Found!</p>
                    <p>Please search another course.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import CourseCard from '@/components/partials/CourseCard.vue'
import { ref, computed } from 'vue';

const search = ref('')

const courses = [
    {
        image: "https://www.achieversit.com/management/uploads/course_image/vuejs-img.jpeg",
        badge: "New",
        title: "Vue.js",
        description: "Discover the power of Vue.js and learn how to create highly interactive and dynamic user interfaces. This course covers everything from the basics of reactive data binding to advanced component design, state management with Vuex, and integrating third-party libraries. Perfect for beginners and experienced developers who want to master modern front-end development."
    },
    {
        image: "https://img-c.udemycdn.com/course/750x422/6431435_bff1.jpg",
        badge: "Popular",
        title: "Nuxt",
        description: "Deep dive into the Nuxt framework and explore how it extends Vue.js for building powerful server-side rendered and statically generated applications. You'll learn about advanced features like file-based routing, dynamic middleware, API integration, SEO optimization, and how to deploy high-performance Nuxt apps to production."
    },
    {
        image: "https://miro.medium.com/v2/resize:fit:1200/0*vc4LVhHM3tH-2Sfh.jpg",
        badge: "Popular",
        title: "React.js",
        description: "Build scalable and efficient user interfaces with React.js by mastering JSX, functional and class components, props, state, and lifecycle methods. This course also explores hooks, context API, and modern design patterns to help you create responsive single-page applications and real-world projects that follow industry best practices."
    },
    {
        image: "https://kiyantraininginstitute.in/wp-content/uploads/2024/07/laravel_course_in_delhi.gif",
        badge: "New",
        title: "Laravel",
        description: "Master the Laravel PHP framework to build robust, secure, and maintainable web applications. You'll learn about routing, Eloquent ORM, blade templating, middleware, authentication, RESTful APIs, and best practices for developing enterprise-grade applications with Laravel. This course is ideal for anyone wanting to upgrade their PHP skills."
    },
    {
        image: "https://5.imimg.com/data5/YV/QF/DJ/GLADMIN-57611858/selection-378-500x500.png",
        badge: "Free",
        title: "HTML5",
        description: "Learn the foundations of modern web development by diving deep into HTML5. Understand semantic markup, multimedia integration, forms, APIs like Geolocation and Web Storage, and how HTML5 works together with CSS and JavaScript to create accessible, SEO-friendly, and responsive websites suitable for any device."
    },
    {
        image: "https://www.pragimtech.com/wp-content/uploads/2019/03/java-script.jpg",
        badge: "Trending",
        title: "JavaScript",
        description: "Get up to speed with modern JavaScript, from core concepts like variables, data types, and control structures to advanced topics like closures, asynchronous programming with promises and async/await, ES6+ features, and object-oriented design. Build interactive, dynamic web applications and become proficient in the language of the web."
    }
];


const filteredCourses = computed(() => {
    if (!search.value) return courses
    return courses.filter(course =>
        course.title.toLowerCase().includes(search.value.toLowerCase())
    )
})

</script>
