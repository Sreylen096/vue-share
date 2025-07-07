<!-- <template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-4">PDF Report with jsPDF</h2>
    <div class="p-4 border rounded bg-white shadow-md max-w-xl">
      <h3 class="text-lg font-semibold mb-2">{{ report.title }}</h3>
      <p><strong>Date:</strong> {{ report.date }}</p>
      <ul class="mt-2 list-disc list-inside">
        <li v-for="(item, index) in report.items" :key="index">
          {{ item.name }} — Score: {{ item.score }}
        </li>
      </ul>
    </div>

    <button @click="generatePDF" class="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
      Generate PDF
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import jsPDF from 'jspdf'

const report = ref({
  title: 'Student Exam Report',
  date: new Date().toLocaleDateString(),
  items: [
    { name: 'Mathematics', score: 92 },
    { name: 'Physics', score: 88 },
    { name: 'Chemistry', score: 79 },
  ]
})

const generatePDF = () => {
  const doc = new jsPDF()

  doc.setFontSize(18)
  doc.text(report.value.title, 10, 10)

  doc.setFontSize(12)
  doc.text(`Date: ${report.value.date}`, 10, 20)

  let y = 30
  report.value.items.forEach((item, index) => {
    doc.text(`${index + 1}. ${item.name} — Score: ${item.score}`, 10, y)
    y += 10
  })

  doc.save('report.pdf')
}
</script>

<style scoped>
body {
  font-family: sans-serif;
}
</style> -->

<template>
  <div class="mb-6 mt-4">
    <div class="container px-0">
      <div class="mb-4">
        <h4 class="fw-bold text-body-emphasis">Connect Your Social Accounts</h4>
        <p class="text-muted mb-0">Connect your favorite services to integrate with our platform.</p>
      </div>

      <div class="row g-4">
        <!-- Telegram Card -->
        <div class="col-md-4 col-sm-6">
          <div class="card shadow-sm border-0 text-center h-100">
            <div class="card-body">
              <!-- <img src="@/assets/img/png/telegram.png" alt="Telegram" class="mb-3" style="height: 50px;"> -->
              <h5 class="card-title mb-2">Telegram</h5>
              <p class="text-muted small mb-3">Connect with Telegram to receive notifications directly in your chat.</p>

  
              <div id="telegram-login-button"></div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="card shadow-sm border-0 text-center h-100">
            <div class="card-body">
              <!-- <img src="@/assets/img/png/google.png" alt="Gmail" class="mb-3" style="height: 50px;"> -->
              <h5 class="card-title mb-2">Gmail</h5>
              <p class="text-muted small mb-3">Connect with Gmail to sync messages and calendar events.</p>
              <button class="btn btn-outline-primary w-100 border border-dashed">Connect Gmail</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://telegram.org/js/telegram-widget.js?7'
  script.setAttribute('data-telegram-login', 'JAUERY_bot') 
  script.setAttribute('data-size', 'large')
  script.setAttribute('data-userpic', 'false')
  // script.setAttribute('data-auth-url', 'https://yourdomain.com/auth/telegram') 
  script.setAttribute('data-request-access', 'write')
  document.getElementById('telegram-login-button').appendChild(script)
})
</script>
