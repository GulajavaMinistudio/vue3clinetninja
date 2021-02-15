<template>
    <h1>{{ judul }}</h1>
    <p>Selamat Datang...</p>
    <div v-if="isShowModal">
        <!-- Contoh penggunaan Slots -->
        <view-modal :juduls="judul" :contents="content" theme="" @close-event="closeModalEvent">
            <h1>Kucing Giveaway</h1>
            <p>Dapatkan diskon sebesar 50%</p>
            <!-- Dengan menggunakan named slots -->
            <template v-slot:links>
                <a href="#">Daftarkan Sekarang</a>
                <a href="#">Info lebih lanjut</a>
            </template>
        </view-modal>
    </div>
    <div>
        <button @click.ctrl="toggleShowModal()">Open Dialog Modal (Ctrl)</button>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

// Cara async Component di Vue 3
const ViewModal = defineAsyncComponent(() => import('../../components/SlotsModals.vue'));

export default {
    name: 'ModalSlotDemo',
    components: {
        'view-modal': ViewModal,
    },
    data() {
        return {
            judul: 'Daftarkan Diri Anda Segera',
            content: 'Untuk mendapatkan hadiah tapi ga jadi',
            isShowModal: false,
        };
    },
    methods: {
        kirimPropsDataModal() {
            this.judul = 'Judul modal berganti';
            this.content = 'Konten modal berganti';
        },
        toggleShowModal() {
            this.isShowModal = !this.isShowModal;
        },
        closeModalEvent(data) {
            // Menerima data event dari child component
            console.log(data);
            this.isShowModal = false;
        },
    },
    mounted() {
        // setTimeout(() => {
        //     this.kirimPropsDataModal();
        // }, 5000);
    },
};
</script>

<style lang="scss"></style>
