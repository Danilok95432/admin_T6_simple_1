import React, { type FC } from 'react'
import { type SelOption } from 'src/types/select'
import { type FieldError, useController, useFormContext } from 'react-hook-form'
import Select from 'react-dropdown-select'
import { ErrorMessage } from '@hookform/error-message'
import cn from 'classnames'

import styles from './index.module.scss'

type ControlledSelectProps = {
	selectOptions: SelOption[]
	name: string
	label?: string
	className?: string
	margin?: string
	dynamicError?: FieldError | undefined
	disabled?: boolean
	isRequired?: boolean
	bigFont?: boolean
	isIdActive?: boolean
}

export const ControlledSelect: FC<ControlledSelectProps> = ({
	selectOptions,
	name,
	label,
	className,
	margin,
	dynamicError,
	disabled,
	isIdActive = false,
	...props
}) => {
	const {
		register,
		control,
		formState: { errors },
	} = useFormContext()

	const {
		field: { value, onChange },
	} = useController({
		name,
		control,
		defaultValue: [],
	})

	const selectedValues: SelOption[] = Array.isArray(value)
		? value
		: value
			? selectOptions.filter((option) => String(option.value) === String(value))
			: []
	return (
		<div className={cn(styles.selectWrapper, className)} style={{ margin }}>
			{label && <label>{label}</label>}
			<Select
				{...register(name)}
				{...props}
				options={selectOptions}
				values={isIdActive ? selectedValues : [selectOptions[0]]}
				onChange={(values) => onChange(values[0]?.value)}
				disabled={disabled}
			/>
			{dynamicError && <p className={styles.warningMessage}>{dynamicError.message}</p>}
			{errors[name] && (
				<p className={styles.warningMessage}>
					<ErrorMessage errors={errors} name={name} />
				</p>
			)}
		</div>
	)
}
