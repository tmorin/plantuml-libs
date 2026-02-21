# LockClock


```text
material/Action/LockClock
```

```text
include('material/Action/LockClock')
```



| Illustration | LockClock |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/LockClock.png) | ![illustration for LockClock](../../material/Action/LockClock.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LockClockXs>`
- `<$LockClockSm>`
- `<$LockClockMd>`
- `<$LockClockLg>`





## LockClock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LockClock
include('material/Action/LockClock')

' renders the element
LockClock('LockClock', 'Lock Clock', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element LockClock
include('material/Action/LockClock')

' renders the element
LockClock('LockClock', 'Lock Clock', 'an optional tech label', 'an optional description')
@enduml
```

