import React from 'react';
import { Twitter, Facebook, Linkedin } from 'lucide-react';

interface ShareButtonsProps {
  url: string;
  title: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ url, title }) => {
  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
  };

  return (
    <div className="flex space-x-4">
      <button
        onClick={shareOnTwitter}
        className="share-button text-[#1DA1F2] hover:text-[#1a8cd8]"
        aria-label="Share on Twitter"
      >
        <Twitter className="h-6 w-6" />
      </button>
      <button
        onClick={shareOnFacebook}
        className="share-button text-[#4267B2] hover:text-[#385796]"
        aria-label="Share on Facebook"
      >
        <Facebook className="h-6 w-6" />
      </button>
      <button
        onClick={shareOnLinkedIn}
        className="share-button text-[#0077B5] hover:text-[#006396]"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="h-6 w-6" />
      </button>
    </div>
  );
};

export default ShareButtons;