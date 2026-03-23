# ThumbtackSlash


```text
fontawesome/Solid/ThumbtackSlash
```

```text
include('fontawesome/Solid/ThumbtackSlash')
```



| Illustration | ThumbtackSlash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ThumbtackSlash.png) | ![illustration for ThumbtackSlash](../../fontawesome/Solid/ThumbtackSlash.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ThumbtackSlashXs>`
- `<$ThumbtackSlashSm>`
- `<$ThumbtackSlashMd>`
- `<$ThumbtackSlashLg>`





## ThumbtackSlash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ThumbtackSlash
include('fontawesome/Solid/ThumbtackSlash')

' renders the element
ThumbtackSlash('ThumbtackSlash', 'Thumbtack Slash', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ThumbtackSlash
include('fontawesome/Solid/ThumbtackSlash')

' renders the element
ThumbtackSlash('ThumbtackSlash', 'Thumbtack Slash', 'an optional tech label', 'an optional description')
@enduml
```

