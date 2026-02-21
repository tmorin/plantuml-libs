# HospitalUser


```text
fontawesome/Solid/HospitalUser
```

```text
include('fontawesome/Solid/HospitalUser')
```



| Illustration | HospitalUser |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HospitalUser.png) | ![illustration for HospitalUser](../../fontawesome/Solid/HospitalUser.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HospitalUserXs>`
- `<$HospitalUserSm>`
- `<$HospitalUserMd>`
- `<$HospitalUserLg>`





## HospitalUser

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HospitalUser
include('fontawesome/Solid/HospitalUser')

' renders the element
HospitalUser('HospitalUser', 'Hospital User', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HospitalUser
include('fontawesome/Solid/HospitalUser')

' renders the element
HospitalUser('HospitalUser', 'Hospital User', 'an optional tech label', 'an optional description')
@enduml
```

