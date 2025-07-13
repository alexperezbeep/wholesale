export default function SellPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Request Your Cash Offer</h1>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="mt-1 w-full rounded border border-gray-300 p-2 shadow-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="mt-1 w-full rounded border border-gray-300 p-2 shadow-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              placeholder="(123) 456-7890"
              className="mt-1 w-full rounded border border-gray-300 p-2 shadow-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Property Address</label>
            <input
              type="text"
              placeholder="123 Main St, City, State"
              className="mt-1 w-full rounded border border-gray-300 p-2 shadow-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Any Repairs Needed?</label>
            <textarea
              placeholder="Briefly describe any damage or repairs needed"
              className="mt-1 w-full rounded border border-gray-300 p-2 shadow-sm"
              rows={3}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 rounded hover:bg-blue-700 transition"
          >
            Submit My Info
          </button>
        </form>
      </div>
    </div>
  );
}
