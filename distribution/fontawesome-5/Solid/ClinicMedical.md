# ClinicMedical


```text
fontawesome-5/Solid/ClinicMedical
```

```text
include('fontawesome-5/Solid/ClinicMedical')
```



| Illustration | ClinicMedical |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ClinicMedical.png) | ![illustration for ClinicMedical](../../fontawesome-5/Solid/ClinicMedical.Local.png) |




## ClinicMedical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ClinicMedical
include('fontawesome-5/Solid/ClinicMedical')

' renders the element
ClinicMedical('ClinicMedical', 'Clinic Medical', 'an optional tech label')
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

' loads the Item which embeds the element ClinicMedical
include('fontawesome-5/Solid/ClinicMedical')

' renders the element
ClinicMedical('ClinicMedical', 'Clinic Medical', 'an optional tech label')
@enduml
```

