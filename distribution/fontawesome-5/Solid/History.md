# History


```text
fontawesome-5/Solid/History
```

```text
include('fontawesome-5/Solid/History')
```



| Illustration | History |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/History.png) | ![illustration for History](../../fontawesome-5/Solid/History.Local.png) |




## History

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element History
include('fontawesome-5/Solid/History')

' renders the element
History('History', 'History', 'an optional tech label')
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

' loads the Item which embeds the element History
include('fontawesome-5/Solid/History')

' renders the element
History('History', 'History', 'an optional tech label')
@enduml
```

