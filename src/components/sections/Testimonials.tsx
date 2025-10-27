const testimonials = [
  {
    quote:
      'Our corgi, Maple, has found her pack on Petgram. The breed-specific search made connecting with other herding pups effortless.',
    author: 'Maple & Jamie',
    role: 'Corgi Content Creators, Seattle'
  },
  {
    quote:
      'Between the auto-compressed videos and intuitive tagging, Petgram is the only platform we use at the sanctuary.',
    author: 'Haven Hill Sanctuary',
    role: 'Wildlife Rescue, Vermont'
  },
  {
    quote:
      'Our grooming studio books out weeks in advance thanks to Petgram’s share and notification features.',
    author: 'Paws & Co.',
    role: 'Pet Spa, Austin'
  }
];

export function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:px-10 lg:grid-cols-[1fr,0.9fr] lg:items-center">
        <div>
          <p className="font-display text-sm uppercase tracking-[0.5em] text-primary-600">Community voices</p>
          <h2 className="mt-4 font-display text-3xl text-bark sm:text-4xl">Trusted by pet lovers, shelters, and professionals.</h2>
          <p className="mt-4 text-lg text-bark/70">
            Petgram is more than a feed—it’s a compassionate ecosystem where stories spark advocacy, creativity, and real-world impact.
          </p>
        </div>
        <div className="space-y-6">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.author} className="rounded-3xl bg-primary-50 p-6">
              <blockquote className="text-lg text-bark/80">“{testimonial.quote}”</blockquote>
              <figcaption className="mt-4 font-semibold text-bark">
                {testimonial.author}
                <span className="block text-sm font-normal text-bark/60">{testimonial.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
