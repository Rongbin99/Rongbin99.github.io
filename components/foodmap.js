"use client";

export default function Foodmap() {
  return (
    <div className="flex items-center justify-center mt-3">
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1zw_JcZMjucS9WACQpN2JaW4AseXkoas&ehbc=2E312F"
        width="100%"
        height={600}
        style={{ border: 0 }}
      />
    </div>
  );
}
