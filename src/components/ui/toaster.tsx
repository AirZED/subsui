import { useToast } from "@hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@components/ui/toast";

// type ToastPosition =
//   | "top-left"
//   | "top-center"
//   | "top-right"
//   | "bottom-left"
//   | "bottom-center"
//   | "bottom-right";

export function Toaster() {
  const { toasts } = useToast();

  const positions = [
    "top-left",
    "top-center",
    "top-right",
    "bottom-left",
    "bottom-center",
    "bottom-right",
  ] as const;

  return (
    <ToastProvider>
      {positions.map((position) => {
        const toastsForPosition = toasts.filter(
          (toast) =>
            toast.position === position ||
            (!toast.position && position === "bottom-right")
        );

        if (toastsForPosition.length === 0) return null;

        return (
          <ToastViewport key={position} position={position} > 
            {toastsForPosition.map(
              ({ id, title, description, variant, icon, action, ...props }) => (
                <Toast
                  key={id}
                  variant={variant}
                  {...props}
                  className="flex flex-col items-center gap-6"
                >
                  <div className="flex items-center gap-2">
                    {icon && <div className="">{icon}</div>}
                    <div className="">
                      {title && (
                        <ToastTitle className="text-[1rem] font-semibold">
                          {title}
                        </ToastTitle>
                      )}
                      {description && (
                        <ToastDescription className="text-[0.6rem] font-light">
                          {description}
                        </ToastDescription>
                      )}
                    </div>
                  </div>
                  {action}
                  <ToastClose />
                </Toast>
              )
            )}
          </ToastViewport>
        );
      })}
    </ToastProvider>
  );
}
