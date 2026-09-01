import usePageLocalization from "../../utils/usePageLocalization";
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";

const SPREADSHEET_ID = "1Pxlyh4YM66x2HSW7u-yvL6waiREQrCCh";

const SHEETS = {
  sla: "SLA",
  performance: "APPLICATION",
  inspection: "INSPECTION"
};

const styles = {
  container: {
    padding: "24px",
    background: "#f4f6f9"
  },

  card: {
    background: "#ffffff",
    marginBottom: "24px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.06)"
  },

  sectionHeaderWrapper: {
    marginTop: "38px",
    marginBottom: "20px"
  },

  sectionHeader: {
    fontSize: "17px",
    fontWeight: "700",
    color: "#012970",
    borderLeft: "4px solid #FE7A51",
    paddingLeft: "12px",
    margin: "0",
    lineHeight: "1.4"
  },

  tableWrapper: {
    overflowX: "auto"
  },

  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: "0"
  },

  thead: {
    background: "#012970",
    color: "#fff"
  },

  th: {
    padding: "14px 12px",
    fontSize: "13px",
    fontWeight: "600",
    textAlign: "center",
    border: "none",
    position: "relative"
  },

  thFirst: {
    borderTopLeftRadius: "8px"
  },

  thLast: {
    borderTopRightRadius: "8px"
  },

  tr: {
    background: "#f9fafc",
    boxShadow: "0 2px 6px rgba(0,0,0,0.04)"
  },

  td: {
    padding: "14px 12px",
    fontSize: "14px",
    color: "#2c3e50",
    border: "none",
    borderBottom: "1px solid #e6eaf0",
    textAlign: "center",
    verticalAlign: "middle",
    position: "relative"
  },

  tdFirst: {
    borderTopLeftRadius: "8px",
    borderBottomLeftRadius: "8px",
    fontWeight: "500"
  },

  tdLast: {
    borderTopRightRadius: "8px",
    borderBottomRightRadius: "8px"
  },

  thDivider: {
    borderRight: "1px solid rgba(255,255,255,0.2)"
  },

  tdDivider: {
    borderRight: "1px solid #e6eaf0"
  },

  filterContainer: {
    display: "grid",
    gap: "16px",
    marginBottom: "24px",
    width: "100%"
  },

  filterGroup: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },

  label: {
    fontSize: "13px",
    fontWeight: "600",
    marginBottom: "6px",
    color: "#34495e"
  },

  selectWrapper: {
    position: "relative",
    width: "100%"
  },

  select: {
    width: "100%",
    padding: "10px 14px",
    borderRadius: "8px",
    border: "1px solid #dfe3e8",
    background: "#fff",
    fontSize: "14px",
    color: "#2c3e50",
    outline: "none",
    cursor: "pointer",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    appearance: "none"
  },

  selectFocus: {
    border: "1px solid #012970",
    boxShadow: "0 0 0 2px rgba(1,41,112,0.1)"
  },

  arrow: {
    position: "absolute",
    right: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    pointerEvents: "none",
    fontSize: "12px",
    color: "#666"
  },

  resetButton: {
    padding: "10px 16px",
    borderRadius: "8px",
    border: "1px solid #dfe3e8",
    background: "#FE7A51",
    color: "#FFFFFF",
    fontSize: "14px",
    cursor: "pointer",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    alignSelf: "flex-end",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.2s ease"
  },

  resetButtonHover: {
    background: "#012970",
    color: "#fff",
    border: "1px solid #012970"
  },

  loaderWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 0"
  },

  spinner: {
    width: "40px",
    height: "40px",
    border: "4px solid #e6eaf0",
    borderTop: "4px solid #012970",
    borderRadius: "50%",
    animation: "spin 1s linear infinite"
  },

  loadingText: {
    marginTop: "12px",
    fontSize: "14px",
    color: "#555",
    textAlign: "center"
  },

  dropdownMenu: {
    position: "absolute",
    top: "calc(100% + 4px)",
    left: 0,
    right: 0,
    background: "#fff",
    border: "1px solid #dfe3e8",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    maxHeight: "220px",
    overflowY: "auto",
    zIndex: 100,
    listStyle: "none",
    padding: "4px 0",
    margin: 0
  },

  dropdownItem: {
    padding: "10px 14px",
    fontSize: "14px",
    color: "#2c3e50",
    cursor: "pointer",
    background: "transparent"
  },

  dataNote: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "12px",
    marginBottom: "32px",
    padding: "12px 16px",
    background: "linear-gradient(90deg, rgba(254,122,81,0.08) 0%, rgba(1,41,112,0.06) 100%)",
    borderLeft: "4px solid #FE7A51",
    borderRadius: "8px",
    fontSize: "13px",
    color: "#34495e",
    lineHeight: "1.5"
  },

  dataNoteIcon: {
    flexShrink: 0,
    width: "18px",
    height: "18px",
    color: "#FE7A51"
  },

  dataNoteHighlight: {
    color: "#012970",
    fontWeight: 600
  },

};

const fetchSheet = async (sheetName, query = "") => {
  const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:json&headers=1&sheet=${sheetName}${query ? `&tq=${query}` : ""}`;
  const res = await fetch(url);
  const text = await res.text();
  const json = JSON.parse(text.substring(47).slice(0, -2));
  return json.table?.rows || [];
};

const buildWhereClause = (activeFilters, dateFrom = "", dateTo = "") => {
  const conditions = [];
  if (activeFilters.district !== "ALL") conditions.push(`A='${activeFilters.district}'`);
  if (activeFilters.ulb !== "ALL") conditions.push(`B='${activeFilters.ulb}'`);
  if (activeFilters.service !== "ALL") conditions.push(`C='${activeFilters.service}'`);
  if (dateFrom) conditions.push(`O >= date '${dateFrom}'`);
  if (dateTo) conditions.push(`O <= date '${dateTo}'`);
  return conditions.length > 0 ? " where " + conditions.join(" and ") : "";
};

const extractOptions = (rows) => {
  const districts = [];
  const ulbs = [];
  const services = [];
  rows.forEach(r => {
    if (r.c[0]?.v) districts.push(r.c[0].v);
    if (r.c[1]?.v) ulbs.push(r.c[1].v);
    if (r.c[2]?.v) services.push(r.c[2].v);
  });
  return {
    districts: [...new Set(districts)],
    ulbs: [...new Set(ulbs)],
    services: [...new Set(services)]
  };
};

const aggregateTable2 = (rows) => {
  const map = new Map();
  rows.forEach(row => {
    if (!map.has(row.service)) {
      map.set(row.service, { ...row, _count: 1 });
    } else {
      const e = map.get(row.service);
      e.received += row.received;
      e.processed += row.processed;
      e.approved += row.approved;
      e.pending += row.pending;
      e.withinCount += row.withinCount;
      e.median += row.median;
      e.avg += row.avg;
      e.min = Math.min(e.min, row.min);
      e.max = Math.max(e.max, row.max);
      e.fee += row.fee;
      e._count += 1;
    }
  });
  return [...map.values()].map(row => ({
    service: row.service,
    received: row.received,
    processed: row.processed,
    approved: row.approved,
    pending: row.pending,
    withinCount: row.withinCount,
    withinPct: row.approved > 0 ? +((row.withinCount / row.approved) * 100).toFixed(1) : 0,
    median: +(row.median / row._count).toFixed(1),
    avg: +(row.avg / row._count).toFixed(1),
    min: row.min,
    max: row.max,
    fee: Math.round(row.fee / row._count)
  }));
};

const aggregateTable3 = (rows) => {
  const map = new Map();
  rows.forEach(row => {
    if (!map.has(row.service)) {
      map.set(row.service, { ...row });
    } else {
      const e = map.get(row.service);
      e.required += row.required;
      e.completed += row.completed;
      e.yetToConduct += row.yetToConduct;
      e.withinTime += row.withinTime;
      e.afterTimeline += row.afterTimeline;
      e.selfCert += row.selfCert;
      e.thirdParty += row.thirdParty;
      e.within24h += row.within24h;
      e.after24h += row.after24h;
    }
  });
  return [...map.values()];
};

const renderTable = (headers, rows) => (
  <div style={styles.card}>
    <div style={styles.tableWrapper}>
      <table style={styles.table}>
        <thead style={styles.thead}>
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                style={{
                  ...styles.th,
                  ...(i === 0 ? styles.thFirst : {}),
                  ...(i === headers.length - 1 ? styles.thLast : {}),
                  ...(i !== headers.length - 1 ? styles.thDivider : {})
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td
                colSpan={headers.length}
                style={{
                  ...styles.td,
                  textAlign: "center",
                  padding: "20px",
                  color: "#888",
                  fontStyle: "italic"
                }}
              >
                No data available
              </td>
            </tr>
          ) : (
            rows.map((row, i) => (
              <tr
                key={i}
                style={styles.tr}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#eef2f7")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#f9fafc")}
              >
                {row.map((cell, j) => (
                  <td
                    key={j}
                    style={{
                      ...styles.td,
                      ...(j === 0 ? styles.tdFirst : {}),
                      ...(j === row.length - 1 ? styles.tdLast : {}),
                      ...(j !== row.length - 1 ? styles.tdDivider : {})
                    }}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  </div>
);

const renderSLATable = (headers, rows) => {
  const groups = [];
  for (let i = 0; i < rows.length; i += 3) {
    groups.push([rows[i], rows[i + 1] || null, rows[i + 2] || null]);
  }

  return (
    <div style={styles.card}>
      <div style={styles.tableWrapper}>
        <table style={{ ...styles.table, tableLayout: "fixed" }}>
          <colgroup>
            <col style={{ width: "20.67%" }} />
            <col style={{ width: "13%" }} />
            <col style={{ width: "20.67%" }} />
            <col style={{ width: "13%" }} />
            <col style={{ width: "20.66%" }} />
            <col style={{ width: "12%" }} />
          </colgroup>
          <thead style={styles.thead}>
            <tr>
              <th style={{ ...styles.th, ...styles.thFirst, ...styles.thDivider, textAlign: "left", paddingLeft: "20px" }}>{headers[0]}</th>
              <th style={{ ...styles.th, borderRight: "3px solid rgba(255,255,255,0.4)" }}>{headers[1]}</th>
              <th style={{ ...styles.th, ...styles.thDivider, textAlign: "left", paddingLeft: "20px" }}>{headers[0]}</th>
              <th style={{ ...styles.th, borderRight: "3px solid rgba(255,255,255,0.4)" }}>{headers[1]}</th>
              <th style={{ ...styles.th, ...styles.thDivider, textAlign: "left", paddingLeft: "20px" }}>{headers[0]}</th>
              <th style={{ ...styles.th, ...styles.thLast }}>{headers[1]}</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ ...styles.td, textAlign: "center", padding: "20px", color: "#888", fontStyle: "italic" }}>
                  No data available
                </td>
              </tr>
            ) : (
              groups.map((group, i) => (
                <tr
                  key={i}
                  style={styles.tr}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#eef2f7")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#f9fafc")}
                >
                  <td style={{ ...styles.td, ...styles.tdFirst, ...styles.tdDivider, borderBottom: "1px solid #e6eaf0", textAlign: "left", paddingLeft: "20px" }}>{group[0][0]}</td>
                  <td style={{ ...styles.td, borderRight: "3px solid #dde4f0", borderBottom: "1px solid #e6eaf0" }}>{group[0][1]}</td>
                  <td style={{ ...styles.td, ...styles.tdDivider, borderBottom: "1px solid #e6eaf0", textAlign: "left", paddingLeft: "20px" }}>{group[1] ? group[1][0] : ""}</td>
                  <td style={{ ...styles.td, borderRight: "3px solid #dde4f0", borderBottom: "1px solid #e6eaf0" }}>{group[1] ? group[1][1] : ""}</td>
                  <td style={{ ...styles.td, ...styles.tdDivider, borderBottom: "1px solid #e6eaf0", textAlign: "left", paddingLeft: "20px" }}>{group[2] ? group[2][0] : ""}</td>
                  <td style={{ ...styles.td, ...styles.tdLast, borderBottom: "1px solid #e6eaf0" }}>{group[2] ? group[2][1] : ""}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Loader = () => (
  <div style={styles.loaderWrapper}>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={styles.spinner}></div>
      <div style={styles.loadingText}>Loading data...</div>
    </div>
  </div>
);


const SectionHeader = ({ title, noTopMargin }) => (
  <div style={{ ...styles.sectionHeaderWrapper, ...(noTopMargin ? { marginTop: 0 } : {}) }}>
    <h3 style={styles.sectionHeader}>{title}</h3>
  </div>
);

const FilterSelect = ({ label, value, onChange, options }) => {
  const [focus, setFocus] = useState(false);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const wrapperRef = useRef(null);

  const displayValue = value === "ALL" ? "All" : value;

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
        setFocus(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const select = (v) => {
    onChange({ target: { value: v } });
    setOpen(false);
    setQuery("");
  };

  const q = query.trim().toLowerCase();
  const filtered = q
    ? options.filter((opt) => String(opt).toLowerCase().includes(q))
    : options;
  const allMatches = !q || "all".includes(q);

  return (
    <div style={styles.filterGroup} ref={wrapperRef}>
      <label style={styles.label}>{label}</label>
      <div style={styles.selectWrapper}>
        <input
          type="text"
          value={open ? query : displayValue}
          placeholder={open ? displayValue : ""}
          onChange={(e) => { setQuery(e.target.value); if (!open) setOpen(true); }}
          onFocus={() => { setFocus(true); setOpen(true); }}
          onBlur={() => setFocus(false)}
          style={{ ...styles.select, ...(focus ? styles.selectFocus : {}), paddingRight: "32px" }}
        />
        <span style={styles.arrow}>▼</span>
        {open && (
          <ul style={styles.dropdownMenu}>
            {allMatches && (
              <li
                style={{
                  ...styles.dropdownItem,
                  ...(value === "ALL" ? { background: "#eef2f7", fontWeight: 600 } : {})
                }}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => select("ALL")}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#eef2f7")}
                onMouseLeave={(e) => (e.currentTarget.style.background = value === "ALL" ? "#eef2f7" : "transparent")}
              >
                All
              </li>
            )}
            {filtered.length === 0 && !allMatches ? (
              <li style={{ ...styles.dropdownItem, color: "#888", fontStyle: "italic", cursor: "default" }}>
                No matches
              </li>
            ) : (
              filtered.map((opt) => (
                <li
                  key={opt}
                  style={{
                    ...styles.dropdownItem,
                    ...(value === opt ? { background: "#eef2f7", fontWeight: 600 } : {})
                  }}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => select(opt)}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#eef2f7")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = value === opt ? "#eef2f7" : "transparent")}
                >
                  {opt}
                </li>
              ))
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

const ResetButton = ({ onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      onClick={onClick}
      style={{ ...styles.resetButton, ...(hover ? styles.resetButtonHover : {}) }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      Reset
    </button>
  );
};

const DateInput = ({ label, value, onChange }) => {
  const isoToDisplay = (iso) => {
    if (!iso) return "";
    const [y, m, d] = iso.split("-");
    return `${d}/${m}/${y}`;
  };

  const [display, setDisplay] = useState(isoToDisplay(value));

  useEffect(() => {
    setDisplay(isoToDisplay(value));
  }, [value]);

  const handleTextChange = (e) => {
    const raw = e.target.value.replace(/[^\d]/g, "").slice(0, 8);
    let formatted = raw;
    if (raw.length > 4) {
      formatted = `${raw.slice(0, 2)}/${raw.slice(2, 4)}/${raw.slice(4)}`;
    } else if (raw.length > 2) {
      formatted = `${raw.slice(0, 2)}/${raw.slice(2)}`;
    }
    setDisplay(formatted);
    if (raw.length === 8) {
      onChange(`${raw.slice(4)}-${raw.slice(2, 4)}-${raw.slice(0, 2)}`);
    } else {
      onChange("");
    }
  };

  const handlePickerChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div style={styles.filterGroup}>
      <label style={styles.label}>{label}</label>
      <div style={{ position: "relative" }}>
        <input
          type="text"
          placeholder="DD/MM/YYYY"
          value={display}
          onChange={handleTextChange}
          style={{ ...styles.select, paddingRight: "36px" }}
          maxLength={10}
        />
        <div style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "18px",
          height: "18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <input
            type="date"
            value={value}
            onChange={handlePickerChange}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              opacity: 0,
              cursor: "pointer",
              zIndex: 2,
              colorScheme: "light"
            }}
            tabIndex={-1}
          />
          <svg
            style={{ pointerEvents: "none", position: "relative", zIndex: 1, display: "block" }}
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#888"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const FilterRow = ({ filters, setFilters, options, isMobile }) => (
  <div
    style={{
      ...styles.filterContainer,
      gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)"
    }}
  >
    <FilterSelect
      label="District"
      value={filters.district}
      onChange={(e) => { const v = e.target.value; setFilters(f => ({ ...f, district: v })); }}
      options={options.districts}
    />
    <FilterSelect
      label="ULB"
      value={filters.ulb}
      onChange={(e) => { const v = e.target.value; setFilters(f => ({ ...f, ulb: v })); }}
      options={options.ulbs}
    />
    <FilterSelect
      label="Service"
      value={filters.service}
      onChange={(e) => { const v = e.target.value; setFilters(f => ({ ...f, service: v })); }}
      options={options.services}
    />
    <ResetButton onClick={() => setFilters({ district: "ALL", ulb: "ALL", service: "ALL" })} />
  </div>
);

const EMPTY_FILTERS = { district: "ALL", ulb: "ALL", service: "ALL" };
const EMPTY_OPTIONS = { districts: [], ulbs: [], services: [] };

const EODBDashboard = () => {
  const language = useSelector((state) => state.localization.language);
  const t = usePageLocalization(language, "eodbdashboard");

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const [slaData, setSlaData] = useState([]);
  const [loadingSla, setLoadingSla] = useState(false);

  const [table2Data, setTable2Data] = useState([]);
  const [filters2, setFilters2] = useState({ ...EMPTY_FILTERS });
  const [options2, setOptions2] = useState(EMPTY_OPTIONS);
  const [loading2, setLoading2] = useState(false);

  const [table3Data, setTable3Data] = useState([]);
  const [filters3, setFilters3] = useState(EMPTY_FILTERS);
  const [options3, setOptions3] = useState(EMPTY_OPTIONS);
  const [loading3, setLoading3] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  useEffect(() => {
    const load = async () => {
      try {
        setLoadingSla(true);
        const rows = await fetchSheet(SHEETS.sla);
        setSlaData(rows.map(r => ({
          service: r.c[0]?.v || "",
          timeline: r.c[1]?.v || ""
        })));
      } catch (e) {
        console.error("SLA fetch error", e);
      } finally {
        setLoadingSla(false);
      }
    };
    load();
  }, []);

  useEffect(() => {
    const loadOptions = async () => {
      try {
        const rows = await fetchSheet(SHEETS.performance);
        setOptions2(extractOptions(rows));
      } catch (e) {
        console.error("Options2 fetch error", e);
      }
    };
    loadOptions();
  }, []);

  useEffect(() => {
    const loadOptions = async () => {
      try {
        const rows = await fetchSheet(SHEETS.inspection);
        setOptions3(extractOptions(rows));
      } catch (e) {
        console.error("Options3 fetch error", e);
      }
    };
    loadOptions();
  }, []);

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        setLoading2(true);
        const query = encodeURIComponent(
          `select A,B,C,D,E,F,G,H,I,J,K,L,M,N${buildWhereClause(filters2)}`
        );
        const rows = await fetchSheet(SHEETS.performance, query);
        setTable2Data(aggregateTable2(rows.map(r => ({
          service: r.c[2]?.v || "",
          received: Number(r.c[3]?.v) || 0,
          processed: Number(r.c[4]?.v) || 0,
          approved: Number(r.c[5]?.v) || 0,
          pending: Number(r.c[6]?.v) || 0,
          withinCount: Number(r.c[7]?.v) || 0,
          withinPct: Number(r.c[8]?.v) || 0,
          median: Number(r.c[9]?.v) || 0,
          avg: Number(r.c[10]?.v) || 0,
          min: Number(r.c[11]?.v) || 0,
          max: Number(r.c[12]?.v) || 0,
          fee: Number(r.c[13]?.v) || 0
        }))));
      } catch (e) {
        console.error("Table2 fetch error", e);
      } finally {
        setLoading2(false);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [filters2]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        setLoading3(true);
        const query = encodeURIComponent(
          `select A,B,C,D,E,F,G,H,I,J,K,L${buildWhereClause(filters3)}`
        );
        const rows = await fetchSheet(SHEETS.inspection, query);
        setTable3Data(aggregateTable3(rows.map(r => ({
          service: r.c[2]?.v || "",
          required: Number(r.c[3]?.v) || 0,
          completed: Number(r.c[4]?.v) || 0,
          yetToConduct: Number(r.c[5]?.v) || 0,
          withinTime: Number(r.c[6]?.v) || 0,
          afterTimeline: Number(r.c[7]?.v) || 0,
          selfCert: Number(r.c[8]?.v) || 0,
          thirdParty: Number(r.c[9]?.v) || 0,
          within24h: Number(r.c[10]?.v) || 0,
          after24h: Number(r.c[11]?.v) || 0
        }))));
      } catch (e) {
        console.error("Table3 fetch error", e);
      } finally {
        setLoading3(false);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [filters3]);

  const slaHeaders = [t.nameOfService, t.ortpsTimeline];
  const slaRows = slaData.map(d => [d.service, d.timeline]);

  const section2Headers = [
    t.slNo,
    t.nameOfService,
    t.appReceived,
    t.appProcessed,
    t.appApproved,
    t.appPending,
    t.approvedWithinTimelineCount,
    t.approvedWithinTimelinePct,
    t.medianTime,
    t.avgTimeDays,
    t.minTimeDays,
    t.maxTimeDays,
    t.avgFee
  ];

  const section2Rows = table2Data.map((d, i) => [
    i + 1, d.service, d.received, d.processed, d.approved,
    d.pending, d.withinCount, d.withinPct, d.median,
    d.avg, d.min, d.max, d.fee
  ]);

  const section3Headers = [
    t.slNo,
    t.nameOfService,
    t.inspectionsRequired,
    t.inspectionsCompleted,
    t.inspectionsYetToConduct,
    t.completedWithinTime,
    t.completedAfterTimeline,
    t.avoidedSelfCert,
    t.avoidedThirdParty,
    t.reportsWithin24h,
    t.reportsAfter24h
  ];

  const section3Rows = table3Data.map((d, i) => [
    i + 1, d.service, d.required, d.completed, d.yetToConduct,
    d.withinTime, d.afterTimeline, "N/A", "N/A",
    d.withinTime, d.afterTimeline
  ]);

  return (
    <div className="container">
      <header className="page-header page-header-dark bg-gradient-primary-to-secondary">
        <div className="container-fluid">
          <div className="page-header-content">
            <h1 className="page-header-title" style={{ transform: "translateX(-30px)" }}>
              <div className="page-header-icon"><i data-feather="activity"></i></div>
              {t.title}
            </h1>
          </div>
        </div>
      </header>

      <SectionHeader title={t.slaTimelinesTitle} noTopMargin />
      {loadingSla ? <Loader /> : renderSLATable(slaHeaders, slaRows)}

      <SectionHeader title={t.performanceOverviewTitle} />
      <div style={{ ...styles.filterContainer, gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)" }}>
        <FilterSelect
          label="District"
          value={filters2.district}
          onChange={(e) => { const v = e.target.value; setFilters2(f => ({ ...f, district: v })); }}
          options={options2.districts}
        />
        <FilterSelect
          label="ULB"
          value={filters2.ulb}
          onChange={(e) => { const v = e.target.value; setFilters2(f => ({ ...f, ulb: v })); }}
          options={options2.ulbs}
        />
        <FilterSelect
          label="Service"
          value={filters2.service}
          onChange={(e) => { const v = e.target.value; setFilters2(f => ({ ...f, service: v })); }}
          options={options2.services}
        />
        <ResetButton onClick={() => setFilters2({ ...EMPTY_FILTERS })} />
      </div>
      {loading2 ? <Loader /> : renderTable(section2Headers, section2Rows)}

      <SectionHeader title={t.inspectionComplianceTitle} />
      <FilterRow filters={filters3} setFilters={setFilters3} options={options3} isMobile={isMobile} />
      {loading3 ? <Loader /> : renderTable(section3Headers, section3Rows)}

      <div style={styles.dataNote}>
        <svg
          style={styles.dataNoteIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
        <span>
          <span style={styles.dataNoteHighlight}>{t.noteLabel}</span> {t.dataNotePrefix}{" "}
          <span style={styles.dataNoteHighlight}>{t.dataStartDate}</span> {t.dataNoteBetween}{" "}
          <span style={styles.dataNoteHighlight}>
            {new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" })}
          </span>
          {t.dataNoteSuffix ? ` ${t.dataNoteSuffix}` : ""}.
        </span>
      </div>
    </div>
  );
};

export default EODBDashboard;
