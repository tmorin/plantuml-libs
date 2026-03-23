# Satellite


```text
aws/Category/Satellite
```

```text
include('aws/Category/Satellite')
```



| Illustration | Satellite | SatelliteCard | SatelliteGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../aws/Category/Satellite.png) | ![illustration for Satellite](../../aws/Category/Satellite.Local.png) | ![illustration for SatelliteCard](../../aws/Category/SatelliteCard.Local.png) | ![illustration for SatelliteGroup](../../aws/Category/SatelliteGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SatelliteXs>`
- `<$SatelliteSm>`
- `<$SatelliteMd>`
- `<$SatelliteLg>`





## Satellite

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element Satellite
include('aws/Category/Satellite')

' renders the element
Satellite('Satellite', 'Satellite', 'an optional tech label', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element Satellite
include('aws/Category/Satellite')

' renders the element
Satellite('Satellite', 'Satellite', 'an optional tech label', 'an optional description')
@enduml
```

## SatelliteCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element SatelliteCard
include('aws/Category/Satellite')

' renders the element
SatelliteCard('SatelliteCard', 'Satellite Card', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element SatelliteCard
include('aws/Category/Satellite')

' renders the element
SatelliteCard('SatelliteCard', 'Satellite Card', 'an optional description')
@enduml
```

## SatelliteGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element SatelliteGroup
include('aws/Category/Satellite')

' renders the element
SatelliteGroup('SatelliteGroup', 'Satellite Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
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
include('aws/bootstrap')

' loads the Item which embeds the element SatelliteGroup
include('aws/Category/Satellite')

' renders the element
SatelliteGroup('SatelliteGroup', 'Satellite Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

