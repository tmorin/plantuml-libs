# ClinicMedical


```text
fontawesome/Solid/ClinicMedical
```

```text
include('fontawesome/Solid/ClinicMedical')
```



| Illustration | ClinicMedical |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ClinicMedical.png) | ![illustration for ClinicMedical](../../fontawesome/Solid/ClinicMedical.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ClinicMedicalXs>`
- `<$ClinicMedicalSm>`
- `<$ClinicMedicalMd>`
- `<$ClinicMedicalLg>`





## ClinicMedical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ClinicMedical
include('fontawesome/Solid/ClinicMedical')

' renders the element
ClinicMedical('ClinicMedical', 'Clinic Medical', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ClinicMedical
include('fontawesome/Solid/ClinicMedical')

' renders the element
ClinicMedical('ClinicMedical', 'Clinic Medical', 'an optional tech label', 'an optional description')
@enduml
```

