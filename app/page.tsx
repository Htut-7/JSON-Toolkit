import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark: bg-gray-950">
      <Navbar />
      <main className="flex-1">
        <h2>this is the home page</h2>
      </main>
      <Footer/>
    </div>
  );
}
