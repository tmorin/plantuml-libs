# Ribbon


```text
fontawesome-6/Solid/Ribbon
```

```text
include('fontawesome-6/Solid/Ribbon')
```



| Illustration | Ribbon |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Ribbon.png) | ![illustration for Ribbon](../../fontawesome-6/Solid/Ribbon.Local.png) |




## Ribbon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Ribbon
include('fontawesome-6/Solid/Ribbon')

' renders the element
Ribbon('Ribbon', 'Ribbon', 'an optional tech label')
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

' loads the Item which embeds the element Ribbon
include('fontawesome-6/Solid/Ribbon')

' renders the element
Ribbon('Ribbon', 'Ribbon', 'an optional tech label')
@enduml
```

