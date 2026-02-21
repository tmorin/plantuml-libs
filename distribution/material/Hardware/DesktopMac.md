# DesktopMac


```text
material/Hardware/DesktopMac
```

```text
include('material/Hardware/DesktopMac')
```



| Illustration | DesktopMac |
| :---: | :---: |
| ![illustration for Illustration](../../material/Hardware/DesktopMac.png) | ![illustration for DesktopMac](../../material/Hardware/DesktopMac.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DesktopMacXs>`
- `<$DesktopMacSm>`
- `<$DesktopMacMd>`
- `<$DesktopMacLg>`





## DesktopMac

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element DesktopMac
include('material/Hardware/DesktopMac')

' renders the element
DesktopMac('DesktopMac', 'Desktop Mac', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DesktopMac
include('material/Hardware/DesktopMac')

' renders the element
DesktopMac('DesktopMac', 'Desktop Mac', 'an optional tech label', 'an optional description')
@enduml
```

