import { useEffect, useState } from "react";
import { Company } from "./types";

export default function App() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.api
      .getCompanies()
      .then((data) => {
        setCompanies(data);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={styles.status}>Loading...</p>;
  if (error) return <p style={styles.status}>Error: {error}</p>;

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Companies & Employees</h1>
      <pre style={styles.pre}>{JSON.stringify(companies, null, 2)}</pre>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    fontFamily: "monospace",
    padding: "2rem",
    maxWidth: "800px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
  },
  pre: {
    background: "#1e1e1e",
    color: "#d4d4d4",
    padding: "1.5rem",
    borderRadius: "6px",
    overflow: "auto",
    fontSize: "0.875rem",
    lineHeight: "1.5",
  },
  status: {
    fontFamily: "monospace",
    padding: "2rem",
  },
};
