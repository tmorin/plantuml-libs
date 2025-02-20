# AwsIoTThingTravel


```text
aws-q1-2025/Resource/IoT/AwsIoTThingTravel
```

```text
include('aws-q1-2025/Resource/IoT/AwsIoTThingTravel')
```



| Illustration | AwsIoTThingTravel | AwsIoTThingTravelCard | AwsIoTThingTravelGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2025/Resource/IoT/AwsIoTThingTravel.png) | ![illustration for AwsIoTThingTravel](../../../aws-q1-2025/Resource/IoT/AwsIoTThingTravel.Local.png) | ![illustration for AwsIoTThingTravelCard](../../../aws-q1-2025/Resource/IoT/AwsIoTThingTravelCard.Local.png) | ![illustration for AwsIoTThingTravelGroup](../../../aws-q1-2025/Resource/IoT/AwsIoTThingTravelGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsIoTThingTravelXs>`
- `<$AwsIoTThingTravelSm>`
- `<$AwsIoTThingTravelMd>`
- `<$AwsIoTThingTravelLg>`





## AwsIoTThingTravel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTThingTravel
include('aws-q1-2025/Resource/IoT/AwsIoTThingTravel')

' renders the element
AwsIoTThingTravel('AwsIoTThingTravel', 'Aws Io T Thing Travel', 'an optional tech label', 'an optional description')
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTThingTravel
include('aws-q1-2025/Resource/IoT/AwsIoTThingTravel')

' renders the element
AwsIoTThingTravel('AwsIoTThingTravel', 'Aws Io T Thing Travel', 'an optional tech label', 'an optional description')
@enduml
```

## AwsIoTThingTravelCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTThingTravelCard
include('aws-q1-2025/Resource/IoT/AwsIoTThingTravel')

' renders the element
AwsIoTThingTravelCard('AwsIoTThingTravelCard', 'Aws Io T Thing Travel Card', 'an optional description')
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTThingTravelCard
include('aws-q1-2025/Resource/IoT/AwsIoTThingTravel')

' renders the element
AwsIoTThingTravelCard('AwsIoTThingTravelCard', 'Aws Io T Thing Travel Card', 'an optional description')
@enduml
```

## AwsIoTThingTravelGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTThingTravelGroup
include('aws-q1-2025/Resource/IoT/AwsIoTThingTravel')

' renders the element
AwsIoTThingTravelGroup('AwsIoTThingTravelGroup', 'Aws Io T Thing Travel Group', 'an optional tech label') {
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTThingTravelGroup
include('aws-q1-2025/Resource/IoT/AwsIoTThingTravel')

' renders the element
AwsIoTThingTravelGroup('AwsIoTThingTravelGroup', 'Aws Io T Thing Travel Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

