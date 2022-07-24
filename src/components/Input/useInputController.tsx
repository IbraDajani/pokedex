import {useImperativeHandle, useMemo, useRef, useState} from 'react';
import {InputValueRef} from './types';

const useInputController = (
  ref: React.ForwardedRef<InputValueRef>,
  error: string | undefined,
  iconColor: string | undefined,
  color: string,
) => {
  /**
   * States
   */

  const [text, setText] = useState<string>('');
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  /**
   * Refs
   */

  const internalRef = useRef<any>();

  /**
   * ImperativeHandles
   */

  useImperativeHandle(
    ref,
    () => ({
      value: text,
      focus: () => internalRef.current?.focus?.(),
      blur: () => internalRef.current?.blur?.(),
      setValue: (value: string) => setText(value),
    }),
    [text],
  );

  /**
   * Memos
   */

  const selectedColorForActiveColorIcon = useMemo(() => {
    if (error) {
      return '#D93936';
    }
    if (iconColor) {
      return iconColor;
    }
    return color;
  }, [color, error, iconColor]);

  return {
    setPasswordVisible,
    selectedColorForActiveColorIcon,
    passwordVisible,
    internalRef,
    text,
    setText,
  };
};

export default useInputController;
