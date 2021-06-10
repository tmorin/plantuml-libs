# PhoenixSquadron


```text
fontawesome-5/Brands/PhoenixSquadron
```

```text
include('fontawesome-5/Brands/PhoenixSquadron')
```



| Illustration | PhoenixSquadron |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/PhoenixSquadron.png) | ![illustration for PhoenixSquadron](../../fontawesome-5/Brands/PhoenixSquadron.Local.png) |




## PhoenixSquadron

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PhoenixSquadron
include('fontawesome-5/Brands/PhoenixSquadron')

' renders the element
PhoenixSquadron('PhoenixSquadron', 'Phoenix Squadron', 'an optional tech label')
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

' loads the Item which embeds the element PhoenixSquadron
include('fontawesome-5/Brands/PhoenixSquadron')

' renders the element
PhoenixSquadron('PhoenixSquadron', 'Phoenix Squadron', 'an optional tech label')
@enduml
```

