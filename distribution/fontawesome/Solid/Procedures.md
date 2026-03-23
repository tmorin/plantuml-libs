# Procedures


```text
fontawesome/Solid/Procedures
```

```text
include('fontawesome/Solid/Procedures')
```



| Illustration | Procedures |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Procedures.png) | ![illustration for Procedures](../../fontawesome/Solid/Procedures.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ProceduresXs>`
- `<$ProceduresSm>`
- `<$ProceduresMd>`
- `<$ProceduresLg>`





## Procedures

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Procedures
include('fontawesome/Solid/Procedures')

' renders the element
Procedures('Procedures', 'Procedures', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Procedures
include('fontawesome/Solid/Procedures')

' renders the element
Procedures('Procedures', 'Procedures', 'an optional tech label', 'an optional description')
@enduml
```

