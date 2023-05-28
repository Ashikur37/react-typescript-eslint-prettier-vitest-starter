import Card from '../components/Card/Card';
import SignupForm from '../components/SignupForm';

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-800">
        Hello world!
      </h1>
      <SignupForm />
      <Card
        name="Sydney"
        phone="111-111-1111"
        email="laith@hotmail.com"
        image={{
          url: 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
          alt: 'cute cat',
        }}
        favoured={false}
      />
    </div>
  );
}
