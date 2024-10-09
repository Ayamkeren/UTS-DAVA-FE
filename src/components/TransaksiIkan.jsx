import React, { useState } from "react";
import Navbar from "./Navbar";

const TransaksiIkan = () => {
  const [paymentData, setPaymentData] = useState({
    totalAmount: "",
    paymentMethod: "credit-card",
    customerId: "",
  });

  const [receipt, setReceipt] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!paymentData.totalAmount || !paymentData.customerId) {
      alert("Please fill in all fields");
      return;
    }

    const newReceipt = {
      ...paymentData,
      totalAmount: parseFloat(paymentData.totalAmount).toFixed(2),
    };

    setReceipt(newReceipt);
    setPaymentData({
      totalAmount: "",
      paymentMethod: "credit-card",
      customerId: "",
    });
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold mb-5 text-black">
            Transaction
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Total Harga</label>
              <input
                type="number"
                name="totalAmount"
                value={paymentData.totalAmount}
                onChange={handleInputChange}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter total amount"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Payment Method</label>
              <select
                name="paymentMethod"
                value={paymentData.paymentMethod}
                onChange={handleInputChange}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="credit-card">Credit Card</option>
                <option value="bank-transfer">Bank Transfer</option>
                <option value="cash">Cash</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Customer ID</label>
              <input
                type="text"
                name="customerId"
                value={paymentData.customerId}
                onChange={handleInputChange}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter customer ID"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black hover:bg-gray-500 text-white p-2 rounded-md"
            >
              Submit Payment
            </button>
          </form>

          {receipt && (
            <div className="mt-6 bg-gray-100 p-4 rounded-md shadow-lg">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Payment Receipt
              </h2>
              <p className="text-gray-700">
                <strong>Total Amount:</strong> ${receipt.totalAmount}
              </p>
              <p className="text-gray-700">
                <strong>Payment Method:</strong> {receipt.paymentMethod}
              </p>
              <p className="text-gray-700">
                <strong>Customer ID:</strong> {receipt.customerId}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransaksiIkan;
