<script setup lang="ts">
import { popupStore } from "../../stores/popup";
</script>

<template>
    <Teleport to="body">
        <div v-if="popupStore.isOpen"
            class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999999]"
            @click="popupStore.close">
            <!-- Popup Box -->
            <div class="w-[360px] md:w-[420px] bg-[#151729] rounded-2xl p-6 shadow-xl relative" @click.stop>
                <!-- Close Button -->
                <button class="absolute top-3 left-3 text-white/50 hover:text-white" @click="popupStore.close">
                    ✕
                </button>

                <!-- Dynamic Content -->
                <slot />
            </div>
        </div>
    </Teleport>
</template>
