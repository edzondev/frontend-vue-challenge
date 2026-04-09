/* eslint-disable @typescript-eslint/no-explicit-any */
import { computed } from "vue";

/**
 * Convierte el nombre de un evento de Vue a la convención de props de eventos.
 * Ej: 'update:modelValue' -> 'onUpdate:modelValue'
 * Ej: 'change' -> 'onChange'
 */
const toHandlerKey = (event: string) => {
  return event ? `on${event.charAt(0).toUpperCase()}${event.slice(1)}` : "";
};

export function useForwardPropsEmits<
  T extends Record<string, any>,
  E extends (...args: any[]) => void,
>(props: T, emit: E, eventNames: string[] = []) {
  return computed(() => {
    const forwarded = {} as Record<string, any>;

    // 1. Filtrar props que sean undefined
    for (const key in props) {
      if (props[key] !== undefined) {
        forwarded[key] = props[key];
      }
    }

    // 2. Inyectar los emits como funciones "onEventName"
    for (const eventName of eventNames) {
      const handlerKey = toHandlerKey(eventName);
      // Cuando el hijo dispare el evento, lo pasamos hacia arriba
      forwarded[handlerKey] = (...args: any[]) =>
        emit(eventName as any, ...args);
    }

    return forwarded;
  });
}
