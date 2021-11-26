# CheckBox


```text
material-4/Toggle/CheckBox
```

```text
include('material-4/Toggle/CheckBox')
```



| Illustration | CheckBox |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Toggle/CheckBox.png) | ![illustration for CheckBox](../../material-4/Toggle/CheckBox.Local.png) |




## CheckBox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CheckBox
include('material-4/Toggle/CheckBox')

' renders the element
CheckBox('CheckBox', 'Check Box', 'an optional tech label')
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

' loads the Item which embeds the element CheckBox
include('material-4/Toggle/CheckBox')

' renders the element
CheckBox('CheckBox', 'Check Box', 'an optional tech label')
@enduml
```

