# ChainBroken


```text
fontawesome/Solid/ChainBroken
```

```text
include('fontawesome/Solid/ChainBroken')
```



| Illustration | ChainBroken |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ChainBroken.png) | ![illustration for ChainBroken](../../fontawesome/Solid/ChainBroken.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChainBrokenXs>`
- `<$ChainBrokenSm>`
- `<$ChainBrokenMd>`
- `<$ChainBrokenLg>`





## ChainBroken

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ChainBroken
include('fontawesome/Solid/ChainBroken')

' renders the element
ChainBroken('ChainBroken', 'Chain Broken', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ChainBroken
include('fontawesome/Solid/ChainBroken')

' renders the element
ChainBroken('ChainBroken', 'Chain Broken', 'an optional tech label', 'an optional description')
@enduml
```

