export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-8 mt-16">
      <div className="container text-center text-muted-foreground">
        <p>© {currentYear} Vijay. All Rights Reserved.</p>
        <p className="text-sm mt-2">
          Built with Next.js, TypeScript, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
