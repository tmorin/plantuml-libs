# Tooth


```text
fontawesome-6/Solid/Tooth
```

```text
include('fontawesome-6/Solid/Tooth')
```



| Illustration | Tooth |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Tooth.png) | ![illustration for Tooth](../../fontawesome-6/Solid/Tooth.Local.png) |




## Tooth

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Tooth
include('fontawesome-6/Solid/Tooth')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Tooth
include('fontawesome-6/Solid/Tooth')

' renders the element
Tooth('Tooth', 'Tooth', 'an optional tech label')
@enduml
```

