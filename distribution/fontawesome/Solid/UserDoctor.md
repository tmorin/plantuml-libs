# UserDoctor


```text
fontawesome/Solid/UserDoctor
```

```text
include('fontawesome/Solid/UserDoctor')
```



| Illustration | UserDoctor |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/UserDoctor.png) | ![illustration for UserDoctor](../../fontawesome/Solid/UserDoctor.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UserDoctorXs>`
- `<$UserDoctorSm>`
- `<$UserDoctorMd>`
- `<$UserDoctorLg>`





## UserDoctor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element UserDoctor
include('fontawesome/Solid/UserDoctor')

' renders the element
UserDoctor('UserDoctor', 'User Doctor', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UserDoctor
include('fontawesome/Solid/UserDoctor')

' renders the element
UserDoctor('UserDoctor', 'User Doctor', 'an optional tech label', 'an optional description')
@enduml
```

