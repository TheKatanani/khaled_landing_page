<script setup lang="ts">
const props = defineProps<{
    currentStep: number; // 1, 2, or 3
}>();

function isCompleted(step: number) {
    return props.currentStep > step;
}

function isActive(step: number) {
    return props.currentStep === step;
}
</script>

<template>
    <div class="flex items-center justify-center gap-3 select-none">


        <!-- STEP 1 -->
        <div class="step-wrapper">
            <div :class="[
                'step-circle',
                isCompleted(1) ? 'completed' : '',
                'active',
            ]">
                <span>1</span>
            </div>
        </div>
        <div class="connector" :class="{ filled: isCompleted(1) }"></div>
        <!-- STEP 2 -->
        <div class="step-wrapper">
            <div :class="[
                'step-circle',
                isCompleted(2) ? 'completed active' : '',
                isActive(2) ? 'active' : '',
            ]">
                <span>2</span>
            </div>
        </div>


        <div class="connector" :class="{ filled: isCompleted(2) }"></div>
        <!-- STEP 3 -->
        <div class="step-wrapper">
            <div :class="[
                'step-circle',
                isCompleted(3) ? 'completed' : '',
                isActive(3) ? 'active' : '',
            ]">
                <span v-if="isActive(3)">
                    <img src="../../../assets/check.svg" class="w-5 h-5" alt="check" />
                </span>
                <span v-else>3</span>
            </div>
        </div>


    </div>
</template>

<style scoped>
.step-wrapper {
    display: flex;
    align-items: center;
}

/* Smaller circle */
.step-circle {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1.5px dashed #7b8190;
    color: #7b8190;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.step-circle.completed {
    background: transparent;
    border-color: #7b8190;
    color: #7b8190;
    font-size: 14px;
}

.step-circle.active {
    background: #1A74FF;
    border-color: #1A74FF;
    color: white;
    font-size: 14px;
}

/* Smaller connectors */
.connector {
    width: 70px;
    height: 3px;
    background: #1A1F33;
    border-radius: 10px;
    opacity: 0.5;
}

.connector.filled {
    background: #2F5FFF;
    opacity: 1;
}
</style>
