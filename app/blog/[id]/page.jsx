import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Mock data for blog posts
const blogPosts = [
  {
    id: "1",
    title: "10 JavaScript Tricks You Didn't Know",
    content: `
      <p>JavaScript continues to evolve, and with each passing year, new features and techniques emerge that can make your code more efficient, readable, and powerful.</p>
      
      <h2>1. Optional Chaining</h2>
      <p>Optional chaining (?.) is a safe way to access nested object properties, even when an intermediate property doesn't exist.</p>
      <pre><code>const name = user?.profile?.name;</code></pre>
      
      <h2>2. Nullish Coalescing</h2>
      <p>The nullish coalescing operator (??) provides a way to provide a default value when dealing with null or undefined.</p>
      <pre><code>const username = user.name ?? 'Anonymous';</code></pre>
      
      <h2>3. Array.flat() and Array.flatMap()</h2>
      <p>These methods make it easier to work with nested arrays.</p>
      <pre><code>const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flatArray = nestedArray.flat(2); // [1, 2, 3, 4, 5, 6]</code></pre>
      
      <h2>4. Object.fromEntries()</h2>
      <p>This method transforms a list of key-value pairs into an object.</p>
      <pre><code>const entries = [['name', 'John'], ['age', 30]];
const obj = Object.fromEntries(entries); // { name: 'John', age: 30 }</code></pre>
      
      <h2>5. String.prototype.replaceAll()</h2>
      <p>This method returns a new string with all matches of a pattern replaced by a replacement.</p>
      <pre><code>const str = 'hello world, hello universe';
const newStr = str.replaceAll('hello', 'hi'); // 'hi world, hi universe'</code></pre>
      
      <h2>6. Promise.allSettled()</h2>
      <p>This method returns a promise that resolves after all of the given promises have either fulfilled or rejected.</p>
      <pre><code>const promises = [fetch('/api/data1'), fetch('/api/data2')];
const results = await Promise.allSettled(promises);</code></pre>
      
      <h2>7. Logical Assignment Operators</h2>
      <p>These operators combine logical operations with assignment expressions.</p>
      <pre><code>// OR assignment (||=)
x ||= y; // equivalent to: x = x || y

// AND assignment (&&=)
x &&= y; // equivalent to: x = x && y

// Nullish coalescing assignment (??=)
x ??= y; // equivalent to: x = x ?? y</code></pre>
      
      <h2>8. Numeric Separators</h2>
      <p>Numeric separators improve readability for numeric literals.</p>
      <pre><code>const billion = 1_000_000_000; // 1,000,000,000
const bytes = 0xFF_EC_DE_5E; // 0xFFECDE5E
const fraction = 0.000_001; // 0.000001</code></pre>
      
      <h2>9. Array.at()</h2>
      <p>The at() method takes an integer value and returns the item at that index, allowing for negative integers to count back from the last item.</p>
      <pre><code>const array = [5, 12, 8, 130, 44];
console.log(array.at(-1)); // 44 (last element)</code></pre>
      
      <h2>10. Private Class Fields</h2>
      <p>Private class fields let you define class elements that are only accessible within the class itself.</p>
      <pre><code>class Counter {
  #count = 0;
  
  increment() {
    this.#count++;
  }
  
  get value() {
    return this.#count;
  }
}</code></pre>
      
      <p>By incorporating these techniques into your JavaScript code, you can write more concise, readable, and maintainable applications. Stay curious and keep exploring the ever-evolving JavaScript ecosystem!</p>
    `,
    date: "May 12, 2025",
    author: "Jane Smith",
    category: "Development",
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: "2",
    title: "The Future of Web Design in 2025",
    content: `
      <p>As we move further into 2025, web design continues to evolve at a rapid pace. New technologies, changing user expectations, and innovative approaches are reshaping how we create digital experiences.</p>
      
      <h2>Immersive Experiences with WebXR</h2>
      <p>WebXR is becoming mainstream, allowing designers to create immersive augmented and virtual reality experiences directly in the browser. This technology is transforming e-commerce, education, and entertainment sectors by providing users with interactive 3D environments.</p>
      
      <h2>AI-Driven Personalization</h2>
      <p>Artificial intelligence is now a standard tool in a web designer's arsenal. AI algorithms analyze user behavior in real-time to dynamically adjust layouts, content, and visual elements to match individual preferences and needs. This level of personalization creates more engaging and relevant user experiences.</p>
      
      <h2>Micro-Interactions and Animation</h2>
      <p>Subtle animations and micro-interactions continue to gain importance as they provide immediate feedback, guide users through interfaces, and add personality to websites. With improvements in browser performance, these elements are becoming more sophisticated and integral to the user experience.</p>
      
      <h2>Voice User Interfaces (VUI)</h2>
      <p>Voice interaction is no longer limited to smart speakers and mobile devices. Web applications now commonly incorporate voice commands and responses, making interfaces more accessible and convenient for users across different contexts and abilities.</p>
      
      <h2>Sustainable Web Design</h2>
      <p>Environmental consciousness has reached web design. Designers are now focusing on creating energy-efficient websites by optimizing images, reducing unnecessary animations, and streamlining code to minimize carbon footprints. This approach not only benefits the environment but also improves loading times and user experience.</p>
      
      <h2>Adaptive Color Schemes</h2>
      <p>Beyond simple dark/light modes, websites now adapt their color schemes based on user preferences, time of day, and environmental conditions. This attention to visual comfort enhances accessibility and user engagement.</p>
      
      <h2>Minimalism 2.0</h2>
      <p>The minimalist trend has evolved into what some call "Minimalism 2.0" – combining clean layouts with rich, meaningful interactions and carefully selected visual elements. This approach balances simplicity with engaging user experiences.</p>
      
      <h2>Augmented Typography</h2>
      <p>Typography is becoming more dynamic and interactive. Variable fonts and responsive typography adjust not just to screen sizes but to reading distances, user preferences, and even reading speed, creating more comfortable reading experiences.</p>
      
      <h2>Ethical Design Practices</h2>
      <p>There's a growing emphasis on ethical design that respects user privacy, avoids dark patterns, and promotes inclusivity. Designers are increasingly considering the social impact of their work and striving to create interfaces that serve users' best interests.</p>
      
      <h2>Conclusion</h2>
      <p>The future of web design in 2025 is characterized by more intelligent, adaptive, and human-centered approaches. As designers, embracing these trends means focusing not just on aesthetics but on creating meaningful, accessible, and sustainable digital experiences that truly serve users' needs.</p>
    `,
    date: "May 8, 2025",
    author: "Alex Johnson",
    category: "Design",
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: "3",
    title: "Building Accessible Web Applications",
    content: `
      <p>Web accessibility is not just a legal requirement or a nice-to-have feature—it's a fundamental aspect of creating inclusive digital experiences that work for everyone. In this article, we'll explore practical approaches to building accessible web applications.</p>
      
      <h2>Understanding Web Accessibility</h2>
      <p>Web accessibility means designing and developing websites that people with disabilities can perceive, understand, navigate, and interact with. This includes individuals with visual, auditory, motor, or cognitive impairments.</p>
      
      <h2>Key Principles of Accessible Design</h2>
      
      <h3>1. Perceivable Information</h3>
      <p>Information and user interface components must be presentable to users in ways they can perceive.</p>
      <ul>
        <li>Provide text alternatives for non-text content</li>
        <li>Create content that can be presented in different ways without losing information</li>
        <li>Make it easier for users to see and hear content</li>
      </ul>
      
      <h3>2. Operable Interface</h3>
      <p>User interface components and navigation must be operable.</p>
      <ul>
        <li>Make all functionality available from a keyboard</li>
        <li>Give users enough time to read and use content</li>
        <li>Do not use content that causes seizures or physical reactions</li>
        <li>Provide ways to help users navigate and find content</li>
      </ul>
      
      <h3>3. Understandable Information</h3>
      <p>Information and operation of the user interface must be understandable.</p>
      <ul>
        <li>Make text readable and understandable</li>
        <li>Make content appear and operate in predictable ways</li>
        <li>Help users avoid and correct mistakes</li>
      </ul>
      
      <h3>4. Robust Content</h3>
      <p>Content must be robust enough to be interpreted by a wide variety of user agents, including assistive technologies.</p>
      <ul>
        <li>Maximize compatibility with current and future tools</li>
      </ul>
      
      <h2>Practical Implementation Techniques</h2>
      
      <h3>Semantic HTML</h3>
      <p>Use HTML elements according to their intended purpose:</p>
      <pre><code>&lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;section&gt;, &lt;article&gt;, &lt;aside&gt;, &lt;footer&gt;</code></pre>
      
      <h3>ARIA Attributes</h3>
      <p>When HTML semantics aren't sufficient, use ARIA (Accessible Rich Internet Applications) attributes:</p>
      <pre><code>&lt;div role="alert" aria-live="assertive"&gt;Form submitted successfully!&lt;/div&gt;</code></pre>
      
      <h3>Keyboard Navigation</h3>
      <p>Ensure all interactive elements are keyboard accessible:</p>
      <ul>
        <li>Logical tab order</li>
        <li>Visible focus indicators</li>
        <li>Keyboard shortcuts for complex interactions</li>
      </ul>
      
      <h3>Color and Contrast</h3>
      <p>Maintain sufficient color contrast between text and background (minimum ratio of 4.5:1 for normal text and 3:1 for large text). Never use color alone to convey information.</p>
      
      <h3>Form Design</h3>
      <p>Create accessible forms with:</p>
      <ul>
        <li>Associated labels for all form controls</li>
        <li>Clear error messages</li>
        <li>Grouped related fields with fieldset and legend</li>
      </ul>
      
      <h3>Images and Media</h3>
      <p>Provide alternatives for non-text content:</p>
      <ul>
        <li>Alt text for images</li>
        <li>Captions and transcripts for audio/video</li>
        <li>Descriptions for complex visualizations</li>
      </ul>
      
      <h2>Testing for Accessibility</h2>
      <p>Incorporate these testing methods into your development workflow:</p>
      <ul>
        <li>Automated testing tools (Axe, WAVE, Lighthouse)</li>
        <li>Keyboard-only navigation testing</li>
        <li>Screen reader testing (NVDA, JAWS, VoiceOver)</li>
        <li>User testing with people with disabilities</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Building accessible web applications is not just about compliance—it's about creating better experiences for everyone. By incorporating accessibility from the beginning of your development process, you create more robust, usable, and inclusive digital products that reach a wider audience.</p>
      
      <p>Remember that accessibility is not a one-time effort but an ongoing commitment to inclusive design and development practices.</p>
    `,
    date: "May 5, 2025",
    author: "Sam Taylor",
    category: "Accessibility",
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: "4",
    title: "Getting Started with React Server Components",
    content: `<p>This is a sample blog post about React Server Components.</p>`,
    date: "May 1, 2025",
    author: "Chris Davis",
    category: "React",
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: "5",
    title: "Optimizing Website Performance",
    content: `<p>This is a sample blog post about website performance optimization.</p>`,
    date: "April 28, 2025",
    author: "Pat Johnson",
    category: "Performance",
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: "6",
    title: "Introduction to TypeScript for JavaScript Developers",
    content: `<p>This is a sample blog post about TypeScript for JavaScript developers.</p>`,
    date: "April 25, 2025",
    author: "Jamie Wilson",
    category: "TypeScript",
    image: "/placeholder.svg?height=400&width=800",
  },
]

export function generateMetadata({ params }) {
  const post = blogPosts.find((post) => post.id === params.id)

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | Modern Web App Blog`,
    description: post.excerpt || post.content.substring(0, 160).replace(/<[^>]*>/g, ""),
  }
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((post) => post.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto py-8 md:py-12">
      <Button asChild variant="ghost" className="mb-6">
        <Link href="/blog" className="flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </Button>

      <article className="prose prose-slate dark:prose-invert max-w-none">
        <div className="relative w-full h-[300px] md:h-[400px] mb-6">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover rounded-lg" />
        </div>

        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary">{post.category}</Badge>
          <span className="text-sm text-slate-500 dark:text-slate-400">{post.date}</span>
        </div>

        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{post.title}</h1>

        <div className="flex items-center gap-2 mb-8">
          <span className="text-sm">By {post.author}</span>
        </div>

        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  )
}
