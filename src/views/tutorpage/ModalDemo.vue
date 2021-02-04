<template>
    <h1>{{ judul }}</h1>
    <p>Selamat Datang...</p>
    <div v-if="isShowModal">
        <view-modal
            :juduls="judul"
            :contents="content"
            theme="sale"
            @close-event="closeModalEvent()"
        />
    </div>
    <div>
        <button @click="toggleShowModal()">Open Dialog Modal</button>
    </div>
</template>

<script>
import ViewModal from '../../components/ViewModal.vue';

export default {
    name: 'ModalDemo',
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
        closeModalEvent() {
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
