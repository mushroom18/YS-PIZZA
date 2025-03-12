import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base =
    "inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors hover:bg-yellow-300 disabled:cursor-not-allowed";
  const styles = {
    primary: base + " px-4 py-3 md:py-4 md:px-6",
    small: base + " px-3 py-2 md:py-2.5 md:px-5 text-xs",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} to={to} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
