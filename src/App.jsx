import { useState } from "react";

const defaultParts = [
  {
    nomorPart: "PRT-001",
    namaPart: "Filter Oli",
    stock: {
      RCK: 100,
      ServiceCar: 20,
      Sumedang: 15,
      Garut: 10,
    },
  },
];

export default function WarehouseApp() {
  const [role, setRole] = useState("admin");
  const [parts, setParts] = useState(defaultParts);
  const [nomorPart, setNomorPart] = useState("");
  const [namaPart, setNamaPart] = useState("");
  const [stockRCK, setStockRCK] = useState("");
  const [stockSC, setStockSC] = useState("");
  const [stockSDG, setStockSDG] = useState("");
  const [stockGRT, setStockGRT] = useState("");

  const addPart = () => {
    if (!nomorPart || !namaPart) return;
    const newPart = {
      nomorPart,
      namaPart,
      stock: {
        RCK: parseInt(stockRCK || 0),
        ServiceCar: parseInt(stockSC || 0),
        Sumedang: parseInt(stockSDG || 0),
        Garut: parseInt(stockGRT || 0),
      },
    };
    setParts([...parts, newPart]);
    setNomorPart("");
    setNamaPart("");
    setStockRCK("");
    setStockSC("");
    setStockSDG("");
    setStockGRT("");
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "800px", margin: "auto" }}>
      <h1>📦 Sistem Gudang Web</h1>

      <div style={{ marginBottom: "1rem" }}>
        <label>Login sebagai: </label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="admin">Admin</option>
          <option value="teknisi">Teknisi</option>
        </select>
      </div>

      {role === "admin" && (
        <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
          <h2>Tambah Data Part</h2>
          <input placeholder="Nomor Part" value={nomorPart} onChange={(e) => setNomorPart(e.target.value)} />
          <input placeholder="Nama Part" value={namaPart} onChange={(e) => setNamaPart(e.target.value)} />
          <input type="number" placeholder="Stock Awal RCK" value={stockRCK} onChange={(e) => setStockRCK(e.target.value)} />
          <input type="number" placeholder="Stock Service Car" value={stockSC} onChange={(e) => setStockSC(e.target.value)} />
          <input type="number" placeholder="Stock Sumedang" value={stockSDG} onChange={(e) => setStockSDG(e.target.value)} />
          <input type="number" placeholder="Stock Garut" value={stockGRT} onChange={(e) => setStockGRT(e.target.value)} />
          <button onClick={addPart}>Tambah Part</button>
        </div>
      )}

      <table border="1" cellPadding="5" style={{ width: "100%", fontSize: "0.9rem" }}>
        <thead>
          <tr>
            <th>Nomor Part</th>
            <th>Nama Part</th>
            <th>RCK</th>
            <th>Service Car</th>
            <th>Sumedang</th>
            <th>Garut</th>
          </tr>
        </thead>
        <tbody>
          {parts.map((part, idx) => (
            <tr key={idx}>
              <td>{part.nomorPart}</td>
              <td>{part.namaPart}</td>
              <td>{part.stock.RCK}</td>
              <td>{part.stock.ServiceCar}</td>
              <td>{part.stock.Sumedang}</td>
              <td>{part.stock.Garut}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
