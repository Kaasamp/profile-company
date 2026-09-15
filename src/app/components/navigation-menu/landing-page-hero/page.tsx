export function LandingPageHero() {
    return (
        <section className="flex flex-1 w-full min-h-screen bg-blue-800 dark:bg-black items-center justify-center px-6 text-center pt-[100px]">
            <div className="container">
                <div>
                    <h1 className="font-mono text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Welcome SMK MVP ARS INTERNASIONAL
                    </h1>
                    <p className="
                        mx-auto
                        mt-6 
                        max-w-2xl 
                        text-base 
                        leading-7 
                        text-blue-100 
                        sm:text-lg">
                        SMK MVP ARS INTERNASIONAL is a leading educational institution dedicated to providing high-quality education and fostering a nurturing environment for students to thrive academically and personally.
                    </p>
                </div>
            </div>
        </section>
    );
}