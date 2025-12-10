import AppointmentForm from "@/components/AppointmentForm";

export default function AppointmentPage() {
  return (
    <section className="py-16 px-4 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Prendre un rendez-vous
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <AppointmentForm />
      </div>
    </section>
  );
}
