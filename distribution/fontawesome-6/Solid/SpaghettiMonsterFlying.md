# SpaghettiMonsterFlying


```text
fontawesome-6/Solid/SpaghettiMonsterFlying
```

```text
include('fontawesome-6/Solid/SpaghettiMonsterFlying')
```



| Illustration | SpaghettiMonsterFlying |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/SpaghettiMonsterFlying.png) | ![illustration for SpaghettiMonsterFlying](../../fontawesome-6/Solid/SpaghettiMonsterFlying.Local.png) |




## SpaghettiMonsterFlying

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SpaghettiMonsterFlying
include('fontawesome-6/Solid/SpaghettiMonsterFlying')

' renders the element
SpaghettiMonsterFlying('SpaghettiMonsterFlying', 'Spaghetti Monster Flying', 'an optional tech label')
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

' loads the Item which embeds the element SpaghettiMonsterFlying
include('fontawesome-6/Solid/SpaghettiMonsterFlying')

' renders the element
SpaghettiMonsterFlying('SpaghettiMonsterFlying', 'Spaghetti Monster Flying', 'an optional tech label')
@enduml
```

