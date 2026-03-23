# UserCog


```text
fontawesome/Solid/UserCog
```

```text
include('fontawesome/Solid/UserCog')
```



| Illustration | UserCog |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/UserCog.png) | ![illustration for UserCog](../../fontawesome/Solid/UserCog.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UserCogXs>`
- `<$UserCogSm>`
- `<$UserCogMd>`
- `<$UserCogLg>`





## UserCog

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element UserCog
include('fontawesome/Solid/UserCog')

' renders the element
UserCog('UserCog', 'User Cog', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UserCog
include('fontawesome/Solid/UserCog')

' renders the element
UserCog('UserCog', 'User Cog', 'an optional tech label', 'an optional description')
@enduml
```

