# ArrowLeft


```text
material-4/Navigation/ArrowLeft
```

```text
include('material-4/Navigation/ArrowLeft')
```



| Illustration | ArrowLeft |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Navigation/ArrowLeft.png) | ![illustration for ArrowLeft](../../material-4/Navigation/ArrowLeft.Local.png) |




## ArrowLeft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ArrowLeft
include('material-4/Navigation/ArrowLeft')

' renders the element
ArrowLeft('ArrowLeft', 'Arrow Left', 'an optional tech label')
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

' loads the Item which embeds the element ArrowLeft
include('material-4/Navigation/ArrowLeft')

' renders the element
ArrowLeft('ArrowLeft', 'Arrow Left', 'an optional tech label')
@enduml
```

