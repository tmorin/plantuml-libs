# UserAlt


```text
fontawesome/Solid/UserAlt
```

```text
include('fontawesome/Solid/UserAlt')
```



| Illustration | UserAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/UserAlt.png) | ![illustration for UserAlt](../../fontawesome/Solid/UserAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UserAltXs>`
- `<$UserAltSm>`
- `<$UserAltMd>`
- `<$UserAltLg>`





## UserAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element UserAlt
include('fontawesome/Solid/UserAlt')

' renders the element
UserAlt('UserAlt', 'User Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UserAlt
include('fontawesome/Solid/UserAlt')

' renders the element
UserAlt('UserAlt', 'User Alt', 'an optional tech label', 'an optional description')
@enduml
```

