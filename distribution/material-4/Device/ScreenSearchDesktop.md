# ScreenSearchDesktop


```text
material-4/Device/ScreenSearchDesktop
```

```text
include('material-4/Device/ScreenSearchDesktop')
```



| Illustration | ScreenSearchDesktop |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/ScreenSearchDesktop.png) | ![illustration for ScreenSearchDesktop](../../material-4/Device/ScreenSearchDesktop.Local.png) |




## ScreenSearchDesktop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ScreenSearchDesktop
include('material-4/Device/ScreenSearchDesktop')

' renders the element
ScreenSearchDesktop('ScreenSearchDesktop', 'Screen Search Desktop', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ScreenSearchDesktop
include('material-4/Device/ScreenSearchDesktop')

' renders the element
ScreenSearchDesktop('ScreenSearchDesktop', 'Screen Search Desktop', 'an optional tech label', 'an optional description')
@enduml
```

