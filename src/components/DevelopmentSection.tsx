import { Badge } from "@/components/ui/badge";

const DevelopmentSection = () => {
  const mvpFeatures = [
    {
      title: "Realtime Lesson Cards",
      description: "Instant lesson generation that outputs a structured, editable card with objectives, materials, timings, and formative checks.",
      why: "Teachers get usable plans instead of generic text.",
      eta: "Q1 2024"
    },
    {
      title: "Student Context Importer",
      description: "Bring in a class roster or import CSVs; attach quick notes to student profiles. Use @studentName to surface relevant context in chat.",
      why: "Personalized suggestions without manual copy-paste.",
      eta: "Q1 2024"
    },
    {
      title: "Lesson Bank & Templates",
      description: "Save, tag, and reuse lesson templates; share within a school workspace.",
      why: "Cuts prep time and encourages sharing across colleagues.",
      eta: "Q2 2024"
    },
    {
      title: "Calendar Drag & Drop",
      description: "Drag lesson cards to calendar slots (day/week views) with conflict detection and export to common calendar formats.",
      why: "Schedules become living, editable objects.",
      eta: "Q2 2024"
    }
  ];

  const moonshots = [
    {
      title: "Adaptive Curriculum Engine",
      description: "Slate analyzes curriculum goals, class progress, and student signals to propose multi-week learning arcs that automatically adjust based on ongoing assessment.",
      status: "Research"
    },
    {
      title: "On-Device Assistants & Privacy Vault",
      description: "Sensitive student micro-context stays encrypted and, where possible, processed on-device / in a private enclave.",
      status: "Exploring"
    },
    {
      title: "Live Classroom Mirror",
      description: "Bring live class notes, timestamped observations, or short audio/video clips into a lesson's context.",
      status: "Early Build"
    },
    {
      title: "Teacher Collaboration Studio",
      description: "Real-time co-editing and threaded feedback on lesson plans, with role-based permissions for schools and districts.",
      status: "Planning"
    }
  ];

  return (
    <section className="py-24 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Currently Working On</h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl">
            We're turning Slate from a prototype into a classroom-grade assistant. The next phase is less about polishing buttons and more about building teacher-tools that feel magical — tools that understand context, preserve privacy, and scale across a teacher's day.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-bold mb-8 text-accent">MVP Features</h3>
            <div className="space-y-8">
              {mvpFeatures.map((feature, index) => (
                <div key={index} className="card-hover rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-semibold">{feature.title}</h4>
                    <Badge variant="secondary" className="ml-4">
                      {feature.eta}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-3 leading-relaxed">
                    {feature.description}
                  </p>
                  <p className="text-sm text-accent">
                    Why it matters: {feature.why}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-8 text-accent">Moonshots</h3>
            <div className="space-y-8">
              {moonshots.map((moonshot, index) => (
                <div key={index} className="card-hover rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-semibold">{moonshot.title}</h4>
                    <Badge variant="outline" className="ml-4">
                      {moonshot.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {moonshot.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-card rounded-xl border border-accent/20">
          <blockquote className="text-lg text-muted-foreground italic mb-4 leading-relaxed">
            "I used to spend Sunday nights drafting lessons. With Slate's lesson cards and student context, I finished planning for two weeks in one hour — and the AI suggested modifications that helped three students reach the learning goal."
          </blockquote>
          <cite className="text-sm text-muted-foreground/70">— Beta teacher</cite>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentSection;