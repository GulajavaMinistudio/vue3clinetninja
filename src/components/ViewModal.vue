<template>
    <div class="backdrop">
        <div class="modal">
            <p>Modal Content</p>
            <p>Isi dari dialog modal yang muncul di halaman</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ViewModal',
};
</script>

<style lang="scss" scoped>
.modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}
.backdrop {
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
}
</style>
