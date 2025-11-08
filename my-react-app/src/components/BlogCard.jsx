// ...existing code...
import '../Card.css'
export default function BlogCard({ image, category, title, description, author }) {
  return (
    <article className="blog-card">
 <div class="card">
    <img src="assets/images/Blog Image.png" alt="Blog illustration" class="card__image"/>

    <div class="card__content">
      <span class="card__tag">HTML & CSS</span>
      <span class="card__date">Публікація 1 Вересня 2025</span>

      <h2 class="card__title">Практична №3</h2>
      <p class="card__text">
        Мета практичної роботи полягає в тому, щоб налаштувати середовище розробки <strong>VS Code</strong>, 
        а також реалізувати картку блогу для вдосконалення фундаментальних навичок з 
        <strong> HTML та CSS</strong>.
      </p>

      <div class="card__author">
        <img src="assets/images/avatar-femail.png" alt="Author avatar" class="author__img"/>
        <span class="author__name">&lt;Даниленко Юлія&gt;</span>
      </div>
    </div>
  </div>
      </article>
  );
}
