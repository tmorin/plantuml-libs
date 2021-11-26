# ArrowBackIos


```text
material-4/Navigation/ArrowBackIos
```

```text
include('material-4/Navigation/ArrowBackIos')
```



| Illustration | ArrowBackIos |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Navigation/ArrowBackIos.png) | ![illustration for ArrowBackIos](../../material-4/Navigation/ArrowBackIos.Local.png) |




## ArrowBackIos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ArrowBackIos
include('material-4/Navigation/ArrowBackIos')

' renders the element
ArrowBackIos('ArrowBackIos', 'Arrow Back Ios', 'an optional tech label')
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

' loads the Item which embeds the element ArrowBackIos
include('material-4/Navigation/ArrowBackIos')

' renders the element
ArrowBackIos('ArrowBackIos', 'Arrow Back Ios', 'an optional tech label')
@enduml
```

