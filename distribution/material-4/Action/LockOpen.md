# LockOpen


```text
material-4/Action/LockOpen
```

```text
include('material-4/Action/LockOpen')
```



| Illustration | LockOpen |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/LockOpen.png) | ![illustration for LockOpen](../../material-4/Action/LockOpen.Local.png) |




## LockOpen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LockOpen
include('material-4/Action/LockOpen')

' renders the element
LockOpen('LockOpen', 'Lock Open', 'an optional tech label')
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

' loads the Item which embeds the element LockOpen
include('material-4/Action/LockOpen')

' renders the element
LockOpen('LockOpen', 'Lock Open', 'an optional tech label')
@enduml
```

