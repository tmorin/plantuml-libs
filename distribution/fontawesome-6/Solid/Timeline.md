# Timeline


```text
fontawesome-6/Solid/Timeline
```

```text
include('fontawesome-6/Solid/Timeline')
```



| Illustration | Timeline |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Timeline.png) | ![illustration for Timeline](../../fontawesome-6/Solid/Timeline.Local.png) |




## Timeline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Timeline
include('fontawesome-6/Solid/Timeline')

' renders the element
Timeline('Timeline', 'Timeline', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Timeline
include('fontawesome-6/Solid/Timeline')

' renders the element
Timeline('Timeline', 'Timeline', 'an optional tech label')
@enduml
```

