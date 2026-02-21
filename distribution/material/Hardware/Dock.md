# Dock


```text
material/Hardware/Dock
```

```text
include('material/Hardware/Dock')
```



| Illustration | Dock |
| :---: | :---: |
| ![illustration for Illustration](../../material/Hardware/Dock.png) | ![illustration for Dock](../../material/Hardware/Dock.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DockXs>`
- `<$DockSm>`
- `<$DockMd>`
- `<$DockLg>`





## Dock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Dock
include('material/Hardware/Dock')

' renders the element
Dock('Dock', 'Dock', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dock
include('material/Hardware/Dock')

' renders the element
Dock('Dock', 'Dock', 'an optional tech label', 'an optional description')
@enduml
```

