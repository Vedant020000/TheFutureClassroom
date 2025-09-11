import { Progress } from "@/components/ui/progress";

const ProgressSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Development Progress</h2>
          <Progress value={43} className="w-full h-3" />
          <p className="text-sm text-muted-foreground mt-2">43% Complete</p>
        </div>
        
        <div className="text-left space-y-4 text-muted-foreground">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;