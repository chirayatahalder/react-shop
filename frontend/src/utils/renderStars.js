export default function renderStars(rating) {
  return Array.from({ length: 5 }, (_, i) => i < rating);
}