# Satellite


```text
aws-20210730/Category/Satellite
```

```text
include('aws-20210730/Category/Satellite')
```



| Illustration | Satellite | SatelliteCard | SatelliteGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../aws-20210730/Category/Satellite.png) | ![illustration for Satellite](../../aws-20210730/Category/Satellite.Local.png) | ![illustration for SatelliteCard](../../aws-20210730/Category/SatelliteCard.Local.png) | ![illustration for SatelliteGroup](../../aws-20210730/Category/SatelliteGroup.Local.png) |




## Satellite

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element Satellite
include('aws-20210730/Category/Satellite')

' renders the element
Satellite('Satellite', 'Satellite', 'an optional tech label')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element Satellite
include('aws-20210730/Category/Satellite')

' renders the element
Satellite('Satellite', 'Satellite', 'an optional tech label')
@enduml
```

## SatelliteCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element SatelliteCard
include('aws-20210730/Category/Satellite')

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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element SatelliteCard
include('aws-20210730/Category/Satellite')

' renders the element
SatelliteCard('SatelliteCard', 'Satellite Card', 'an optional description')
@enduml
```

## SatelliteGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element SatelliteGroup
include('aws-20210730/Category/Satellite')

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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element SatelliteGroup
include('aws-20210730/Category/Satellite')

' renders the element
SatelliteGroup('SatelliteGroup', 'Satellite Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

