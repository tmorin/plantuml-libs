# IndeterminateCheckBox


```text
material/Toggle/IndeterminateCheckBox
```

```text
include('material/Toggle/IndeterminateCheckBox')
```



| Illustration | IndeterminateCheckBox |
| :---: | :---: |
| ![illustration for Illustration](../../material/Toggle/IndeterminateCheckBox.png) | ![illustration for IndeterminateCheckBox](../../material/Toggle/IndeterminateCheckBox.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IndeterminateCheckBoxXs>`
- `<$IndeterminateCheckBoxSm>`
- `<$IndeterminateCheckBoxMd>`
- `<$IndeterminateCheckBoxLg>`





## IndeterminateCheckBox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element IndeterminateCheckBox
include('material/Toggle/IndeterminateCheckBox')

' renders the element
IndeterminateCheckBox('IndeterminateCheckBox', 'Indeterminate Check Box', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element IndeterminateCheckBox
include('material/Toggle/IndeterminateCheckBox')

' renders the element
IndeterminateCheckBox('IndeterminateCheckBox', 'Indeterminate Check Box', 'an optional tech label', 'an optional description')
@enduml
```

