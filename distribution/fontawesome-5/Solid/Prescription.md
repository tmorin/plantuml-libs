# Prescription


```text
fontawesome-5/Solid/Prescription
```

```text
include('fontawesome-5/Solid/Prescription')
```



| Illustration | Prescription |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Prescription.png) | ![illustration for Prescription](../../fontawesome-5/Solid/Prescription.Local.png) |




## Prescription

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Prescription
include('fontawesome-5/Solid/Prescription')

' renders the element
Prescription('Prescription', 'Prescription', 'an optional tech label')
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

' loads the Item which embeds the element Prescription
include('fontawesome-5/Solid/Prescription')

' renders the element
Prescription('Prescription', 'Prescription', 'an optional tech label')
@enduml
```

