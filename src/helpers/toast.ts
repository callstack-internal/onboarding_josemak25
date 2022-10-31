/**
 * This exposes the native ToastModule module as a JS module. This has a
 * function 'show' which takes the following parameters:
 *
 * 1. String text: A string representing the text to show in our toaster
 */
import { NativeModules } from "react-native";

interface ToastInterface {
  show(text: string): void;
}

export const Toaster: ToastInterface = NativeModules.ToastModule;
