import React, { type FC, type ReactNode, useEffect } from 'react'

import { useController, useFormContext } from 'react-hook-form'
import cn from 'classnames'
import { ErrorMessage } from '@hookform/error-message'

import { CheckMarkSvg } from 'src/UI/icons/checkMarkSVG'

import styles from './index.module.scss'
import styled from 'styled-components'

type RadioOption = {
	label: string
	value: string
}

type BaseControlledCheckboxProps = {
	name: string
	required?: boolean
	className?: string
	disabled?: boolean
	$margin?: string
	$marginMobile?: string
}

type CheckboxProps = BaseControlledCheckboxProps & {
	type: 'checkbox'
	label?: string
	customLabel?: ReactNode
	autoActive?: boolean
	options?: never
}

type RadioProps = BaseControlledCheckboxProps & {
	type: 'radio'
	options: RadioOption[]
	label?: never
	customLabel?: ReactNode
	autoActive?: never
}

type ControlledCheckboxProps = CheckboxProps | RadioProps

type CheckboxInputProps = {
	$margin?: string
	$marginMobile?: string
}

const StyledCheckboxWrapper = styled.div<CheckboxInputProps>`
	margin: ${({ $margin }) => $margin ?? '0'};
	@media (max-width: 1024px) {
		margin: ${({ $marginMobile, $margin }) => $marginMobile ?? $margin ?? '0'};
	}
`

export const ControlledCheckbox: FC<ControlledCheckboxProps> = ({
	name,
	type,
	label,
	customLabel,
	className,
	required,
	options,
	$margin,
	$marginMobile,
	disabled,
	autoActive,
}) => {
	const {
		register,
		setValue,
		watch,
		control,
		formState: { errors },
	} = useFormContext()

	const { field } = useController({ name, control })

	const handleCheckboxChange = () => {
		setValue(name, !watch(name))
	}

	useEffect(() => {
		if (type === 'checkbox' && autoActive) {
			setValue(name, true)
		}
	}, [autoActive, name, setValue, type])

	if (type === 'radio') {
		return (
			<StyledCheckboxWrapper
				className={cn(styles.radioInputs, className)}
				$margin={$margin}
				$marginMobile={$marginMobile}
			>
				{options?.map((option) => (
					<label key={option.value}>
						<input
							type='radio'
							{...field}
							value={option.value}
							checked={field.value === option.value}
							onChange={() => field.onChange(option.value)}
						/>
						{option.label}
					</label>
				))}
			</StyledCheckboxWrapper>
		)
	}

	return (
		<StyledCheckboxWrapper
			className={cn(styles.checkboxEl, className)}
			$margin={$margin}
			$marginMobile={$marginMobile}
		>
			<div
				className={cn(
					styles.inputWrapper,
					{ [styles._disabled]: disabled },
					{ [styles.customInputWrapper]: customLabel },
				)}
				onClick={handleCheckboxChange}
			>
				<label className={cn({ [styles._active]: watch(name) })}>
					{watch(name) && <CheckMarkSvg />}
				</label>
				<input
					type='checkbox'
					{...register(name)}
					className={styles.checkboxInput}
					required={required}
				/>
				{label && <p>{label}</p>}
				{customLabel}
			</div>

			{errors[name] && (
				<p className={styles.warningMessage}>
					<ErrorMessage errors={errors} name={name} />
				</p>
			)}
		</StyledCheckboxWrapper>
	)
}
