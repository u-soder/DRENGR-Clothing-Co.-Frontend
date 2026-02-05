import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | DRENGR Clothing Co.</title>
        <meta name="description" content="Learn about Drengr Clothing Co. - our story, mission, and commitment to modern streetwear culture." />
      </Helmet>

      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="font-display text-6xl md:text-8xl tracking-tight text-foreground animate-fade-up">
              THE DRENGR
              <br />
              <span className="text-outline">STORY</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <h2 className="font-display text-4xl md:text-5xl tracking-tight text-foreground mb-8">
                WE DON'T FOLLOW.
                <br />
                WE LEAD.
              </h2>
              <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
                <p>
                  DRENGR was born in the shadows of the city, where creativity meets rebellion. 
                  Our name comes from the Old Norse word for "warrior" — a symbol of strength, 
                  honor, and the relentless pursuit of excellence.
                </p>
                <p>
                  Every piece we create is a statement. We blend premium materials with cutting-edge 
                  design to produce streetwear that doesn't just follow trends — it sets them. 
                  Our collections are for those who refuse to be ordinary.
                </p>
                <p>
                  From the streets to the runway, DRENGR represents the fearless spirit of youth 
                  culture. We're not just a brand; we're a movement.
                </p>
              </div>
            </div>

            <div className="relative animate-fade-up animation-delay-200">
              <div className="aspect-square bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-[200px] text-muted/30">D</span>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 border border-border" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl md:text-5xl tracking-tight text-foreground mb-16 text-center animate-fade-up">
            OUR VALUES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                number: "01",
                title: "Quality",
                description: "Premium materials and craftsmanship in every piece. No compromises.",
              },
              {
                number: "02",
                title: "Authenticity",
                description: "Real designs for real people. Born from the culture, not a boardroom.",
              },
              {
                number: "03",
                title: "Innovation",
                description: "Pushing boundaries and challenging norms. Tomorrow's streetwear, today.",
              },
            ].map((value, index) => (
              <div
                key={value.number}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="font-display text-6xl text-muted/50">{value.number}</span>
                <h3 className="mt-4 font-display text-2xl tracking-wider text-foreground">
                  {value.title}
                </h3>
                <p className="mt-4 text-muted-foreground font-body leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "2025", label: "Founded" },
              { value: "10K+", label: "Customers" },
              { value: "12", label: "Countries" },
              { value: "100%", label: "Authentic" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="font-display text-4xl md:text-5xl text-foreground">
                  {stat.value}
                </span>
                <p className="mt-2 text-muted-foreground font-body text-sm tracking-widest uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-6xl tracking-tight text-foreground animate-fade-up">
            READY TO JOIN?
          </h2>
          <p className="mt-6 text-muted-foreground font-body text-lg max-w-xl mx-auto animate-fade-up animation-delay-100">
            Explore our collection and become part of the DRENGR movement.
          </p>
          <a
            href="/shop"
            className="btn-primary inline-flex items-center gap-2 mt-8 animate-fade-up animation-delay-200"
          >
            Shop Collection
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
