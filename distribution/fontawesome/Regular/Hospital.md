# Hospital


```text
fontawesome/Regular/Hospital
```

```text
include('fontawesome/Regular/Hospital')
```



| Illustration | Hospital |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/Hospital.png) | ![illustration for Hospital](../../fontawesome/Regular/Hospital.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HospitalXs>`
- `<$HospitalSm>`
- `<$HospitalMd>`
- `<$HospitalLg>`





## Hospital

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Hospital
include('fontawesome/Regular/Hospital')

' renders the element
Hospital('Hospital', 'Hospital', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hospital
include('fontawesome/Regular/Hospital')

' renders the element
Hospital('Hospital', 'Hospital', 'an optional tech label', 'an optional description')
@enduml
```

