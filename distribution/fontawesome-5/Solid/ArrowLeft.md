# ArrowLeft


```text
fontawesome-5/Solid/ArrowLeft
```

```text
include('fontawesome-5/Solid/ArrowLeft')
```



| Illustration | ArrowLeft |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ArrowLeft.png) | ![illustration for ArrowLeft](../../fontawesome-5/Solid/ArrowLeft.Local.png) |




## ArrowLeft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ArrowLeft
include('fontawesome-5/Solid/ArrowLeft')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ArrowLeft
include('fontawesome-5/Solid/ArrowLeft')

' renders the element
ArrowLeft('ArrowLeft', 'Arrow Left', 'an optional tech label')
@enduml
```

