# ScreenLockPortrait


```text
material-4/Device/ScreenLockPortrait
```

```text
include('material-4/Device/ScreenLockPortrait')
```



| Illustration | ScreenLockPortrait |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/ScreenLockPortrait.png) | ![illustration for ScreenLockPortrait](../../material-4/Device/ScreenLockPortrait.Local.png) |




## ScreenLockPortrait

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ScreenLockPortrait
include('material-4/Device/ScreenLockPortrait')

' renders the element
ScreenLockPortrait('ScreenLockPortrait', 'Screen Lock Portrait', 'an optional tech label')
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

' loads the Item which embeds the element ScreenLockPortrait
include('material-4/Device/ScreenLockPortrait')

' renders the element
ScreenLockPortrait('ScreenLockPortrait', 'Screen Lock Portrait', 'an optional tech label')
@enduml
```

