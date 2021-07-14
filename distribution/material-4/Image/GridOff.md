# GridOff


```text
material-4/Image/GridOff
```

```text
include('material-4/Image/GridOff')
```



| Illustration | GridOff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/GridOff.png) | ![illustration for GridOff](../../material-4/Image/GridOff.Local.png) |




## GridOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element GridOff
include('material-4/Image/GridOff')

' renders the element
GridOff('GridOff', 'Grid Off', 'an optional tech label')
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

' loads the Item which embeds the element GridOff
include('material-4/Image/GridOff')

' renders the element
GridOff('GridOff', 'Grid Off', 'an optional tech label')
@enduml
```

