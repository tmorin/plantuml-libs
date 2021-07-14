# StopCircle


```text
fontawesome-5/Regular/StopCircle
```

```text
include('fontawesome-5/Regular/StopCircle')
```



| Illustration | StopCircle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/StopCircle.png) | ![illustration for StopCircle](../../fontawesome-5/Regular/StopCircle.Local.png) |




## StopCircle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element StopCircle
include('fontawesome-5/Regular/StopCircle')

' renders the element
StopCircle('StopCircle', 'Stop Circle', 'an optional tech label')
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

' loads the Item which embeds the element StopCircle
include('fontawesome-5/Regular/StopCircle')

' renders the element
StopCircle('StopCircle', 'Stop Circle', 'an optional tech label')
@enduml
```
