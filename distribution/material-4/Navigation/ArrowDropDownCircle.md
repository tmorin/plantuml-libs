# ArrowDropDownCircle


```text
material-4/Navigation/ArrowDropDownCircle
```

```text
include('material-4/Navigation/ArrowDropDownCircle')
```



| Illustration | ArrowDropDownCircle |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Navigation/ArrowDropDownCircle.png) | ![illustration for ArrowDropDownCircle](../../material-4/Navigation/ArrowDropDownCircle.Local.png) |




## ArrowDropDownCircle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ArrowDropDownCircle
include('material-4/Navigation/ArrowDropDownCircle')

' renders the element
ArrowDropDownCircle('ArrowDropDownCircle', 'Arrow Drop Down Circle', 'an optional tech label')
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

' loads the Item which embeds the element ArrowDropDownCircle
include('material-4/Navigation/ArrowDropDownCircle')

' renders the element
ArrowDropDownCircle('ArrowDropDownCircle', 'Arrow Drop Down Circle', 'an optional tech label')
@enduml
```

