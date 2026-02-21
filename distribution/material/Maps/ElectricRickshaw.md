# ElectricRickshaw


```text
material/Maps/ElectricRickshaw
```

```text
include('material/Maps/ElectricRickshaw')
```



| Illustration | ElectricRickshaw |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/ElectricRickshaw.png) | ![illustration for ElectricRickshaw](../../material/Maps/ElectricRickshaw.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ElectricRickshawXs>`
- `<$ElectricRickshawSm>`
- `<$ElectricRickshawMd>`
- `<$ElectricRickshawLg>`





## ElectricRickshaw

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ElectricRickshaw
include('material/Maps/ElectricRickshaw')

' renders the element
ElectricRickshaw('ElectricRickshaw', 'Electric Rickshaw', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ElectricRickshaw
include('material/Maps/ElectricRickshaw')

' renders the element
ElectricRickshaw('ElectricRickshaw', 'Electric Rickshaw', 'an optional tech label', 'an optional description')
@enduml
```

