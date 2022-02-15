# HotTubPerson


```text
fontawesome-6/Solid/HotTubPerson
```

```text
include('fontawesome-6/Solid/HotTubPerson')
```



| Illustration | HotTubPerson |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HotTubPerson.png) | ![illustration for HotTubPerson](../../fontawesome-6/Solid/HotTubPerson.Local.png) |




## HotTubPerson

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HotTubPerson
include('fontawesome-6/Solid/HotTubPerson')

' renders the element
HotTubPerson('HotTubPerson', 'Hot Tub Person', 'an optional tech label')
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

' loads the Item which embeds the element HotTubPerson
include('fontawesome-6/Solid/HotTubPerson')

' renders the element
HotTubPerson('HotTubPerson', 'Hot Tub Person', 'an optional tech label')
@enduml
```

