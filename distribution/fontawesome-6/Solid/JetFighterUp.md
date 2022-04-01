# JetFighterUp


```text
fontawesome-6/Solid/JetFighterUp
```

```text
include('fontawesome-6/Solid/JetFighterUp')
```



| Illustration | JetFighterUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/JetFighterUp.png) | ![illustration for JetFighterUp](../../fontawesome-6/Solid/JetFighterUp.Local.png) |




## JetFighterUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element JetFighterUp
include('fontawesome-6/Solid/JetFighterUp')

' renders the element
JetFighterUp('JetFighterUp', 'Jet Fighter Up', 'an optional tech label')
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

' loads the Item which embeds the element JetFighterUp
include('fontawesome-6/Solid/JetFighterUp')

' renders the element
JetFighterUp('JetFighterUp', 'Jet Fighter Up', 'an optional tech label')
@enduml
```

