<template>
    <div class="backdrop">
        <div class="modal">
            <h1>Modal Title {{ judulModal }}</h1>
            <p>Modal Content</p>
            <p>{{ contentModal }}</p>
            <p>Isi dari dialog modal yang muncul di halaman</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ViewModal',
    props: {
        juduls: {
            type: String,
            default: '',
        },
        contents: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            judulModal: '',
            contentModal: '',
        };
    },
    mounted() {
        this.judulModal = this.juduls;
        this.contentModal = this.contents;
    },
    watch: {
        juduls(newValue) {
            if (newValue) {
                this.judulModal = newValue;
            }
        },
        contents(newValue, oldValue) {
            if (newValue !== oldValue) {
                this.contentModal = newValue;
            }
        },
    },
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
