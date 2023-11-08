'use client';
import { Htag, Button, P, Tag, Rating, TextArea } from '@/components';
import { Input } from '@/components/Input/Input';
import { useEffect, useState } from 'react';
// import styles from './page.module.css';

// const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
// 	firstCategory: 0
// });

function Home() {
	const [count, setCount] = useState(0);
	const [rating, setRating] = useState<number>(4);
	useEffect(() => {
		setRating(1);
	}, []);
	return (
		<main>
			<Htag tag="h1"> {count}</Htag>
			<Button
				appearance="primary"
				arrow="right"
				onClick={() => setCount((item) => item + 1)}
			>
				Button
			</Button>
			<Button
				appearance="ghost"
				arrow="down"
				onClick={() => setCount(count - 1)}
			>
				Button
			</Button>

			<P size="14px">
				Напишу сразу в двух курсах, так как проходил оба. Java будет многим
				непросвещённым сложновата в изучении, но здесь перевес из-за лидирующего
				положения языка как самого популярного в программировании. Выбор мой пал
				на эту профессию еще и потому, что Java-разработчики получают самую
				большую зарплату. Хотя Python начинает догонять Java по многим моментам,
				но вот в крупном екоме разработке Джава все-таки остается главенствующей
				сейчас. Скажу так – полнота программы и интенсивность присуща обоим
				курсам GeekBrains. Хочу отметить, что с первого дня занятий вы
				приступаете к практике и получаете опыт коммерческой разработки уже в
				свое резюме. Скажу вам как прошедший это – реально помогло в
				трудоустройстве!
			</P>
			<P size="16px">
				Студенты освоят не только hard skills, необходимые для работы
				веб-дизайнером, но и soft skills — навыки, которые позволят эффективно
				взаимодействовать в команде с менеджерами, разработчиками и
				маркетологами. Выпускники факультета могут успешно конкурировать с
				веб-дизайнерами уровня middle.
			</P>
			<P size="18px">
				Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и
				ими можно успешно пользоваться дома или в дороге. Современные ноутбуки
				хорошо справляются с нагрузкой, так зачем загонять специалиста в душный
				офис. В этой профессии важным считается вдохновение, поэтому дизайнеры
				ищут его в разных местах.
			</P>
			<Tag size="s" color="red">
				small
			</Tag>
			<Tag size="m" color="ghost">
				middle
			</Tag>
			<Tag size="m" color="green">
				bigger
			</Tag>
			<Tag size="s" color="primary">
				violed
			</Tag>
			<Rating rating={rating} isEditable setRating={(e) => setRating(e)} />
			<Input />
			<TextArea />
		</main>
	);
}

export default Home;
