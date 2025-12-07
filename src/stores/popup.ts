import { reactive } from "vue";

export const popupStore = reactive({
  isOpen: false,
  data: null as any,
  open(data?: any) {
    popupStore.isOpen = true;
    popupStore.data = data || null;
  },
  close() {
    popupStore.isOpen = false;
    popupStore.data = null;
  }
});
