# AwsIoTThingPlc


```text
aws-q3-2021/Resource/LoT/AwsIoTThingPlc
```

```text
include('aws-q3-2021/Resource/LoT/AwsIoTThingPlc')
```



| Illustration | AwsIoTThingPlc | AwsIoTThingPlcCard | AwsIoTThingPlcGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Resource/LoT/AwsIoTThingPlc.png) | ![illustration for AwsIoTThingPlc](../../../aws-q3-2021/Resource/LoT/AwsIoTThingPlc.Local.png) | ![illustration for AwsIoTThingPlcCard](../../../aws-q3-2021/Resource/LoT/AwsIoTThingPlcCard.Local.png) | ![illustration for AwsIoTThingPlcGroup](../../../aws-q3-2021/Resource/LoT/AwsIoTThingPlcGroup.Local.png) |




## AwsIoTThingPlc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsIoTThingPlc
include('aws-q3-2021/Resource/LoT/AwsIoTThingPlc')

' renders the element
AwsIoTThingPlc('AwsIoTThingPlc', 'Aws Io T Thing Plc', 'an optional tech label')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsIoTThingPlc
include('aws-q3-2021/Resource/LoT/AwsIoTThingPlc')

' renders the element
AwsIoTThingPlc('AwsIoTThingPlc', 'Aws Io T Thing Plc', 'an optional tech label')
@enduml
```

## AwsIoTThingPlcCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsIoTThingPlcCard
include('aws-q3-2021/Resource/LoT/AwsIoTThingPlc')

' renders the element
AwsIoTThingPlcCard('AwsIoTThingPlcCard', 'Aws Io T Thing Plc Card', 'an optional description')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsIoTThingPlcCard
include('aws-q3-2021/Resource/LoT/AwsIoTThingPlc')

' renders the element
AwsIoTThingPlcCard('AwsIoTThingPlcCard', 'Aws Io T Thing Plc Card', 'an optional description')
@enduml
```

## AwsIoTThingPlcGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsIoTThingPlcGroup
include('aws-q3-2021/Resource/LoT/AwsIoTThingPlc')

' renders the element
AwsIoTThingPlcGroup('AwsIoTThingPlcGroup', 'Aws Io T Thing Plc Group', 'an optional tech label') {
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsIoTThingPlcGroup
include('aws-q3-2021/Resource/LoT/AwsIoTThingPlc')

' renders the element
AwsIoTThingPlcGroup('AwsIoTThingPlcGroup', 'Aws Io T Thing Plc Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

