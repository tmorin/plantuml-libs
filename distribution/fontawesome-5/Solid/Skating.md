# Skating


```text
fontawesome-5/Solid/Skating
```

```text
include('fontawesome-5/Solid/Skating')
```



| Illustration | Skating |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Skating.png) | ![illustration for Skating](../../fontawesome-5/Solid/Skating.Local.png) |




## Skating

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Skating
include('fontawesome-5/Solid/Skating')

' renders the element
Skating('Skating', 'Skating', 'an optional tech label')
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

' loads the Item which embeds the element Skating
include('fontawesome-5/Solid/Skating')

' renders the element
Skating('Skating', 'Skating', 'an optional tech label')
@enduml
```

