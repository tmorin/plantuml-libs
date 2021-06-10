# Tooth


```text
fontawesome-5/Solid/Tooth
```

```text
include('fontawesome-5/Solid/Tooth')
```



| Illustration | Tooth |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Tooth.png) | ![illustration for Tooth](../../fontawesome-5/Solid/Tooth.Local.png) |




## Tooth

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Tooth
include('fontawesome-5/Solid/Tooth')

' renders the element
Tooth('Tooth', 'Tooth', 'an optional tech label')
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

' loads the Item which embeds the element Tooth
include('fontawesome-5/Solid/Tooth')

' renders the element
Tooth('Tooth', 'Tooth', 'an optional tech label')
@enduml
```

