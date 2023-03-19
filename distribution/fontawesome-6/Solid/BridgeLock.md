# BridgeLock


```text
fontawesome-6/Solid/BridgeLock
```

```text
include('fontawesome-6/Solid/BridgeLock')
```



| Illustration | BridgeLock |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BridgeLock.png) | ![illustration for BridgeLock](../../fontawesome-6/Solid/BridgeLock.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BridgeLockXs>`
- `<$BridgeLockSm>`
- `<$BridgeLockMd>`
- `<$BridgeLockLg>`





## BridgeLock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BridgeLock
include('fontawesome-6/Solid/BridgeLock')

' renders the element
BridgeLock('BridgeLock', 'Bridge Lock', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BridgeLock
include('fontawesome-6/Solid/BridgeLock')

' renders the element
BridgeLock('BridgeLock', 'Bridge Lock', 'an optional tech label', 'an optional description')
@enduml
```

