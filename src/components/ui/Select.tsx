import React from 'react'
import { cn } from '@/utils/ui/globals'
import Select, {
  Props,
  components,
  DropdownIndicatorProps,
  ClearIndicatorProps,
  MultiValueRemoveProps,
  SelectInstance,
  MultiValue,
  ActionMeta,
} from 'react-select'
import { IconSelector } from '@tabler/icons-react'
import { IconX } from '@tabler/icons-react'

export type SelectItem = {
  label: string
  value: string
}

interface NormalSelectInputProps extends Props<SelectItem, false> {
  value?: SelectItem[]
  options: SelectItem[]
}

interface MultiSelectInputProps extends Props<SelectItem, true> {
  value?: SelectItem[]
  options: SelectItem[]
}

interface AllSelectInputProps extends MultiSelectInputProps {
  value: SelectItem[]
  selectAllLabel?: string
  selectAllError?: string
  nothingFound?: string
  selectAllOption?: SelectItem
  onChange: (newValue: MultiValue<SelectItem>) => void
}

const DropdownIndicator = (props: DropdownIndicatorProps<SelectItem>) => {
  return (
    <components.DropdownIndicator {...props}>
      <IconSelector />
    </components.DropdownIndicator>
  )
}

const ClearIndicator = (props: ClearIndicatorProps<SelectItem>) => {
  return (
    <components.ClearIndicator {...props}>
      <IconX />
    </components.ClearIndicator>
  )
}

const MultiValueRemove = (props: MultiValueRemoveProps<SelectItem>) => {
  return (
    <components.MultiValueRemove {...props}>
      <IconX />
    </components.MultiValueRemove>
  )
}

const defaultProps: Props<SelectItem> = {
  menuPortalTarget: document.body,
  isRtl: true,
  hideSelectedOptions: true,
  closeMenuOnSelect: false,
  isSearchable: false,
  isClearable: true,
  placeholder: 'لطفا یک گزینه را انتخاب کنید.',
  noOptionsMessage: () => 'گزینه دیگری وجود ندارد.',
  unstyled: true,
  styles: {
    input: base => ({
      ...base,
      'input:focus': {
        boxShadow: 'none',
      },
    }),
    // On mobile, the label will truncate automatically, so we want to
    // override that behavior.
    multiValueLabel: base => ({
      ...base,
      whiteSpace: 'normal',
      overflow: 'visible',
    }),
    // lines below fixes RTL bug.
    valueContainer: baseStyles => ({
      ...baseStyles,
      '& input': {
        left: 'unset',
      },
    }),
    option: base => ({
      ...base,
      fontSize: '',
    }),
  },

  components: {
    DropdownIndicator,
    ClearIndicator,
    MultiValueRemove,
  },
  classNames: {
    control: ({ isFocused }) =>
      cn(
        isFocused ? 'border-primary' : 'border-input hover:border-gray-300',
        'rounded-lg border bg-white transition-colors hover:cursor-pointer',
      ),
    placeholder: () => 'pr-1 text-muted-foreground text-sm',
    input: () => 'py-0.5 pr-1',
    valueContainer: () => 'gap-1 px-2 py-1',
    singleValue: () => 'mr-1 text-sm',
    multiValue: () =>
      'items-center gap-1 rounded-full bg-gray-100 pl-1 pr-2 text-xs',
    multiValueLabel: () => 'py-0 leading-6',
    multiValueRemove: () => 'h-5 w-5 p-0.5 text-muted-foreground',
    indicatorsContainer: () => 'relative',
    clearIndicator: () =>
      'absolute rounded-full bg-white py-1 text-muted-foreground w-8 h-8 px-2 flex items-center justify-center',
    indicatorSeparator: () => 'hidden',
    dropdownIndicator: () =>
      'rounded-full py-1 text-muted-foreground w-8 h-8 flex items-center justify-center px-2',
    menu: () => 'mt-2 rounded-lg border border-gray-200 bg-white p-1',
    groupHeading: () => 'mb-1 mr-3 mt-2 text-sm text-muted-foreground',
    option: ({ isFocused, isSelected }) =>
      cn(
        isFocused && 'bg-gray-100',
        isSelected &&
          'bg-primary text-muted-foreground text-primary-foreground after:mr-2 after:text-green-500',
        'rounded px-3 py-2 text-sm hover:cursor-pointer',
      ),
    noOptionsMessage: () =>
      'rounded-sm border border-dashed border-gray-200 bg-gray-50 p-2 text-muted-foreground',
    menuList: () => 'overflow-y-hidden',
    container: () => 'w-full',
  },
}

export function NormalSelect({ ...props }: NormalSelectInputProps) {
  return (
    <Select
      {...(defaultProps as Props<SelectItem, false>)}
      isMulti={false}
      closeMenuOnSelect
      hideSelectedOptions={false}
      isClearable={false}
      {...props}
    />
  )
}

export function MultiSelect({
  value,
  options,
  ...props
}: MultiSelectInputProps) {
  const ref = React.useRef<SelectInstance<SelectItem, true>>(null)

  React.useEffect(() => {
    if (value?.length === options?.length) {
      ref.current?.blur()
    }
  }, [value, options])

  return (
    <Select
      {...(defaultProps as Props<SelectItem, true>)}
      isMulti
      closeMenuOnSelect={false}
      hideSelectedOptions
      ref={ref}
      value={value}
      options={options}
      {...props}
    />
  )
}

export function AllSelect({
  options,
  selectAllOption,
  selectAllLabel = 'all options',
  selectAllError = 'you selected all!',
  nothingFound = 'nothing found!',
  value,
  onChange,
  ...otherProps
}: AllSelectInputProps) {
  const selectAllItem = allOptionGenerator(
    options,
    selectAllLabel,
    selectAllOption,
  )
  const ref = React.useRef<SelectInstance<SelectItem, true>>(null)
  const initialData = React.useRef([selectAllItem, ...options])
  const [internalOptions, setInternalOptions] = React.useState(
    initialData.current,
  )

  const updateValue = React.useCallback(
    (newValue: MultiValue<SelectItem>, actionMeta: ActionMeta<SelectItem>) => {
      console.log(newValue)
      const includes = newValue.some(v => v.value === selectAllItem.value)
      if (includes) {
        onChange([selectAllItem])
        setInternalOptions([selectAllItem])
        ref.current?.blur()
      } else {
        onChange(newValue)
        setInternalOptions(initialData.current)
      }
    },
    [onChange, selectAllItem],
  )

  const errorMessage = value.some(v => v.value === selectAllItem.value)
    ? selectAllError
    : nothingFound

  return (
    <Select
      {...(defaultProps as Props<SelectItem, true>)}
      isSearchable
      isMulti
      closeMenuOnSelect={false}
      hideSelectedOptions
      value={value}
      onChange={updateValue}
      noOptionsMessage={() => errorMessage}
      options={internalOptions}
      ref={ref}
      {...otherProps}
    />
  )
}

function allOptionGenerator(
  data: readonly SelectItem[],
  selectAllLabel: string,
  selectAllOption?: SelectItem,
) {
  if (selectAllOption) return selectAllOption
  const selectAllValue = data.map(e => e.value).join(',')
  const generatedSelectAllOption: SelectItem = {
    value: selectAllValue,
    label: selectAllLabel,
  }

  return generatedSelectAllOption
}
