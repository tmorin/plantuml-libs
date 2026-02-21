# RadioButtonUnchecked


```text
material/Toggle/RadioButtonUnchecked
```

```text
include('material/Toggle/RadioButtonUnchecked')
```



| Illustration | RadioButtonUnchecked |
| :---: | :---: |
| ![illustration for Illustration](../../material/Toggle/RadioButtonUnchecked.png) | ![illustration for RadioButtonUnchecked](../../material/Toggle/RadioButtonUnchecked.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RadioButtonUncheckedXs>`
- `<$RadioButtonUncheckedSm>`
- `<$RadioButtonUncheckedMd>`
- `<$RadioButtonUncheckedLg>`





## RadioButtonUnchecked

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element RadioButtonUnchecked
include('material/Toggle/RadioButtonUnchecked')

' renders the element
RadioButtonUnchecked('RadioButtonUnchecked', 'Radio Button Unchecked', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RadioButtonUnchecked
include('material/Toggle/RadioButtonUnchecked')

' renders the element
RadioButtonUnchecked('RadioButtonUnchecked', 'Radio Button Unchecked', 'an optional tech label', 'an optional description')
@enduml
```

