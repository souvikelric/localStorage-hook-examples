import { useLocalStorage } from "@souvikelric/uselocalstorage-hook";
import styles from "./text.module.css";
export default function TextInput() {
  const {
    value: text,
    setValue: setText,
    clearAllItems,
  } = useLocalStorage<string>({
    key: "text",
    initialValue: "This is the default Value",
  });
  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={clearAllItems}
        style={{
          outline: "none",
          border: "none",
          padding: "10px 12px",
          fontSize: "16px",
          backgroundColor: "wheat",
          color: "#333",
        }}
      >
        Clear All
      </button>
    </div>
  );
}
