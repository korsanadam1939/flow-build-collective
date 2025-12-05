import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const LoadingSpinner = ({ className, size = "md" }: LoadingSpinnerProps) => {
  const dotSizes = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background relative overflow-hidden">
      {/* Animated code blocks background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        {/* Falling code blocks - left side */}
        <div className="absolute top-0 left-[10%] w-1 h-20 bg-primary rounded animate-code-fall" style={{ animationDelay: "0s", animationDuration: "3s" }}></div>
        <div className="absolute top-0 left-[20%] w-1 h-16 bg-primary/70 rounded animate-code-fall" style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}></div>
        <div className="absolute top-0 left-[30%] w-1 h-24 bg-primary/80 rounded animate-code-fall" style={{ animationDelay: "1s", animationDuration: "4s" }}></div>
        
        {/* Falling code blocks - center */}
        <div className="absolute top-0 left-[45%] w-1 h-18 bg-primary/60 rounded animate-code-fall" style={{ animationDelay: "0.3s", animationDuration: "3.2s" }}></div>
        <div className="absolute top-0 left-[55%] w-1 h-22 bg-primary rounded animate-code-fall" style={{ animationDelay: "1.2s", animationDuration: "3.8s" }}></div>
        
        {/* Falling code blocks - right side */}
        <div className="absolute top-0 right-[10%] w-1 h-20 bg-primary/70 rounded animate-code-fall" style={{ animationDelay: "0.7s", animationDuration: "3.3s" }}></div>
        <div className="absolute top-0 right-[20%] w-1 h-16 bg-primary rounded animate-code-fall" style={{ animationDelay: "1.5s", animationDuration: "4.2s" }}></div>
        <div className="absolute top-0 right-[30%] w-1 h-24 bg-primary/80 rounded animate-code-fall" style={{ animationDelay: "0.2s", animationDuration: "3.6s" }}></div>
        
        {/* Additional scattered blocks */}
        <div className="absolute top-0 left-[15%] w-1 h-14 bg-primary/50 rounded animate-code-fall" style={{ animationDelay: "2s", animationDuration: "3.9s" }}></div>
        <div className="absolute top-0 left-[65%] w-1 h-18 bg-primary/60 rounded animate-code-fall" style={{ animationDelay: "0.8s", animationDuration: "3.4s" }}></div>
        <div className="absolute top-0 left-[75%] w-1 h-20 bg-primary/70 rounded animate-code-fall" style={{ animationDelay: "1.8s", animationDuration: "4.1s" }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Terminal-style loading text */}
        <div className="font-mono text-sm mb-6 space-y-1">
          <div className="flex items-center gap-2 text-primary">
            <span>{'>'}</span>
            <span className="text-foreground">Loading</span>
            <span className="animate-pulse">_</span>
          </div>
        </div>

        {/* Simple bouncing dots */}
        <div className="flex gap-2">
          <div className={cn(dotSizes[size], "bg-primary rounded-full animate-bounce")} style={{ animationDelay: "0s" }}></div>
          <div className={cn(dotSizes[size], "bg-primary rounded-full animate-bounce")} style={{ animationDelay: "0.15s" }}></div>
          <div className={cn(dotSizes[size], "bg-primary rounded-full animate-bounce")} style={{ animationDelay: "0.3s" }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;