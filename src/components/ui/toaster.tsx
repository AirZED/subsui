import { useToast } from "@hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@components/ui/toast";

type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export function Toaster({
  position = "bottom-right",
}: {
  position?: ToastPosition;
}) {
  const { toasts } = useToast();

  const positionClasses = {
    "top-left": "top-5 left-5",
    "top-center": "top-5 left-1/2 -translate-x-1/2",
    "top-right": "top-5 right-5",
    "bottom-left": "bottom-5 left-5",
    "bottom-center": "bottom-5 left-1/2 -translate-x-1/2",
    "bottom-right": "bottom-5 right-5",
  };

  return (
    <ToastProvider>
      {toasts.map(({ id, title, variant, description, action, ...props }) => (
        <Toast key={id} {...props}>
          <div className="flex-1 grid gap-1">
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && <ToastDescription>{description}</ToastDescription>}
          </div>
          {action}
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport className={positionClasses[position]} />
    </ToastProvider>
  );
}
