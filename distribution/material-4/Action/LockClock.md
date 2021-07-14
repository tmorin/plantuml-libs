# LockClock


```text
material-4/Action/LockClock
```

```text
include('material-4/Action/LockClock')
```



| Illustration | LockClock |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/LockClock.png) | ![illustration for LockClock](../../material-4/Action/LockClock.Local.png) |




## LockClock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LockClock
include('material-4/Action/LockClock')

' renders the element
LockClock('LockClock', 'Lock Clock', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element LockClock
include('material-4/Action/LockClock')

' renders the element
LockClock('LockClock', 'Lock Clock', 'an optional tech label')
@enduml
```

