# Dock


```text
material-4/Hardware/Dock
```

```text
include('material-4/Hardware/Dock')
```



| Illustration | Dock |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/Dock.png) | ![illustration for Dock](../../material-4/Hardware/Dock.Local.png) |




## Dock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Dock
include('material-4/Hardware/Dock')

' renders the element
Dock('Dock', 'Dock', 'an optional tech label')
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

' loads the Item which embeds the element Dock
include('material-4/Hardware/Dock')

' renders the element
Dock('Dock', 'Dock', 'an optional tech label')
@enduml
```

