# UserNurse


```text
fontawesome/Solid/UserNurse
```

```text
include('fontawesome/Solid/UserNurse')
```



| Illustration | UserNurse |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/UserNurse.png) | ![illustration for UserNurse](../../fontawesome/Solid/UserNurse.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UserNurseXs>`
- `<$UserNurseSm>`
- `<$UserNurseMd>`
- `<$UserNurseLg>`





## UserNurse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element UserNurse
include('fontawesome/Solid/UserNurse')

' renders the element
UserNurse('UserNurse', 'User Nurse', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UserNurse
include('fontawesome/Solid/UserNurse')

' renders the element
UserNurse('UserNurse', 'User Nurse', 'an optional tech label', 'an optional description')
@enduml
```

