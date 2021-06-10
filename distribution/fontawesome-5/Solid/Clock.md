# Clock


```text
fontawesome-5/Solid/Clock
```

```text
include('fontawesome-5/Solid/Clock')
```



| Illustration | Clock |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Clock.png) | ![illustration for Clock](../../fontawesome-5/Solid/Clock.Local.png) |




## Clock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Clock
include('fontawesome-5/Solid/Clock')

' renders the element
Clock('Clock', 'Clock', 'an optional tech label')
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

' loads the Item which embeds the element Clock
include('fontawesome-5/Solid/Clock')

' renders the element
Clock('Clock', 'Clock', 'an optional tech label')
@enduml
```

