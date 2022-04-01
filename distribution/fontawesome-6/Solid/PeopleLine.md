# PeopleLine


```text
fontawesome-6/Solid/PeopleLine
```

```text
include('fontawesome-6/Solid/PeopleLine')
```



| Illustration | PeopleLine |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PeopleLine.png) | ![illustration for PeopleLine](../../fontawesome-6/Solid/PeopleLine.Local.png) |




## PeopleLine

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PeopleLine
include('fontawesome-6/Solid/PeopleLine')

' renders the element
PeopleLine('PeopleLine', 'People Line', 'an optional tech label')
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

' loads the Item which embeds the element PeopleLine
include('fontawesome-6/Solid/PeopleLine')

' renders the element
PeopleLine('PeopleLine', 'People Line', 'an optional tech label')
@enduml
```

