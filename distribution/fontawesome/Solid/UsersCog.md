# UsersCog


```text
fontawesome/Solid/UsersCog
```

```text
include('fontawesome/Solid/UsersCog')
```



| Illustration | UsersCog |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/UsersCog.png) | ![illustration for UsersCog](../../fontawesome/Solid/UsersCog.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UsersCogXs>`
- `<$UsersCogSm>`
- `<$UsersCogMd>`
- `<$UsersCogLg>`





## UsersCog

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element UsersCog
include('fontawesome/Solid/UsersCog')

' renders the element
UsersCog('UsersCog', 'Users Cog', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UsersCog
include('fontawesome/Solid/UsersCog')

' renders the element
UsersCog('UsersCog', 'Users Cog', 'an optional tech label', 'an optional description')
@enduml
```

