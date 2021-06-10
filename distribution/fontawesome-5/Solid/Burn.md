# Burn


```text
fontawesome-5/Solid/Burn
```

```text
include('fontawesome-5/Solid/Burn')
```



| Illustration | Burn |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Burn.png) | ![illustration for Burn](../../fontawesome-5/Solid/Burn.Local.png) |




## Burn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Burn
include('fontawesome-5/Solid/Burn')

' renders the element
Burn('Burn', 'Burn', 'an optional tech label')
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

' loads the Item which embeds the element Burn
include('fontawesome-5/Solid/Burn')

' renders the element
Burn('Burn', 'Burn', 'an optional tech label')
@enduml
```

