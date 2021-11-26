# DesktopWindows


```text
material-4/Hardware/DesktopWindows
```

```text
include('material-4/Hardware/DesktopWindows')
```



| Illustration | DesktopWindows |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/DesktopWindows.png) | ![illustration for DesktopWindows](../../material-4/Hardware/DesktopWindows.Local.png) |




## DesktopWindows

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element DesktopWindows
include('material-4/Hardware/DesktopWindows')

' renders the element
DesktopWindows('DesktopWindows', 'Desktop Windows', 'an optional tech label')
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

' loads the Item which embeds the element DesktopWindows
include('material-4/Hardware/DesktopWindows')

' renders the element
DesktopWindows('DesktopWindows', 'Desktop Windows', 'an optional tech label')
@enduml
```

