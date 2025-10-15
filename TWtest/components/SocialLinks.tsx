export default function SocialLinks() {
  const socials = [
    { name: "Facebook", icon: "FB" },
    { name: "Twitter", icon: "TW" },
    { name: "Instagram", icon: "IG" },
    { name: "LinkedIn", icon: "IN" },
  ];

  return (
    <div className="flex gap-3">
      {socials.map((social) => (
        <a
          key={social.name}
          href={`#${social.name.toLowerCase()}`}
          className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center text-xs font-bold hover:bg-gray-200 transition-all hover:scale-110"
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}

