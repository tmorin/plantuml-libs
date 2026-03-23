# UserAltSlash


```text
fontawesome/Solid/UserAltSlash
```

```text
include('fontawesome/Solid/UserAltSlash')
```



| Illustration | UserAltSlash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/UserAltSlash.png) | ![illustration for UserAltSlash](../../fontawesome/Solid/UserAltSlash.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UserAltSlashXs>`
- `<$UserAltSlashSm>`
- `<$UserAltSlashMd>`
- `<$UserAltSlashLg>`





## UserAltSlash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element UserAltSlash
include('fontawesome/Solid/UserAltSlash')

' renders the element
UserAltSlash('UserAltSlash', 'User Alt Slash', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UserAltSlash
include('fontawesome/Solid/UserAltSlash')

' renders the element
UserAltSlash('UserAltSlash', 'User Alt Slash', 'an optional tech label', 'an optional description')
@enduml
```

