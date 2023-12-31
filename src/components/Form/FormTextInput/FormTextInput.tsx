import React from 'react';

import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';

import {TextInput, TextInputProps} from '@components';

export function FormTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  errorMessage,
  ...textInputProps
}: TextInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field, fieldState}) => (
        <TextInput
          value={field.value}
          onChangeText={field.onChange}
          errorMessage={fieldState.error?.message || errorMessage}
          {...textInputProps}
          //   placeholder="Nome completo"
          //   label="Nome Completo"
          //   boxProps={{mb: 's20'}}
        />
      )}
    />
  );
}

// Example without Controller Component

/* <Controller
        control={control}
        name="username"
        rules={{required: 'Username obrigatório'}}
        render={({field, fieldState}) => (
          <TextInput
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
            placeholder="@"
            label="Seu username"
            boxProps={{mb: 's20'}}
          />
        )}
      /> */
