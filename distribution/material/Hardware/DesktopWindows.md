# DesktopWindows


```text
material/Hardware/DesktopWindows
```

```text
include('material/Hardware/DesktopWindows')
```



| Illustration | DesktopWindows |
| :---: | :---: |
| ![illustration for Illustration](../../material/Hardware/DesktopWindows.png) | ![illustration for DesktopWindows](../../material/Hardware/DesktopWindows.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DesktopWindowsXs>`
- `<$DesktopWindowsSm>`
- `<$DesktopWindowsMd>`
- `<$DesktopWindowsLg>`





## DesktopWindows

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element DesktopWindows
include('material/Hardware/DesktopWindows')

' renders the element
DesktopWindows('DesktopWindows', 'Desktop Windows', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DesktopWindows
include('material/Hardware/DesktopWindows')

' renders the element
DesktopWindows('DesktopWindows', 'Desktop Windows', 'an optional tech label', 'an optional description')
@enduml
```

