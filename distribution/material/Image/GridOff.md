# GridOff


```text
material/Image/GridOff
```

```text
include('material/Image/GridOff')
```



| Illustration | GridOff |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/GridOff.png) | ![illustration for GridOff](../../material/Image/GridOff.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GridOffXs>`
- `<$GridOffSm>`
- `<$GridOffMd>`
- `<$GridOffLg>`





## GridOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element GridOff
include('material/Image/GridOff')

' renders the element
GridOff('GridOff', 'Grid Off', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GridOff
include('material/Image/GridOff')

' renders the element
GridOff('GridOff', 'Grid Off', 'an optional tech label', 'an optional description')
@enduml
```

