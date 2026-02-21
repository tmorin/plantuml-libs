# RadioButtonChecked


```text
material/Toggle/RadioButtonChecked
```

```text
include('material/Toggle/RadioButtonChecked')
```



| Illustration | RadioButtonChecked |
| :---: | :---: |
| ![illustration for Illustration](../../material/Toggle/RadioButtonChecked.png) | ![illustration for RadioButtonChecked](../../material/Toggle/RadioButtonChecked.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RadioButtonCheckedXs>`
- `<$RadioButtonCheckedSm>`
- `<$RadioButtonCheckedMd>`
- `<$RadioButtonCheckedLg>`





## RadioButtonChecked

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element RadioButtonChecked
include('material/Toggle/RadioButtonChecked')

' renders the element
RadioButtonChecked('RadioButtonChecked', 'Radio Button Checked', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element RadioButtonChecked
include('material/Toggle/RadioButtonChecked')

' renders the element
RadioButtonChecked('RadioButtonChecked', 'Radio Button Checked', 'an optional tech label', 'an optional description')
@enduml
```

