import React, { FC } from "react";
import styles from "./index.module.scss";

interface ErrorsTextHandlerProps {
  message: string | undefined;
  children: JSX.Element;
}

const ErrorsTextHandler: FC<ErrorsTextHandlerProps> = ({ message, children }) => {
  if (message) {
    return (
      <div className={styles.error}>
        {children}
        <p className={styles.errorText}>{message}</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default ErrorsTextHandler;
