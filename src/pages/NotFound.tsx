import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <section className="py-32 md:py-48">
      <div className="container mx-auto px-6 text-center">
        <h1 className="font-display text-[150px] md:text-[200px] leading-none text-foreground animate-fade-up">
          404
        </h1>
        <p className="mt-4 font-display text-2xl md:text-3xl tracking-wider text-muted-foreground animate-fade-up animation-delay-100">
          PAGE NOT FOUND
        </p>
        <p className="mt-6 text-muted-foreground font-body max-w-md mx-auto animate-fade-up animation-delay-200">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="btn-secondary inline-flex items-center gap-2 mt-8 animate-fade-up animation-delay-300"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
