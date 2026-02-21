# UserInjured


```text
fontawesome/Solid/UserInjured
```

```text
include('fontawesome/Solid/UserInjured')
```



| Illustration | UserInjured |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/UserInjured.png) | ![illustration for UserInjured](../../fontawesome/Solid/UserInjured.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UserInjuredXs>`
- `<$UserInjuredSm>`
- `<$UserInjuredMd>`
- `<$UserInjuredLg>`





## UserInjured

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element UserInjured
include('fontawesome/Solid/UserInjured')

' renders the element
UserInjured('UserInjured', 'User Injured', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UserInjured
include('fontawesome/Solid/UserInjured')

' renders the element
UserInjured('UserInjured', 'User Injured', 'an optional tech label', 'an optional description')
@enduml
```

