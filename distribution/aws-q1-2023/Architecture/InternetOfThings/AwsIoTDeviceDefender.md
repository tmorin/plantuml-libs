# AwsIoTDeviceDefender


```text
aws-q1-2023/Architecture/InternetOfThings/AwsIoTDeviceDefender
```

```text
include('aws-q1-2023/Architecture/InternetOfThings/AwsIoTDeviceDefender')
```



| Illustration | AwsIoTDeviceDefender | AwsIoTDeviceDefenderCard | AwsIoTDeviceDefenderGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Architecture/InternetOfThings/AwsIoTDeviceDefender.png) | ![illustration for AwsIoTDeviceDefender](../../../aws-q1-2023/Architecture/InternetOfThings/AwsIoTDeviceDefender.Local.png) | ![illustration for AwsIoTDeviceDefenderCard](../../../aws-q1-2023/Architecture/InternetOfThings/AwsIoTDeviceDefenderCard.Local.png) | ![illustration for AwsIoTDeviceDefenderGroup](../../../aws-q1-2023/Architecture/InternetOfThings/AwsIoTDeviceDefenderGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsIoTDeviceDefenderXs>`
- `<$AwsIoTDeviceDefenderSm>`
- `<$AwsIoTDeviceDefenderMd>`
- `<$AwsIoTDeviceDefenderLg>`





## AwsIoTDeviceDefender

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsIoTDeviceDefender
include('aws-q1-2023/Architecture/InternetOfThings/AwsIoTDeviceDefender')

' renders the element
AwsIoTDeviceDefender('AwsIoTDeviceDefender', 'Aws Io T Device Defender', 'an optional tech label', 'an optional description')
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsIoTDeviceDefender
include('aws-q1-2023/Architecture/InternetOfThings/AwsIoTDeviceDefender')

' renders the element
AwsIoTDeviceDefender('AwsIoTDeviceDefender', 'Aws Io T Device Defender', 'an optional tech label', 'an optional description')
@enduml
```

## AwsIoTDeviceDefenderCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsIoTDeviceDefenderCard
include('aws-q1-2023/Architecture/InternetOfThings/AwsIoTDeviceDefender')

' renders the element
AwsIoTDeviceDefenderCard('AwsIoTDeviceDefenderCard', 'Aws Io T Device Defender Card', 'an optional description')
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsIoTDeviceDefenderCard
include('aws-q1-2023/Architecture/InternetOfThings/AwsIoTDeviceDefender')

' renders the element
AwsIoTDeviceDefenderCard('AwsIoTDeviceDefenderCard', 'Aws Io T Device Defender Card', 'an optional description')
@enduml
```

## AwsIoTDeviceDefenderGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsIoTDeviceDefenderGroup
include('aws-q1-2023/Architecture/InternetOfThings/AwsIoTDeviceDefender')

' renders the element
AwsIoTDeviceDefenderGroup('AwsIoTDeviceDefenderGroup', 'Aws Io T Device Defender Group', 'an optional tech label') {
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsIoTDeviceDefenderGroup
include('aws-q1-2023/Architecture/InternetOfThings/AwsIoTDeviceDefender')

' renders the element
AwsIoTDeviceDefenderGroup('AwsIoTDeviceDefenderGroup', 'Aws Io T Device Defender Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

