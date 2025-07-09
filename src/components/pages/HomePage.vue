<template>
    <section class="my-10">
        <div class="px-[120px]">
            <div class="grid gap-13 sm:grid-cols-2 md:grid-cols-3">
                <CourseCard v-for="course in courses" :key="course.id" :image="course.image" :badge="course.badge"
                    :title="course.title" :description="course.description" />
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
    },
    {
        image: "https://kiyantraininginstitute.in/wp-content/uploads/2024/07/laravel_course_in_delhi.gif",
        badge: "New",
        title: "Laravel",
        description: "Master Laravel for building robust and scalable PHP web applications.",
    },
    {
        image: "https://5.imimg.com/data5/YV/QF/DJ/GLADMIN-57611858/selection-378-500x500.png",
        badge: "Free",
        title: "HTML5",
        description: "Learn the foundations of web development with HTML5.",
    },
    {
        image: "https://www.pragimtech.com/wp-content/uploads/2019/03/java-script.jpg",
        badge: "Trending",
        title: "JavaScript",
        description: "Get up to speed with modern JavaScript from basics to advanced concepts.",
    }
]

</script>
