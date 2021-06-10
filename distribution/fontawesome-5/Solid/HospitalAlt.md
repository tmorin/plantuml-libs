# HospitalAlt


```text
fontawesome-5/Solid/HospitalAlt
```

```text
include('fontawesome-5/Solid/HospitalAlt')
```



| Illustration | HospitalAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/HospitalAlt.png) | ![illustration for HospitalAlt](../../fontawesome-5/Solid/HospitalAlt.Local.png) |




## HospitalAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HospitalAlt
include('fontawesome-5/Solid/HospitalAlt')

' renders the element
HospitalAlt('HospitalAlt', 'Hospital Alt', 'an optional tech label')
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

' loads the Item which embeds the element HospitalAlt
include('fontawesome-5/Solid/HospitalAlt')

' renders the element
HospitalAlt('HospitalAlt', 'Hospital Alt', 'an optional tech label')
@enduml
```

