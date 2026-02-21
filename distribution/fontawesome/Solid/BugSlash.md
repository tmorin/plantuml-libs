# BugSlash


```text
fontawesome/Solid/BugSlash
```

```text
include('fontawesome/Solid/BugSlash')
```



| Illustration | BugSlash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BugSlash.png) | ![illustration for BugSlash](../../fontawesome/Solid/BugSlash.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BugSlashXs>`
- `<$BugSlashSm>`
- `<$BugSlashMd>`
- `<$BugSlashLg>`





## BugSlash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BugSlash
include('fontawesome/Solid/BugSlash')

' renders the element
BugSlash('BugSlash', 'Bug Slash', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BugSlash
include('fontawesome/Solid/BugSlash')

' renders the element
BugSlash('BugSlash', 'Bug Slash', 'an optional tech label', 'an optional description')
@enduml
```

