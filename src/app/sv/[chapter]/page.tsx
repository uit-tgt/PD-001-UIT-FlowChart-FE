'use client'

import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function ChapterDetail() {
  const params = useParams();
  const { chapter } = params;  // Lấy giá trị chapter từ URL

  // Giả sử danh sách bài được lấy từ API
  const lessons = [
    { id: 1, title: 'Bài 1', chapterId: chapter },
    { id: 2, title: 'Bài 2', chapterId: chapter }
  ];

  return (
    <div>
      <h1>Danh sách bài trong chương {chapter}</h1>
      <ul>
        {lessons.map((lesson) => (
          <li key={lesson.id}>
            <Link href={`/sv/${chapter}/${lesson.id}`}>
              {lesson.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
