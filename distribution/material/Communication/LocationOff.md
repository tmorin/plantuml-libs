# LocationOff


```text
material/Communication/LocationOff
```

```text
include('material/Communication/LocationOff')
```



| Illustration | LocationOff |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/LocationOff.png) | ![illustration for LocationOff](../../material/Communication/LocationOff.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LocationOffXs>`
- `<$LocationOffSm>`
- `<$LocationOffMd>`
- `<$LocationOffLg>`





## LocationOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LocationOff
include('material/Communication/LocationOff')

' renders the element
LocationOff('LocationOff', 'Location Off', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LocationOff
include('material/Communication/LocationOff')

' renders the element
LocationOff('LocationOff', 'Location Off', 'an optional tech label', 'an optional description')
@enduml
```

