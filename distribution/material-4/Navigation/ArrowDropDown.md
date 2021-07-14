# ArrowDropDown


```text
material-4/Navigation/ArrowDropDown
```

```text
include('material-4/Navigation/ArrowDropDown')
```



| Illustration | ArrowDropDown |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Navigation/ArrowDropDown.png) | ![illustration for ArrowDropDown](../../material-4/Navigation/ArrowDropDown.Local.png) |




## ArrowDropDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ArrowDropDown
include('material-4/Navigation/ArrowDropDown')

' renders the element
ArrowDropDown('ArrowDropDown', 'Arrow Drop Down', 'an optional tech label')
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

' loads the Item which embeds the element ArrowDropDown
include('material-4/Navigation/ArrowDropDown')

' renders the element
ArrowDropDown('ArrowDropDown', 'Arrow Drop Down', 'an optional tech label')
@enduml
```

