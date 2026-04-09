import { computed } from "vue";

/**
 * Toma un objeto de props reactivo y devuelve un computed
 * que excluye todas las propiedades cuyo valor sea undefined.
 */
export function useForwardProps<T extends Record<string, any>>(props: T) {
  return computed(() => {
    const forwardedProps = {} as Record<string, any>;

    for (const key in props) {
      if (props[key] !== undefined) {
        forwardedProps[key] = props[key];
      }
    }

    return forwardedProps as Partial<T>;
  });
}
