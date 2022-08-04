# DeveloperBoard


```text
material-4/Hardware/DeveloperBoard
```

```text
include('material-4/Hardware/DeveloperBoard')
```



| Illustration | DeveloperBoard |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/DeveloperBoard.png) | ![illustration for DeveloperBoard](../../material-4/Hardware/DeveloperBoard.Local.png) |




## DeveloperBoard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element DeveloperBoard
include('material-4/Hardware/DeveloperBoard')

' renders the element
DeveloperBoard('DeveloperBoard', 'Developer Board', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DeveloperBoard
include('material-4/Hardware/DeveloperBoard')

' renders the element
DeveloperBoard('DeveloperBoard', 'Developer Board', 'an optional tech label', 'an optional description')
@enduml
```

