import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import "../styles/search.css";

export default function Search() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    async function fetchUsers() {
      if (!debouncedSearch.trim()) {
        setUsers([]);
        return;
      }
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.github.com/search/users?q=${debouncedSearch}&per_page=20`
        );
        const data = await response.json();
        setUsers(data.items || []);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, [debouncedSearch]);

  const hasQuery = debouncedSearch.trim() !== "";

  return (
    <div className="container">
      <h1>
        Delay<span>Search</span>
      </h1>
      <p className="subtitle">Debounced GitHub user search — results after you stop typing</p>

      <div className="search-wrapper">
        <span className="search-icon">&#128269;</span>
        <input
          className="search-input"
          type="text"
          placeholder="Search by username…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          autoFocus
        />
      </div>

      {loading && (
        <p className="status-text">
          <span className="spinner" />
          Searching…
        </p>
      )}

      {!loading && hasQuery && users.length === 0 && (
        <p className="status-text">No users found for &ldquo;{debouncedSearch}&rdquo;</p>
      )}

      {!loading && users.length > 0 && (
        <>
          <span className="result-count">{users.length} results</span>
          <ul className="user-list">
            {users.map((u) => (
              <li key={u.id}>
                <a
                  className="user-item"
                  href={u.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="user-avatar"
                    src={u.avatar_url}
                    alt={u.login}
                  />
                  <div className="user-info">
                    <span className="user-login">{u.login}</span>
                    <span className="user-link-label">github.com/{u.login}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
