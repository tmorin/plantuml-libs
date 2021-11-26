# PollH


```text
fontawesome-5/Solid/PollH
```

```text
include('fontawesome-5/Solid/PollH')
```



| Illustration | PollH |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/PollH.png) | ![illustration for PollH](../../fontawesome-5/Solid/PollH.Local.png) |




## PollH

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PollH
include('fontawesome-5/Solid/PollH')

' renders the element
PollH('PollH', 'Poll H', 'an optional tech label')
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

' loads the Item which embeds the element PollH
include('fontawesome-5/Solid/PollH')

' renders the element
PollH('PollH', 'Poll H', 'an optional tech label')
@enduml
```

