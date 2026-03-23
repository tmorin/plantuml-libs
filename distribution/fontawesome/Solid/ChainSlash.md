# ChainSlash


```text
fontawesome/Solid/ChainSlash
```

```text
include('fontawesome/Solid/ChainSlash')
```



| Illustration | ChainSlash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ChainSlash.png) | ![illustration for ChainSlash](../../fontawesome/Solid/ChainSlash.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChainSlashXs>`
- `<$ChainSlashSm>`
- `<$ChainSlashMd>`
- `<$ChainSlashLg>`





## ChainSlash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ChainSlash
include('fontawesome/Solid/ChainSlash')

' renders the element
ChainSlash('ChainSlash', 'Chain Slash', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ChainSlash
include('fontawesome/Solid/ChainSlash')

' renders the element
ChainSlash('ChainSlash', 'Chain Slash', 'an optional tech label', 'an optional description')
@enduml
```

