import React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	/**
	 * エラーメッセージ
	 */
	error?: string;
	/**
	 * ラベル
	 */
	label?: string;
	/**
	 * 必須フィールドか
	 */
	required?: boolean;
	/**
	 * ref
	 */
	ref?: React.Ref<HTMLTextAreaElement>;
}

function Textarea({ className, error, label, required, id, ref, ...props }: TextareaProps) {
	const textareaId = React.useId();
	const finalId = id || textareaId;

	return (
		<div className="space-y-2">
			{label && (
				<label htmlFor={finalId} className="block text-sm font-medium">
					{label}
					{required && <span className="text-accent ml-1">*</span>}
				</label>
			)}
			<textarea
				ref={ref}
				id={finalId}
				className={cn(
					"w-full px-3 py-2 border rounded transition-colors",
					"focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
					"disabled:bg-gray-100 disabled:cursor-not-allowed",
					"resize-y min-h-header",
					error ? "border-accent" : "border-border",
					className
				)}
				aria-invalid={error ? "true" : "false"}
				aria-describedby={error ? `${finalId}-error` : undefined}
				required={required}
				{...props}
			/>
			{error && (
				<p id={`${finalId}-error`} className="text-sm text-accent">
					{error}
				</p>
			)}
		</div>
	);
}

export { Textarea };
