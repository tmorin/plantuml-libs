# AnchorLock


```text
fontawesome/Solid/AnchorLock
```

```text
include('fontawesome/Solid/AnchorLock')
```



| Illustration | AnchorLock |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/AnchorLock.png) | ![illustration for AnchorLock](../../fontawesome/Solid/AnchorLock.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AnchorLockXs>`
- `<$AnchorLockSm>`
- `<$AnchorLockMd>`
- `<$AnchorLockLg>`





## AnchorLock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element AnchorLock
include('fontawesome/Solid/AnchorLock')

' renders the element
AnchorLock('AnchorLock', 'Anchor Lock', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AnchorLock
include('fontawesome/Solid/AnchorLock')

' renders the element
AnchorLock('AnchorLock', 'Anchor Lock', 'an optional tech label', 'an optional description')
@enduml
```

