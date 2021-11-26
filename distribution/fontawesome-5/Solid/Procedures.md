# Procedures


```text
fontawesome-5/Solid/Procedures
```

```text
include('fontawesome-5/Solid/Procedures')
```



| Illustration | Procedures |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Procedures.png) | ![illustration for Procedures](../../fontawesome-5/Solid/Procedures.Local.png) |




## Procedures

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Procedures
include('fontawesome-5/Solid/Procedures')

' renders the element
Procedures('Procedures', 'Procedures', 'an optional tech label')
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

' loads the Item which embeds the element Procedures
include('fontawesome-5/Solid/Procedures')

' renders the element
Procedures('Procedures', 'Procedures', 'an optional tech label')
@enduml
```

