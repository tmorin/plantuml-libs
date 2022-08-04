# PhoenixSquadron


```text
fontawesome-6/Brands/PhoenixSquadron
```

```text
include('fontawesome-6/Brands/PhoenixSquadron')
```



| Illustration | PhoenixSquadron |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/PhoenixSquadron.png) | ![illustration for PhoenixSquadron](../../fontawesome-6/Brands/PhoenixSquadron.Local.png) |




## PhoenixSquadron

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PhoenixSquadron
include('fontawesome-6/Brands/PhoenixSquadron')

' renders the element
PhoenixSquadron('PhoenixSquadron', 'Phoenix Squadron', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PhoenixSquadron
include('fontawesome-6/Brands/PhoenixSquadron')

' renders the element
PhoenixSquadron('PhoenixSquadron', 'Phoenix Squadron', 'an optional tech label', 'an optional description')
@enduml
```

