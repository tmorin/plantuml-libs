# ElectricRickshaw


```text
material-4/Maps/ElectricRickshaw
```

```text
include('material-4/Maps/ElectricRickshaw')
```



| Illustration | ElectricRickshaw |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/ElectricRickshaw.png) | ![illustration for ElectricRickshaw](../../material-4/Maps/ElectricRickshaw.Local.png) |




## ElectricRickshaw

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ElectricRickshaw
include('material-4/Maps/ElectricRickshaw')

' renders the element
ElectricRickshaw('ElectricRickshaw', 'Electric Rickshaw', 'an optional tech label')
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

' loads the Item which embeds the element ElectricRickshaw
include('material-4/Maps/ElectricRickshaw')

' renders the element
ElectricRickshaw('ElectricRickshaw', 'Electric Rickshaw', 'an optional tech label')
@enduml
```

