export default function FooterSection() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 px-6 py-8 text-center text-sm text-zinc-600">
      <p>&copy; {new Date().getFullYear()} ValaShibbs. All rights reserved.</p>
    </footer>
  );
}
