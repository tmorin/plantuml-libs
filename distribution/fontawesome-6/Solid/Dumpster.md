# Dumpster


```text
fontawesome-6/Solid/Dumpster
```

```text
include('fontawesome-6/Solid/Dumpster')
```



| Illustration | Dumpster |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Dumpster.png) | ![illustration for Dumpster](../../fontawesome-6/Solid/Dumpster.Local.png) |




## Dumpster

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Dumpster
include('fontawesome-6/Solid/Dumpster')

' renders the element
Dumpster('Dumpster', 'Dumpster', 'an optional tech label')
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

' loads the Item which embeds the element Dumpster
include('fontawesome-6/Solid/Dumpster')

' renders the element
Dumpster('Dumpster', 'Dumpster', 'an optional tech label')
@enduml
```

