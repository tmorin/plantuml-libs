# HospitalUser


```text
fontawesome-5/Solid/HospitalUser
```

```text
include('fontawesome-5/Solid/HospitalUser')
```



| Illustration | HospitalUser |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/HospitalUser.png) | ![illustration for HospitalUser](../../fontawesome-5/Solid/HospitalUser.Local.png) |




## HospitalUser

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HospitalUser
include('fontawesome-5/Solid/HospitalUser')

' renders the element
HospitalUser('HospitalUser', 'Hospital User', 'an optional tech label')
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

' loads the Item which embeds the element HospitalUser
include('fontawesome-5/Solid/HospitalUser')

' renders the element
HospitalUser('HospitalUser', 'Hospital User', 'an optional tech label')
@enduml
```

