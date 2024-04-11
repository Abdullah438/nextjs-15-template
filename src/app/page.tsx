import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <h1>Welcome to my website!</h1>
      <Image
        src='/favicon.ico'
        alt='A picture of me'
        width={200}
        height={200}
      />
      <p>
        My name is John Doe and I&apos;m a software engineer. I love building
        web applications with React and Next.js.
      </p>
    </main>
  );
}
