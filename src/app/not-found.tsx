import HomeButton from "@/components/home-button";

export default function NotFound() {
  return (
    <div className="bg-gradient-background flex min-h-screen items-center justify-center p-4">
      <div className="animate-fade-in w-full max-w-2xl space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="bg-clip-text text-9xl font-bold text-white">404</h1>
          <h2 className="text-shadow-primary-foreground text-3xl font-bold md:text-4xl">
            Oops! Page Not Found
          </h2>
          <p className="text-muted-foreground mx-auto max-w-md text-lg">
            Looks like you&apos;ve ventured into uncharted space. The page
            you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
        <HomeButton />
      </div>
    </div>
  );
}
