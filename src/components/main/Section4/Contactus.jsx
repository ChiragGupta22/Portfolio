import { useState, useEffect } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [data, setData] = useState([]);

  // Load data
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("messages"));
    if (saved) setData(saved);
  }, []);

  // Save data
  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(data));
  }, [data]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Fill all fields");
      return;
    }

    const newMsg = {
      id: Date.now(),
      ...form,
    };

    setData([newMsg, ...data]);

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleDelete = (id) => {
    const updated = data.filter((item) => item.id !== id);
    setData(updated);
  };

  return (
    <div className="px-5 md:px-20 py-20 bg-[#f8f9ff]" id="contactus">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
        Contact Me
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* FORM */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-lg hover:opacity-90">
              Send Message
            </button>
          </form>
        </div>

        {/* MESSAGES */}
        <div className="bg-white p-6 rounded-2xl shadow-lg max-h-[400px] overflow-y-auto">
          <h3 className="text-xl font-semibold mb-4">Messages</h3>

          {data.length === 0 ? (
            <p className="text-gray-500">No messages yet</p>
          ) : (
            data.map((item) => (
              <div
                key={item.id}
                className="border p-4 rounded-lg mb-3 flex justify-between"
              >
                <div>
                  <h4 className="font-bold">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.email}</p>
                  <p className="mt-1">{item.message}</p>
                </div>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
