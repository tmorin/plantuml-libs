# ScreenLockPortrait


```text
material/Device/ScreenLockPortrait
```

```text
include('material/Device/ScreenLockPortrait')
```



| Illustration | ScreenLockPortrait |
| :---: | :---: |
| ![illustration for Illustration](../../material/Device/ScreenLockPortrait.png) | ![illustration for ScreenLockPortrait](../../material/Device/ScreenLockPortrait.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ScreenLockPortraitXs>`
- `<$ScreenLockPortraitSm>`
- `<$ScreenLockPortraitMd>`
- `<$ScreenLockPortraitLg>`





## ScreenLockPortrait

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ScreenLockPortrait
include('material/Device/ScreenLockPortrait')

' renders the element
ScreenLockPortrait('ScreenLockPortrait', 'Screen Lock Portrait', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ScreenLockPortrait
include('material/Device/ScreenLockPortrait')

' renders the element
ScreenLockPortrait('ScreenLockPortrait', 'Screen Lock Portrait', 'an optional tech label', 'an optional description')
@enduml
```

