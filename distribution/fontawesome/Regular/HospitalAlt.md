# HospitalAlt


```text
fontawesome/Regular/HospitalAlt
```

```text
include('fontawesome/Regular/HospitalAlt')
```



| Illustration | HospitalAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/HospitalAlt.png) | ![illustration for HospitalAlt](../../fontawesome/Regular/HospitalAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HospitalAltXs>`
- `<$HospitalAltSm>`
- `<$HospitalAltMd>`
- `<$HospitalAltLg>`





## HospitalAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HospitalAlt
include('fontawesome/Regular/HospitalAlt')

' renders the element
HospitalAlt('HospitalAlt', 'Hospital Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HospitalAlt
include('fontawesome/Regular/HospitalAlt')

' renders the element
HospitalAlt('HospitalAlt', 'Hospital Alt', 'an optional tech label', 'an optional description')
@enduml
```

