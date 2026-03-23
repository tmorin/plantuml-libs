# Diagnoses


```text
fontawesome/Solid/Diagnoses
```

```text
include('fontawesome/Solid/Diagnoses')
```



| Illustration | Diagnoses |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Diagnoses.png) | ![illustration for Diagnoses](../../fontawesome/Solid/Diagnoses.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DiagnosesXs>`
- `<$DiagnosesSm>`
- `<$DiagnosesMd>`
- `<$DiagnosesLg>`





## Diagnoses

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Diagnoses
include('fontawesome/Solid/Diagnoses')

' renders the element
Diagnoses('Diagnoses', 'Diagnoses', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Diagnoses
include('fontawesome/Solid/Diagnoses')

' renders the element
Diagnoses('Diagnoses', 'Diagnoses', 'an optional tech label', 'an optional description')
@enduml
```

