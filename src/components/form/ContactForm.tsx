"use client";

import { useState } from "react";
import { Button } from "@/components/foundation/Button";

interface ContactFormProps {
	labels: {
		name: string;
		email: string;
		subject: string;
		message: string;
		submit: string;
		success: string;
		error: string;
	};
}

export function ContactForm({ labels }: ContactFormProps) {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus("idle");

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setSubmitStatus("success");
				setFormData({ name: "", email: "", subject: "", message: "" });
			} else {
				setSubmitStatus("error");
			}
		} catch (error) {
			console.error("Error submitting form:", error);
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="max-w-2xl mx-auto">
			{submitStatus === "success" && (
				<div className="mb-8 p-4 bg-green-50 border border-green-200 rounded text-green-800">{labels.success}</div>
			)}

			{submitStatus === "error" && (
				<div className="mb-8 p-4 bg-red-50 border border-red-200 rounded text-red-800">{labels.error}</div>
			)}

			<form onSubmit={handleSubmit} className="space-y-6">
				{/* 名前 */}
				<div>
					<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
						{labels.name} <span className="text-red-500">*</span>
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
						className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
					/>
				</div>

				{/* メールアドレス */}
				<div>
					<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
						{labels.email} <span className="text-red-500">*</span>
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
						className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
					/>
				</div>

				{/* 件名 */}
				<div>
					<label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
						{labels.subject} <span className="text-red-500">*</span>
					</label>
					<input
						type="text"
						id="subject"
						name="subject"
						value={formData.subject}
						onChange={handleChange}
						required
						className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
					/>
				</div>

				{/* メッセージ */}
				<div>
					<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
						{labels.message} <span className="text-red-500">*</span>
					</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						required
						rows={6}
						className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
					/>
				</div>

				{/* 送信ボタン */}
				<Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
					{isSubmitting ? "送信中..." : labels.submit}
				</Button>
			</form>
		</div>
	);
}
