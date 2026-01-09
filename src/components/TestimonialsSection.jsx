import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Arya",
        content: "Hani is an exceptional developer who consistently delivers high-quality code. His attention to detail in UI/UX is impressive.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Avery",
    },
    {
        name: "Saransh",
        content: "Working with Hani was a breeze. He took our complex requirements and turned them into a beautiful, functional product ahead of schedule.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jude",
    },
    {
        name: "Rahul",
        content: "Hani's contributions to our project were invaluable. He has a deep understanding of React and modern web architectures.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },
];

export const TestimonialsSection = () => {
    return (
        <section className="py-24 px-4 bg-secondary/5">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Kind Words from <span className="text-primary">Collaborators</span>
                    </h2>
                    <div className="h-1.5 w-20 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-card p-8 rounded-3xl border border-border/50 relative hover:border-primary/50 transition-all duration-300 group"
                        >
                            <Quote className="absolute top-6 right-8 text-primary/10 h-12 w-12 group-hover:text-primary/20 transition-colors" />
                            <p className="text-muted-foreground italic mb-6 relative z-10 leading-relaxed text-sm md:text-base group-hover:text-foreground transition-colors duration-500">"{t.content}"</p>
                            <div className="flex items-center gap-4">
                                <img src={t.image} alt={t.name} className="h-12 w-12 rounded-full border-2 border-primary/20 bg-secondary" />
                                <div>
                                    <h4 className="font-bold text-sm text-foreground">{t.name}</h4>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
