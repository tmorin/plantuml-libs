# Prescription


```text
fontawesome/Solid/Prescription
```

```text
include('fontawesome/Solid/Prescription')
```



| Illustration | Prescription |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Prescription.png) | ![illustration for Prescription](../../fontawesome/Solid/Prescription.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PrescriptionXs>`
- `<$PrescriptionSm>`
- `<$PrescriptionMd>`
- `<$PrescriptionLg>`





## Prescription

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Prescription
include('fontawesome/Solid/Prescription')

' renders the element
Prescription('Prescription', 'Prescription', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Prescription
include('fontawesome/Solid/Prescription')

' renders the element
Prescription('Prescription', 'Prescription', 'an optional tech label', 'an optional description')
@enduml
```

