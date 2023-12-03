import './assets/main.scss';

import HomePage from './components/HomePage.vue';
import AboutPage from './components/AboutPage.vue';
import ContactPage from './components/ContactPage.vue';
import WorldsPage from './components/WorldsPage.vue';
import BlogPage from './components/BlogPage.vue';
import EventsPage from './components/EventsPage.vue';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';

const app = createApp(App);

app.component('HomePage', HomePage)
.component('AboutPage', AboutPage)
.component('ContactPage', ContactPage)
.component('WorldsPage', WorldsPage)
.component('BlogPage', BlogPage)
.component('EventsPage', EventsPage);

app.use(createPinia());
app.use(ElementPlus);
app.mount('#app');
