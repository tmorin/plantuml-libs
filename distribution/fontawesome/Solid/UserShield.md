# UserShield


```text
fontawesome/Solid/UserShield
```

```text
include('fontawesome/Solid/UserShield')
```



| Illustration | UserShield |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/UserShield.png) | ![illustration for UserShield](../../fontawesome/Solid/UserShield.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UserShieldXs>`
- `<$UserShieldSm>`
- `<$UserShieldMd>`
- `<$UserShieldLg>`





## UserShield

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element UserShield
include('fontawesome/Solid/UserShield')

' renders the element
UserShield('UserShield', 'User Shield', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UserShield
include('fontawesome/Solid/UserShield')

' renders the element
UserShield('UserShield', 'User Shield', 'an optional tech label', 'an optional description')
@enduml
```

