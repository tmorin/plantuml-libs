# UserLargeSlash


```text
fontawesome/Solid/UserLargeSlash
```

```text
include('fontawesome/Solid/UserLargeSlash')
```



| Illustration | UserLargeSlash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/UserLargeSlash.png) | ![illustration for UserLargeSlash](../../fontawesome/Solid/UserLargeSlash.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UserLargeSlashXs>`
- `<$UserLargeSlashSm>`
- `<$UserLargeSlashMd>`
- `<$UserLargeSlashLg>`





## UserLargeSlash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element UserLargeSlash
include('fontawesome/Solid/UserLargeSlash')

' renders the element
UserLargeSlash('UserLargeSlash', 'User Large Slash', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UserLargeSlash
include('fontawesome/Solid/UserLargeSlash')

' renders the element
UserLargeSlash('UserLargeSlash', 'User Large Slash', 'an optional tech label', 'an optional description')
@enduml
```

