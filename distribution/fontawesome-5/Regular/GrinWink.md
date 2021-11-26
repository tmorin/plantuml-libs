# GrinWink


```text
fontawesome-5/Regular/GrinWink
```

```text
include('fontawesome-5/Regular/GrinWink')
```



| Illustration | GrinWink |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/GrinWink.png) | ![illustration for GrinWink](../../fontawesome-5/Regular/GrinWink.Local.png) |




## GrinWink

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GrinWink
include('fontawesome-5/Regular/GrinWink')

' renders the element
GrinWink('GrinWink', 'Grin Wink', 'an optional tech label')
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

' loads the Item which embeds the element GrinWink
include('fontawesome-5/Regular/GrinWink')

' renders the element
GrinWink('GrinWink', 'Grin Wink', 'an optional tech label')
@enduml
```

