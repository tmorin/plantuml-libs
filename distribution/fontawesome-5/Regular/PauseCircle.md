# PauseCircle


```text
fontawesome-5/Regular/PauseCircle
```

```text
include('fontawesome-5/Regular/PauseCircle')
```



| Illustration | PauseCircle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/PauseCircle.png) | ![illustration for PauseCircle](../../fontawesome-5/Regular/PauseCircle.Local.png) |




## PauseCircle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PauseCircle
include('fontawesome-5/Regular/PauseCircle')

' renders the element
PauseCircle('PauseCircle', 'Pause Circle', 'an optional tech label')
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

' loads the Item which embeds the element PauseCircle
include('fontawesome-5/Regular/PauseCircle')

' renders the element
PauseCircle('PauseCircle', 'Pause Circle', 'an optional tech label')
@enduml
```

