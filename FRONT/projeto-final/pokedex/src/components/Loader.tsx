interface LoaderProps {
  message?: string;
  backgroundClassName?: string; 
}

export function Loader({
  message = "Carregando...",
  backgroundClassName = "",
}: LoaderProps) {
  return (
    <div
      className={`min-h-screen flex items-center justify-center ${backgroundClassName}`}
    >
      <div className="text-2xl font-bold text-slate-600 animate-pulse">
        {message}
      </div>
    </div>
  );
}