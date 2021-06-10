# AwsGroundStation


```text
aws-20210131/Architecture/Satellite/AwsGroundStation
```

```text
include('aws-20210131/Architecture/Satellite/AwsGroundStation')
```



| Illustration | AwsGroundStation | AwsGroundStationCard | AwsGroundStationGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/Satellite/AwsGroundStation.png) | ![illustration for AwsGroundStation](../../../aws-20210131/Architecture/Satellite/AwsGroundStation.Local.png) | ![illustration for AwsGroundStationCard](../../../aws-20210131/Architecture/Satellite/AwsGroundStationCard.Local.png) | ![illustration for AwsGroundStationGroup](../../../aws-20210131/Architecture/Satellite/AwsGroundStationGroup.Local.png) |




## AwsGroundStation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsGroundStation
include('aws-20210131/Architecture/Satellite/AwsGroundStation')

' renders the element
AwsGroundStation('AwsGroundStation', 'Aws Ground Station', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsGroundStation
include('aws-20210131/Architecture/Satellite/AwsGroundStation')

' renders the element
AwsGroundStation('AwsGroundStation', 'Aws Ground Station', 'an optional tech label')
@enduml
```

## AwsGroundStationCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsGroundStationCard
include('aws-20210131/Architecture/Satellite/AwsGroundStation')

' renders the element
AwsGroundStationCard('AwsGroundStationCard', 'Aws Ground Station Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsGroundStationCard
include('aws-20210131/Architecture/Satellite/AwsGroundStation')

' renders the element
AwsGroundStationCard('AwsGroundStationCard', 'Aws Ground Station Card', 'an optional description')
@enduml
```

## AwsGroundStationGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsGroundStationGroup
include('aws-20210131/Architecture/Satellite/AwsGroundStation')

' renders the element
AwsGroundStationGroup('AwsGroundStationGroup', 'Aws Ground Station Group', 'an optional tech label') {
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
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsGroundStationGroup
include('aws-20210131/Architecture/Satellite/AwsGroundStation')

' renders the element
AwsGroundStationGroup('AwsGroundStationGroup', 'Aws Ground Station Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

