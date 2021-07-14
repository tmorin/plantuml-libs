# ScreenLockRotation


```text
material-4/Device/ScreenLockRotation
```

```text
include('material-4/Device/ScreenLockRotation')
```



| Illustration | ScreenLockRotation |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/ScreenLockRotation.png) | ![illustration for ScreenLockRotation](../../material-4/Device/ScreenLockRotation.Local.png) |




## ScreenLockRotation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ScreenLockRotation
include('material-4/Device/ScreenLockRotation')

' renders the element
ScreenLockRotation('ScreenLockRotation', 'Screen Lock Rotation', 'an optional tech label')
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

' loads the Item which embeds the element ScreenLockRotation
include('material-4/Device/ScreenLockRotation')

' renders the element
ScreenLockRotation('ScreenLockRotation', 'Screen Lock Rotation', 'an optional tech label')
@enduml
```

