# LaptopWindows


```text
material/Hardware/LaptopWindows
```

```text
include('material/Hardware/LaptopWindows')
```



| Illustration | LaptopWindows |
| :---: | :---: |
| ![illustration for Illustration](../../material/Hardware/LaptopWindows.png) | ![illustration for LaptopWindows](../../material/Hardware/LaptopWindows.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LaptopWindowsXs>`
- `<$LaptopWindowsSm>`
- `<$LaptopWindowsMd>`
- `<$LaptopWindowsLg>`





## LaptopWindows

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LaptopWindows
include('material/Hardware/LaptopWindows')

' renders the element
LaptopWindows('LaptopWindows', 'Laptop Windows', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LaptopWindows
include('material/Hardware/LaptopWindows')

' renders the element
LaptopWindows('LaptopWindows', 'Laptop Windows', 'an optional tech label', 'an optional description')
@enduml
```

