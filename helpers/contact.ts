// helpers.ts
import { toast } from 'sonner';


// Helper function to show a custom toast message
export function showToast(message: string, type: string = 'default') {
    switch (type) {
      case 'success':
        toast.success(message);
        break;
      case 'error':
        toast.error(message, {
          style: {color: 'red'},
        });
        break;
      default:
        toast(message);
        break;
    }
}
// Helper function to apply border styling to the invalid inputs
export function applyBorderStyling(inputElement: HTMLElement, color: string) {
inputElement.classList.remove('border');
inputElement.classList.add('border-2');
inputElement.classList.remove('border-slate-800');
inputElement.classList.add(color);
}
// Helper function to update invalid inputs styling
export function applyErrorStyling(inputId: string, errorMessage: string) {
const inputElements = document.getElementById(inputId);
if (!inputElements) return;
// Apply the error styling to the input
applyBorderStyling(inputElements, 'border-rose-600');
}
// Helper function to handle validation errors
export function handleValidationErrors(errors: Array<string>) {
for (const inputId in errors) {
    showToast(errors[inputId], 'error');
    applyErrorStyling(inputId, errors[inputId]);
}
}