# AwsIoTThingCoffeePot


```text
aws-q2-2024/Resource/IoT/AwsIoTThingCoffeePot
```

```text
include('aws-q2-2024/Resource/IoT/AwsIoTThingCoffeePot')
```



| Illustration | AwsIoTThingCoffeePot | AwsIoTThingCoffeePotCard | AwsIoTThingCoffeePotGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2024/Resource/IoT/AwsIoTThingCoffeePot.png) | ![illustration for AwsIoTThingCoffeePot](../../../aws-q2-2024/Resource/IoT/AwsIoTThingCoffeePot.Local.png) | ![illustration for AwsIoTThingCoffeePotCard](../../../aws-q2-2024/Resource/IoT/AwsIoTThingCoffeePotCard.Local.png) | ![illustration for AwsIoTThingCoffeePotGroup](../../../aws-q2-2024/Resource/IoT/AwsIoTThingCoffeePotGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsIoTThingCoffeePotXs>`
- `<$AwsIoTThingCoffeePotSm>`
- `<$AwsIoTThingCoffeePotMd>`
- `<$AwsIoTThingCoffeePotLg>`





## AwsIoTThingCoffeePot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsIoTThingCoffeePot
include('aws-q2-2024/Resource/IoT/AwsIoTThingCoffeePot')

' renders the element
AwsIoTThingCoffeePot('AwsIoTThingCoffeePot', 'Aws Io T Thing Coffee Pot', 'an optional tech label', 'an optional description')
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsIoTThingCoffeePot
include('aws-q2-2024/Resource/IoT/AwsIoTThingCoffeePot')

' renders the element
AwsIoTThingCoffeePot('AwsIoTThingCoffeePot', 'Aws Io T Thing Coffee Pot', 'an optional tech label', 'an optional description')
@enduml
```

## AwsIoTThingCoffeePotCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsIoTThingCoffeePotCard
include('aws-q2-2024/Resource/IoT/AwsIoTThingCoffeePot')

' renders the element
AwsIoTThingCoffeePotCard('AwsIoTThingCoffeePotCard', 'Aws Io T Thing Coffee Pot Card', 'an optional description')
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsIoTThingCoffeePotCard
include('aws-q2-2024/Resource/IoT/AwsIoTThingCoffeePot')

' renders the element
AwsIoTThingCoffeePotCard('AwsIoTThingCoffeePotCard', 'Aws Io T Thing Coffee Pot Card', 'an optional description')
@enduml
```

## AwsIoTThingCoffeePotGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsIoTThingCoffeePotGroup
include('aws-q2-2024/Resource/IoT/AwsIoTThingCoffeePot')

' renders the element
AwsIoTThingCoffeePotGroup('AwsIoTThingCoffeePotGroup', 'Aws Io T Thing Coffee Pot Group', 'an optional tech label') {
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsIoTThingCoffeePotGroup
include('aws-q2-2024/Resource/IoT/AwsIoTThingCoffeePot')

' renders the element
AwsIoTThingCoffeePotGroup('AwsIoTThingCoffeePotGroup', 'Aws Io T Thing Coffee Pot Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

