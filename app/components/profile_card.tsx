import React from 'react';

interface ProfileCardProps {
	username: string;
	name: string;
	role: string;
	description: string;
	age?: number;
	tags: string[];
	photoUrl?: string;
}


const ProfileCard: React.FC<ProfileCardProps> = ({
	username,
	name,
	role,
	description,
	age,
	tags,
	photoUrl
}) => {
	return (
		<section className="flex flex-1 flex-col bg-[var(--color-card-bg)] text-[var(--color-text-primary)] p-4 rounded-3xl font-sans">
			<div className="flex-shrink-0">
				{photoUrl ? (
					<img
						src={photoUrl}
						alt={`${name}'s profile`}
						className="w-30 h-30 rounded-full object-cover bg-[var(--color-tag-bg)]"
					/>
				) : (
					<div className="w-30 h-30 rounded-full bg-[var(--color-tag-bg)]" />
				)}
			</div>
			<div className="flex flex-col justify-center">
				<span className="text-sm text-[var(--color-text-muted)]">@{username}</span>
				<h1 className="text-2xl my-1">Hello! I'm {name}</h1>
				<h2 className="text-xl text-[var(--color-text-secondary)]">{role}</h2>
				<p className="my-4 leading-relaxed break-words">{description}</p>
				<div className="flex flex-wrap gap-2">
					{age && <span className="bg-[var(--color-tag-bg)] px-3 py-2 rounded-lg text-sm">{age} y.o.</span>}
					{tags.map((tag, index) => (
						<span key={index} className="bg-[var(--color-tag-bg)] px-3 py-2 rounded-lg text-sm">{tag}</span>
					))}
				</div>
			</div>
			<div className="flex md:hidden flex-row justify-center items-center gap-4 bg-[var(--color-card-bg)] text-[var(--color-text-primary)] rounded-3xl font-sans h-14 mt-6 mb-2">
				<button className="w-full bg-white text-black font-semibold px-8 py-3 rounded-full transition hover:bg-neutral-200">
					Contact me
				</button>
				<button className="bg-neutral-700 text-white font-medium px-8 py-3 rounded-full transition hover:bg-neutral-600">
					CV
				</button>
			</div>
		</section>
	);
};

export default ProfileCard;