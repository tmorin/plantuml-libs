# UserTimes


```text
fontawesome/Solid/UserTimes
```

```text
include('fontawesome/Solid/UserTimes')
```



| Illustration | UserTimes |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/UserTimes.png) | ![illustration for UserTimes](../../fontawesome/Solid/UserTimes.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UserTimesXs>`
- `<$UserTimesSm>`
- `<$UserTimesMd>`
- `<$UserTimesLg>`





## UserTimes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element UserTimes
include('fontawesome/Solid/UserTimes')

' renders the element
UserTimes('UserTimes', 'User Times', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UserTimes
include('fontawesome/Solid/UserTimes')

' renders the element
UserTimes('UserTimes', 'User Times', 'an optional tech label', 'an optional description')
@enduml
```

