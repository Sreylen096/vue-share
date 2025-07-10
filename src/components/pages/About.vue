<template>
    <section class="my-10">
        <div class="px-[120px]">
            <div class="grid gap-13 sm:grid-cols-2 md:grid-cols-3">
                <!-- <CourseCard v-for="course in courses" :key="course.id" :image="course.image" :badge="course.badge"
                    :title="course.title" :description="course.description" /> -->

                <CourseCard image="https://www.achieversit.com/management/uploads/course_image/vuejs-img.jpeg" badge="Popular" title="Nuxt"
                    description="Deep dive into Nuxt features." />
            </div>
        </div>
    </section>
</template>

<script setup>
import CourseCard from '@/components/partials/CourseCard.vue'

const courses = [
    {
        image: "https://www.achieversit.com/management/uploads/course_image/vuejs-img.jpeg",
        badge: "New",
        title: "Vue.js",
        description: "Learn how to build awesome interfaces with Vue.js.",
    },
    {
        image: "https://img-c.udemycdn.com/course/750x422/6431435_bff1.jpg",
        badge: "Popular",
        title: "Nuxt",
        description: "Deep dive into modern Nuxt features and patterns.",
    },
    {
        image: "https://miro.medium.com/v2/resize:fit:1200/0*vc4LVhHM3tH-2Sfh.jpg",
        badge: "Popular",
        title: "React.js",
        description: "Build dynamic user interfaces with React and learn component-based architecture.",
    }
]

</script>
