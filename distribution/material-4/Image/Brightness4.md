# Brightness4


```text
material-4/Image/Brightness4
```

```text
include('material-4/Image/Brightness4')
```



| Illustration | Brightness4 |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Brightness4.png) | ![illustration for Brightness4](../../material-4/Image/Brightness4.Local.png) |




## Brightness4

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Brightness4
include('material-4/Image/Brightness4')

' renders the element
Brightness4('Brightness4', 'Brightness4', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Brightness4
include('material-4/Image/Brightness4')

' renders the element
Brightness4('Brightness4', 'Brightness4', 'an optional tech label', 'an optional description')
@enduml
```

