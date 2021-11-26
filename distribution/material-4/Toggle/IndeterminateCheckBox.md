# IndeterminateCheckBox


```text
material-4/Toggle/IndeterminateCheckBox
```

```text
include('material-4/Toggle/IndeterminateCheckBox')
```



| Illustration | IndeterminateCheckBox |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Toggle/IndeterminateCheckBox.png) | ![illustration for IndeterminateCheckBox](../../material-4/Toggle/IndeterminateCheckBox.Local.png) |




## IndeterminateCheckBox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element IndeterminateCheckBox
include('material-4/Toggle/IndeterminateCheckBox')

' renders the element
IndeterminateCheckBox('IndeterminateCheckBox', 'Indeterminate Check Box', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element IndeterminateCheckBox
include('material-4/Toggle/IndeterminateCheckBox')

' renders the element
IndeterminateCheckBox('IndeterminateCheckBox', 'Indeterminate Check Box', 'an optional tech label')
@enduml
```

