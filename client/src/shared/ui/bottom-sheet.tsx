"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BottomSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  title?: string;
}

export function BottomSheet({
  open,
  onOpenChange,
  children,
  title,
}: BottomSheetProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 bg-black/50 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                className="fixed left-0 right-0 bottom-0 z-100 bg-white rounded-t-[20px] shadow-lg"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94], // cubic-bezier for smooth animation
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                <Dialog.Title className="sr-only">
                  {title || "카페 정보"}
                </Dialog.Title>

                <div className="flex items-center justify-center p-4 border-b border-gray-100">
                  <div className="w-12 h-1 bg-gray-300 rounded-full" />
                </div>
                {title && (
                  <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                    <h2 className="text-lg font-semibold text-gray-900">
                      {title}
                    </h2>
                    <Dialog.Close className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                      <X className="w-5 h-5 text-gray-500" />
                    </Dialog.Close>
                  </div>
                )}
                <div className="max-h-[70vh] overflow-y-auto">{children}</div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
