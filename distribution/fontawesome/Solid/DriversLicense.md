# DriversLicense


```text
fontawesome/Solid/DriversLicense
```

```text
include('fontawesome/Solid/DriversLicense')
```



| Illustration | DriversLicense |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/DriversLicense.png) | ![illustration for DriversLicense](../../fontawesome/Solid/DriversLicense.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DriversLicenseXs>`
- `<$DriversLicenseSm>`
- `<$DriversLicenseMd>`
- `<$DriversLicenseLg>`





## DriversLicense

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element DriversLicense
include('fontawesome/Solid/DriversLicense')

' renders the element
DriversLicense('DriversLicense', 'Drivers License', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DriversLicense
include('fontawesome/Solid/DriversLicense')

' renders the element
DriversLicense('DriversLicense', 'Drivers License', 'an optional tech label', 'an optional description')
@enduml
```

