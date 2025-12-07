<script setup>
const props = defineProps({
    logo: String,
    name: String
});
</script>

<template>
    <div class="node-container group">
        <div class="node-circle group-hover:shadow-blue">
            <img v-if="logo" :src="logo" :alt="name || 'Node Logo'" class="w-5 opacity-90" />
            <img v-else src="" alt="null" class="w-5 opacity-50" />
        </div>

        <!-- Tooltip (logo name) -->
        <div v-if="name" class="tooltip group-hover:opacity-100">
            {{ name }}
        </div>
    </div>
</template>

<style scoped>
.node-container {
    position: absolute;
    pointer-events: auto;
}

.node-circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #13161e;
    border: 1px solid #28303b;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.25s ease;
}

.node-circle:hover {
    box-shadow: 0 0 12px #1a74ff;
    transform: scale(1.1);
}

.tooltip {
    position: absolute;
    bottom: -28px;
    left: 50%;
    transform: translateX(-50%);
    background: #1a74ff;
    padding: 4px 10px;
    border-radius: 6px;
    white-space: nowrap;
    color: white;
    font-size: 12px;
    opacity: 0;
    transition: 0.25s;
}
</style>
