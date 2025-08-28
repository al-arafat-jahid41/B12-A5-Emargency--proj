6. Answer the following questions clearly:

   1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   ANs: JavaScript-এ আমরা DOM থেকে এলিমেন্ট নির্বাচনের বিভিন্ন উপায় ব্যবহার করতে পারি। getElementById() একটি নির্দিষ্ট unique ID দ্বারা একক এলিমেন্ট খুঁজে বের করে। যেহেতু HTML পেজে ID অনন্য হওয়া উচিত, এটি সবসময় শুধু একটি এলিমেন্ট রিটার্ন করে (বা null যদি না থাকে)। getElementsByClassName() একই ক্লাস নামের সব এলিমেন্ট খুঁজে বের করে এবং একটি HTMLCollection রিটার্ন করে, যা অ্যারের মতো হলেও পুরোপুরি অ্যারে নয়। আমরা এটিকে for...of লুপ দিয়ে ব্যবহার করতে পারি।

querySelector() আরও বেশি ফ্লেক্সিবল কারণ এটি CSS সিলেক্টর (#id, .class, div) ব্যবহার করে এলিমেন্ট খুঁজতে দেয়, তবে এটি শুধুমাত্র প্রথম মিলে যাওয়া এলিমেন্ট রিটার্ন করে। যদি সব মিলে যাওয়া এলিমেন্ট নিতে চাই, তাহলে querySelectorAll() ব্যবহার করি, যা NodeList রিটার্ন করে এবং forEach এর মতো মডার্ন লুপিং সমর্থন করে।

2 .How do you create and insert a new element into the DOM?
Ans:JavaScript-এ আমরা DOM ব্যবহার করে নতুন এলিমেন্ট পেজে যোগ করতে পারি। প্রথমে, document.createElement() দিয়ে একটি এলিমেন্ট তৈরি করি। এরপর তার text, id, বা class যোগ করি। শেষে, এটিকে পেজে ইনসার্ট করি appendChild() (শেষে), prepend() (শুরুর দিকে), বা before()/after() (অন্য এলিমেন্টের কাছে) ব্যবহার করে। এর ফলে আমরা পেজ রিফ্রেশ না করে নতুন কন্টেন্ট যোগ করতে পারি।

3. What is Event Bubbling and how does it work?
Ans: JavaScript-এ Event Bubbling হলো এমন একটি প্রক্রিয়া যেখানে কোনো চাইল্ড এলিমেন্টে ইভেন্ট ঘটলে তা স্বয়ংক্রিয়ভাবে তার প্যারেন্ট এলিমেন্টগুলোতেও প্রবাহিত হয়। উদাহরণস্বরূপ, কোনো বাটনে ক্লিক করলে প্রথমে বাটনের ইভেন্ট চলে এবং তারপর ডিভের ইভেন্টও চলে। এটি ডিফল্টভাবে ঘটে এবং ডেভেলপারদের ইভেন্টগুলো কার্যকরভাবে হ্যান্ডেল করতে সাহায্য করে, বিশেষ করে Event Delegation এর সাথে মিলিয়ে।

4.What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Delegation হলো এমন একটি কৌশল যেখানে আমরা একাধিক চাইল্ড এলিমেন্টে আলাদা আলাদা লিসেনার না দিয়ে একটি প্যারেন্ট এলিমেন্টে একটি লিসেনার ব্যবহার করি এবং চাইল্ড এলিমেন্টের ইভেন্ট হ্যান্ডেল করি। এটি Event Bubbling এর কারণে সম্ভব। Event Delegation মেমোরি বাঁচায়, কোড পরিষ্কার রাখে, এবং এমন এলিমেন্টের জন্যও কাজ করে যা পরে ডাইনামিকভাবে যোগ করা হয়।

5.What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault() ব্রাউজারের ডিফল্ট কাজ বন্ধ করে, যেমন লিঙ্কে ক্লিক করলে নতুন পেজে যাওয়া বা ফর্ম সাবমিট হওয়া। stopPropagation() ইভেন্টকে DOM-এ বাবল হয়ে উঠতে থেকে আটকায়, যাতে প্যারেন্ট এলিমেন্টের ইভেন্ট ট্রিগার না হয়। দুইটি একসাথে ব্যবহার করে আমরা ইভেন্টের আচরণ পুরোপুরি নিয়ন্ত্রণ করতে পারি।