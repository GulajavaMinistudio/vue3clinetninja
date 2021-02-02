<template>
    <div class="backdrop">
        <div class="modal">
            <h1>Modal Title</h1>
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
// Scoped Style untuk mencegah style terpakai di komponen
// Di luar dari komponen ini dan anak komponen yang ada di dalamnya
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
    margin-left: 0em;
}

h1 {
    color: #03cfb4;
    border: none;
    padding: 0;
}

.modal p {
    font-family: 'Times New Roman', Times, serif;
    font-weight: bold;
}
</style>
