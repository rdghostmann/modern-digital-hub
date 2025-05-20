// Two blog posts for each category
export const blogPosts = [
  // Movies
  {
    title: "10 Mind-Blowing Movie Endings Explained",
    excerpt: "Dive into the most shocking movie endings and what they really mean.",
    content: `
      <p>Not every great movie gets the attention it deserves. Here are ten hidden gems across genres that deserve your time and appreciation.</p>
      <ul>
        <li><strong>1. Coherence</strong> – A sci-fi thriller that bends your mind without special effects.</li>
        <li><strong>2. The Fall</strong> – Visually stunning and emotionally powerful.</li>
        <li><strong>3. Take Shelter</strong> – A psychological drama with a powerhouse performance.</li>
        <li><strong>4. The Invitation</strong> – A suspenseful slow burn worth the wait.</li>
        <li><strong>5. Sing Street</strong> – A heartwarming musical coming-of-age story.</li>
      </ul>
    `,
    date: new Date("2025-05-12"),
    author: "Jane Smith",
    category: "Movies",
    image: "/placeholder-movie.png",
  },
  {
    title: "Classic Movie Twists That Changed Cinema",
    excerpt: "A look at the most influential movie twists ever.",
    content: `
      <p>Some movie twists are so powerful they change the way we see the entire film. Here are a few that made history.</p>
      <ul>
        <li><strong>1. The Sixth Sense</strong> – The unforgettable 'I see dead people' reveal.</li>
        <li><strong>2. Fight Club</strong> – When the narrator and Tyler Durden are the same person.</li>
        <li><strong>3. The Usual Suspects</strong> – The true identity of Keyser Söze.</li>
        <li><strong>4. Oldboy</strong> – A shocking family secret.</li>
        <li><strong>5. Psycho</strong> – The real story behind Norman Bates.</li>
      </ul>
    `,
    date: new Date("2025-05-13"),
    author: "Michael Lee",
    category: "Movies",
    image: "/placeholder-movie2.png",
  },
  // Music
  {
    title: "The Evolution of Music Videos in 2025",
    excerpt: "Explore how music videos have transformed with new tech and trends.",
    content: `
      <p>Music videos have come a long way from simple band performances to immersive visual experiences.</p>
      <ul>
        <li><strong>1. Virtual Reality</strong> – Artists are now creating VR music videos for deeper engagement.</li>
        <li><strong>2. Interactive Videos</strong> – Fans can choose storylines and endings.</li>
        <li><strong>3. Animation & CGI</strong> – Pushing creative boundaries with technology.</li>
        <li><strong>4. Social Media Premieres</strong> – TikTok and Instagram as launchpads.</li>
        <li><strong>5. Collaborations</strong> – Musicians and filmmakers working together for unique visions.</li>
      </ul>
    `,
    date: new Date("2025-05-08"),
    author: "Alex Johnson",
    category: "Music",
    image: "/placeholder-music.png",
  },
  {
    title: "How Streaming Changed the Music Industry",
    excerpt: "The impact of streaming platforms on artists and fans.",
    content: `
      <p>Streaming has revolutionized music consumption, giving artists global reach and fans endless choice.</p>
      <ul>
        <li><strong>1. Accessibility</strong> – Millions of songs at your fingertips.</li>
        <li><strong>2. Revenue Models</strong> – Subscription vs. ad-supported listening.</li>
        <li><strong>3. Data & Discovery</strong> – Algorithms that help you find new favorites.</li>
        <li><strong>4. Independent Artists</strong> – Easier distribution for everyone.</li>
        <li><strong>5. Playlists</strong> – The new radio.</li>
      </ul>
    `,
    date: new Date("2025-05-09"),
    author: "Priya Patel",
    category: "Music",
    image: "/placeholder-music2.png",
  },
  // TV Shows
  {
    title: "Top 10 Must-Watch TV Shows This Year",
    excerpt: "From thrillers to comedies, check out the most binge-worthy shows of 2025.",
    content: `
      <p>This year's TV lineup is packed with surprises. Here are the top picks you shouldn't miss.</p>
      <ul>
        <li><strong>1. The Last Stand</strong> – Post-apocalyptic drama at its best.</li>
        <li><strong>2. Laugh Track</strong> – A comedy that breaks the fourth wall.</li>
        <li><strong>3. Quantum Leap</strong> – Sci-fi with a twist.</li>
        <li><strong>4. Family Ties</strong> – Heartwarming stories for all ages.</li>
        <li><strong>5. True Crime Files</strong> – Addictive mysteries based on real events.</li>
      </ul>
    `,
    date: new Date("2025-05-05"),
    author: "Sam Taylor",
    category: "TV Shows",
    image: "/placeholder-shows.png",
  },
  {
    title: "Hidden Gems: Underrated TV Shows",
    excerpt: "Discover TV shows you might have missed.",
    content: `
      <p>Some of the best TV shows fly under the radar. Here are a few hidden gems worth watching.</p>
      <ul>
        <li><strong>1. The OA</strong> – A mind-bending journey.</li>
        <li><strong>2. Patriot</strong> – Dark comedy meets espionage.</li>
        <li><strong>3. Rectify</strong> – A slow-burn drama with heart.</li>
        <li><strong>4. Halt and Catch Fire</strong> – The rise of the PC era.</li>
        <li><strong>5. Counterpart</strong> – Parallel worlds and espionage.</li>
      </ul>
    `,
    date: new Date("2025-05-06"),
    author: "Linda Park",
    category: "TV Shows",
    image: "/placeholder-shows2.png",
  },
  // Film Industry
  {
    title: "Behind the Scenes: How Blockbusters Are Made",
    excerpt: "A look into the production secrets of your favorite blockbusters.",
    content: `
      <p>Blockbusters are more than just big budgets. Discover the artistry and teamwork behind the scenes.</p>
      <ul>
        <li><strong>1. Motion Capture</strong> – Bringing digital characters to life.</li>
        <li><strong>2. Practical Effects</strong> – Old-school tricks still in use.</li>
        <li><strong>3. CGI Innovations</strong> – Pushing the boundaries of imagination.</li>
        <li><strong>4. Stunt Coordination</strong> – Keeping action safe and thrilling.</li>
        <li><strong>5. Sound Design</strong> – The unsung hero of immersion.</li>
      </ul>
    `,
    date: new Date("2025-05-01"),
    author: "Chris Davis",
    category: "Film Industry",
    image: "/placeholder-scence.png",
  },
  {
    title: "Special Effects: The Magic Behind the Movies",
    excerpt: "How special effects bring stories to life.",
    content: `
      <p>Special effects have evolved from simple tricks to complex digital wizardry. Here's how they're made.</p>
      <ul>
        <li><strong>1. Miniatures</strong> – Small models, big impact.</li>
        <li><strong>2. Green Screen</strong> – Creating worlds from nothing.</li>
        <li><strong>3. Motion Capture</strong> – Real actors, digital bodies.</li>
        <li><strong>4. Practical Effects</strong> – Explosions, rain, and more.</li>
        <li><strong>5. Post-Production</strong> – Where the magic happens.</li>
      </ul>
    `,
    date: new Date("2025-05-02"),
    author: "Pat Johnson",
    category: "Film Industry",
    image: "/placeholder-scence2.png",
  },
  // Gaming
  {
    title: "Gaming Trends to Watch in 2025",
    excerpt: "Discover what’s hot in the gaming world this year and what’s coming next.",
    content: `
      <p>The gaming industry is always evolving. Here are the trends shaping 2025.</p>
      <ul>
        <li><strong>1. Cloud Gaming</strong> – Play anywhere, anytime.</li>
        <li><strong>2. Esports Growth</strong> – Bigger audiences, bigger prizes.</li>
        <li><strong>3. Indie Revolution</strong> – Small studios, big ideas.</li>
        <li><strong>4. VR & AR</strong> – Immersive experiences.</li>
        <li><strong>5. Cross-Platform Play</strong> – Gamers united.</li>
      </ul>
    `,
    date: new Date("2025-04-28"),
    author: "Jamie Wilson",
    category: "Gaming",
    image: "/placeholder-games.png",
  },
  {
    title: "Esports: The Rise of Competitive Gaming",
    excerpt: "Why esports are taking over the world.",
    content: `
      <p>Esports has become a global phenomenon, drawing millions of viewers and players.</p>
      <ul>
        <li><strong>1. Major Tournaments</strong> – The new sports arenas.</li>
        <li><strong>2. Sponsorships</strong> – Big brands join the game.</li>
        <li><strong>3. Streaming Platforms</strong> – Twitch, YouTube, and more.</li>
        <li><strong>4. Pro Gamers</strong> – Celebrity status for top players.</li>
        <li><strong>5. College Esports</strong> – Scholarships and varsity teams.</li>
      </ul>
    `,
    date: new Date("2025-04-29"),
    author: "Carlos Mendes",
    category: "Gaming",
    image: "/placeholder-games2.png",
  },
  // Pop Culture
  {
    title: "A Beginner’s Guide to K-Pop Fandom",
    excerpt: "Everything you need to know to dive into the vibrant world of K-Pop.",
    content: `
      <p>K-Pop fandom is a global movement. Here's how to get started and what to expect.</p>
      <ul>
        <li><strong>1. Fan Chants</strong> – Learn the songs and cheers.</li>
        <li><strong>2. Lightsticks</strong> – Show your support at concerts.</li>
        <li><strong>3. Online Communities</strong> – Connect with fans worldwide.</li>
        <li><strong>4. Comebacks</strong> – The excitement of new releases.</li>
        <li><strong>5. Fan Art</strong> – Creativity inspired by idols.</li>
      </ul>
    `,
    date: new Date("2025-04-25"),
    author: "Minji Kim",
    category: "Pop Culture",
    image: "/placeholder-pop.png",
  },
  {
    title: "Pop Culture Moments That Defined 2025",
    excerpt: "The biggest pop culture moments of the year.",
    content: `
      <p>2025 has already delivered unforgettable moments in pop culture. Here are the highlights.</p>
      <ul>
        <li><strong>1. Viral Challenges</strong> – The internet's favorite pastimes.</li>
        <li><strong>2. Celebrity Collaborations</strong> – Unexpected duets and partnerships.</li>
        <li><strong>3. Streaming Hits</strong> – Shows and songs that broke records.</li>
        <li><strong>4. Social Movements</strong> – Fans making a difference.</li>
        <li><strong>5. Fashion Trends</strong> – Styles that took over the world.</li>
      </ul>
    `,
    date: new Date("2025-04-26"),
    author: "Olivia Brown",
    category: "Pop Culture",
    image: "/placeholder-pop2.png",
  },
]