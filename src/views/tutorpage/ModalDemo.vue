<template>
    <h1>{{ judul }}</h1>
    <view-modal />
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
            judul: 'Demo Modal Dialog Vue',
        };
    },
};
</script>

<style lang="scss"></style>
