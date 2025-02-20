# AwsIoTThingCar


```text
aws-q1-2025/Resource/IoT/AwsIoTThingCar
```

```text
include('aws-q1-2025/Resource/IoT/AwsIoTThingCar')
```



| Illustration | AwsIoTThingCar | AwsIoTThingCarCard | AwsIoTThingCarGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2025/Resource/IoT/AwsIoTThingCar.png) | ![illustration for AwsIoTThingCar](../../../aws-q1-2025/Resource/IoT/AwsIoTThingCar.Local.png) | ![illustration for AwsIoTThingCarCard](../../../aws-q1-2025/Resource/IoT/AwsIoTThingCarCard.Local.png) | ![illustration for AwsIoTThingCarGroup](../../../aws-q1-2025/Resource/IoT/AwsIoTThingCarGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsIoTThingCarXs>`
- `<$AwsIoTThingCarSm>`
- `<$AwsIoTThingCarMd>`
- `<$AwsIoTThingCarLg>`





## AwsIoTThingCar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTThingCar
include('aws-q1-2025/Resource/IoT/AwsIoTThingCar')

' renders the element
AwsIoTThingCar('AwsIoTThingCar', 'Aws Io T Thing Car', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsIoTThingCar
include('aws-q1-2025/Resource/IoT/AwsIoTThingCar')

' renders the element
AwsIoTThingCar('AwsIoTThingCar', 'Aws Io T Thing Car', 'an optional tech label', 'an optional description')
@enduml
```

## AwsIoTThingCarCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTThingCarCard
include('aws-q1-2025/Resource/IoT/AwsIoTThingCar')

' renders the element
AwsIoTThingCarCard('AwsIoTThingCarCard', 'Aws Io T Thing Car Card', 'an optional description')
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

' loads the Item which embeds the element AwsIoTThingCarCard
include('aws-q1-2025/Resource/IoT/AwsIoTThingCar')

' renders the element
AwsIoTThingCarCard('AwsIoTThingCarCard', 'Aws Io T Thing Car Card', 'an optional description')
@enduml
```

## AwsIoTThingCarGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTThingCarGroup
include('aws-q1-2025/Resource/IoT/AwsIoTThingCar')

' renders the element
AwsIoTThingCarGroup('AwsIoTThingCarGroup', 'Aws Io T Thing Car Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsIoTThingCarGroup
include('aws-q1-2025/Resource/IoT/AwsIoTThingCar')

' renders the element
AwsIoTThingCarGroup('AwsIoTThingCarGroup', 'Aws Io T Thing Car Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

