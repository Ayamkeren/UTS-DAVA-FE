import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Customer = () => {
  // State untuk menyimpan data customer
  const [customers, setCustomers] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newCustomer, setNewCustomer] = useState({
    id: "",
    name: "",
    email: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);

  // Fungsi untuk handle submit customer (tambah atau edit)
  const saveCustomer = () => {
    if (newCustomer.id && newCustomer.name && newCustomer.email) {
      if (editingIndex !== null) {
        // Update data customer
        const updatedCustomers = customers.map((customer, index) =>
          index === editingIndex ? newCustomer : customer
        );
        setCustomers(updatedCustomers);
        setEditingIndex(null);
      } else {
        // Tambah customer baru
        setCustomers([...customers, newCustomer]);
      }
      setNewCustomer({ id: "", name: "", email: "" });
      setIsFormOpen(false); // Tutup form setelah submit
    } else {
      alert("Please fill out all fields");
    }
  };

  // Fungsi untuk mengedit customer
  const editCustomer = (index) => {
    setEditingIndex(index);
    setNewCustomer(customers[index]);
    setIsFormOpen(true); // Buka form untuk mengedit data
  };

  // Fungsi untuk menghapus customer
  const deleteCustomer = (index) => {
    const filteredCustomers = customers.filter((_, i) => i !== index);
    setCustomers(filteredCustomers);
  };

  // Fungsi untuk membuka form
  const openForm = () => {
    setIsFormOpen(true);
    setNewCustomer({ id: "", name: "", email: "" });
    setEditingIndex(null);
  };

  // Fungsi untuk menutup form
  const closeForm = () => {
    setIsFormOpen(false);
    setNewCustomer({ id: "", name: "", email: "" });
    setEditingIndex(null);
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto mt-10">
        <h1 className="text-2xl font-bold text-center mb-5">
          Customer Management
        </h1>

        {/* Tombol untuk membuka form */}
        <button
          onClick={openForm}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 mb-5"
        >
          Add New Customer
        </button>

        {/* Tabel untuk menampilkan data customer */}
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4">Customer ID</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index} className="border-t">
                <td className="py-2 px-4 text-center">{customer.id}</td>
                <td className="py-2 px-4 text-center">{customer.name}</td>
                <td className="py-2 px-4 text-center">{customer.email}</td>
                <td className="py-2 px-4 text-center space-x-2">
                  <button
                    onClick={() => editCustomer(index)}
                    className="bg-yellow-400 text-white px-3 py-1 rounded-lg hover:bg-yellow-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteCustomer(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal popup untuk form input */}
        {isFormOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-bold mb-4">
                {editingIndex !== null ? "Edit Customer" : "Add New Customer"}
              </h2>
              <input
                type="text"
                placeholder="Customer ID"
                className="w-full border px-3 py-2 mb-3 rounded-lg"
                value={newCustomer.id}
                onChange={(e) =>
                  setNewCustomer({ ...newCustomer, id: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Customer Name"
                className="w-full border px-3 py-2 mb-3 rounded-lg"
                value={newCustomer.name}
                onChange={(e) =>
                  setNewCustomer({ ...newCustomer, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Customer Email"
                className="w-full border px-3 py-2 mb-3 rounded-lg"
                value={newCustomer.email}
                onChange={(e) =>
                  setNewCustomer({ ...newCustomer, email: e.target.value })
                }
              />
              <div className="flex justify-end space-x-3">
                <button
                  onClick={closeForm}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  onClick={saveCustomer}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  {editingIndex !== null ? "Update" : "Add"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Customer;
