export const formatDate = (date: Date) => {
  // Convert the input date to local date string
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  return date.toLocaleString(undefined, options);
};

export const generateRandomUrl = () => {
  const imageUrls = [
    "https://picsum.photos/400/300?random=1",
    "https://picsum.photos/400/300?random=2",
    "https://picsum.photos/400/300?random=3",
    "https://picsum.photos/400/300?random=4",
    "https://picsum.photos/400/300?random=5",
  ];

  const randomIndex = Math.floor(Math.random() * imageUrls.length);

  return imageUrls[randomIndex];
};
