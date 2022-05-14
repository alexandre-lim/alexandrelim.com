import { ROUTES } from '~/routes';
import { ListIcon } from '~/components/ListIcon';
import { LinkInternal } from '~/components/LinkInternal';

function buildList(values: Array<string | JSX.Element>) {
  return values.map((value, index) => (
    <li key={`${value}_${index}`}>
      <div className="flex gap-2">
        <ListIcon />
        {value}
      </div>
    </li>
  ));
}

export default function Index() {
  const educationList = [
    "M.S. in Software Engineering - IN'TECH (ESIEA Group) (2014-2018)",
    'Two-year university degree in Computer Science - Paris Descartes (2011-2014)',
  ];

  const hobbies = [
    'Gamification with Octalysis Prime',
    'Personal growth and entrepreneurship',
    'Neurosciences with The Huberman Lab Podcast',
    <LinkInternal to={ROUTES.books}>Reading nonfiction books</LinkInternal>,
  ];

  return (
    <>
      <div className="flex flex-col gap-16 max-w-2xl mx-auto">
        <section className="text-justify">
          <p className="mb-4">
            When I was a teenager, I was not fond of crowded or noisy environments. I preferred time alone, daydreaming,
            deep conversation, or hanging around in a small group. I initially chose the IT field because I thought I
            could avoid a lot of interactions with people. How wrong I was about that!
          </p>
          <p>
            Only in my early twenties did I find that I was an <strong>introvert.</strong> I didn't know about that
            word. It changed my life for the better. Now, I know I have a different way of interacting with people. I
            learned to appreciate my introverted traits and make them my strength.
          </p>
        </section>

        <section>
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-recursive-bold">Education</h2>
          </div>
          <ul className="pl-4 flex flex-col gap-2">{buildList(educationList)}</ul>
        </section>

        <section className="text-justify">
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-recursive-bold">Influence&nbsp;of&nbsp;sports</h2>
          </div>

          <p className="mb-4">
            I played Volleyball at fifteen for three years. Then I played Badminton for eight years. I was a timid,
            clumsy, and chubby boy. Sports transformed me, and it all started with Volleyball.
          </p>
          <p className="mb-4">
            I joined the club because it was near my home and someone from my school was there. What I didn't know was
            that it was strict training—the kind of hellish training to become a professional player.
          </p>

          <p className="mb-4">
            There I met "demon coaches". I had never trained so hard and never been yelled so hard. Looking back,
            joining the club was <span className="font-recursive-bold">one of the best choices I made in my life.</span>{' '}
            I'm glad I did not give up the first days. I learned so much from gaining control over my body and mind to
            values like <strong>self-respect</strong> and <strong>teamwork.</strong>
          </p>

          <p className="mb-4">
            After three years of battle, I stopped playing Volleyball, and I joined a Badminton club. It was also near
            my home, and I thought I could relax. Well, it didn't happen. I met another "demon coach", but strangely, I
            was glad this time. From my volleyball experiences, I learned to{' '}
            <strong>
              appreciate challenges, face discomfort, and put in the hard work because I knew I would improve.
            </strong>
          </p>

          <p>
            During these eleven years, I met different kinds of people. I won tournaments and championships but also
            lost a lot. If I could take one thing from these years:{' '}
            <strong>
              practice will never betray you. Hardship is guaranteed, but success is not. Choose your struggle well.
            </strong>
          </p>
        </section>

        <section className="text-justify">
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-recursive-bold">Values</h2>
          </div>

          <p className="mb-4">
            I make time for <strong>introspection.</strong> I try to focus on what matters to me and avoid most
            distractions by knowing myself. When I feel lost, I always return to <strong>my value system.</strong> It
            guides me through big decisions. It illuminates a path when all I can see is darkness.
          </p>

          <p className="mb-4 underline underline-offset-2">Here are some of the values I live by:</p>

          <h3 className="font-recursive-bold mb-2">Mastery</h3>
          <p className="mb-4">
            Moving toward mastery is one of the ways to a fulfilling life. Being focused on learning, practicing, and
            producing our best creates a feeling of deep satisfaction.
          </p>

          <h3 className="font-recursive-bold mb-2">Empathy</h3>
          <p className="mb-4">
            Empathy is the ability to connect with people and try our best to understand them. It's hard because we
            allow ourselves to be vulnerable and venture into unknown territory. It all begins with conveying the
            feeling of "I'm here. I hear you."
          </p>

          <h3 className="font-recursive-bold mb-2">Teamwork</h3>
          <p className="mb-4">
            "Self-made" is overrated. Great people or things are not born alone. A team gathering momentum can achieve
            what seems impossible. I like this African proverb: "If you want to go fast, go alone. If you want to go
            far, go together".
          </p>

          <h3 className="font-recursive-bold mb-2">Mentorship</h3>
          <p>
            When you're receiving, you have to give. What's magic is that by sharing, you're receiving. You have nothing
            to offer? Never forget that time is our most precious resource. Learn self-respect and use it well.
          </p>
        </section>

        <section className="text-justify">
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-recursive-bold">Anti-fragile&nbsp;identity</h2>
          </div>

          <p className="mb-4">
            During our lifetime, we have many identities. We often have multiple identities at once. The more we connect
            to an identity, the stronger we react when something threatens it and the greater the fall when we lose it.
          </p>

          <p>
            We could avoid that with an anti-fragile identity. Something anti-fragile thrives from chaos and adversity.
            So, I choose my core identity as a learner. <strong>I am a learner.</strong>
          </p>
        </section>

        <section className="text-justify">
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-recursive-bold">Personal&nbsp;growth</h2>
          </div>

          <p>
            Learning never ends. It's a life journey. The infinite amount of knowledge always humbles me. But only
            learning is just motion—wasted potential power. I always try to apply valuable things I learned in my
            everyday life. It could be by <LinkInternal to={ROUTES.blog}>writing</LinkInternal>, sharing my{' '}
            <LinkInternal to={ROUTES.courses}>course notes</LinkInternal>, or starting a project.{' '}
            <strong>Action pointed in the right direction makes all the difference.</strong>
          </p>
        </section>

        <section>
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-recursive-bold">Hobbies&nbsp;&&nbsp;Interests</h2>
          </div>
          <ul className="pl-4 flex flex-col gap-2">{buildList(hobbies)}</ul>
        </section>
      </div>
    </>
  );
}
