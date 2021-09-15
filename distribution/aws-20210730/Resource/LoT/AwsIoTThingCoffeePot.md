# AwsIoTThingCoffeePot


```text
aws-20210730/Resource/LoT/AwsIoTThingCoffeePot
```

```text
include('aws-20210730/Resource/LoT/AwsIoTThingCoffeePot')
```



| Illustration | AwsIoTThingCoffeePot | AwsIoTThingCoffeePotCard | AwsIoTThingCoffeePotGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Resource/LoT/AwsIoTThingCoffeePot.png) | ![illustration for AwsIoTThingCoffeePot](../../../aws-20210730/Resource/LoT/AwsIoTThingCoffeePot.Local.png) | ![illustration for AwsIoTThingCoffeePotCard](../../../aws-20210730/Resource/LoT/AwsIoTThingCoffeePotCard.Local.png) | ![illustration for AwsIoTThingCoffeePotGroup](../../../aws-20210730/Resource/LoT/AwsIoTThingCoffeePotGroup.Local.png) |




## AwsIoTThingCoffeePot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsIoTThingCoffeePot
include('aws-20210730/Resource/LoT/AwsIoTThingCoffeePot')

' renders the element
AwsIoTThingCoffeePot('AwsIoTThingCoffeePot', 'Aws Io T Thing Coffee Pot', 'an optional tech label')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsIoTThingCoffeePot
include('aws-20210730/Resource/LoT/AwsIoTThingCoffeePot')

' renders the element
AwsIoTThingCoffeePot('AwsIoTThingCoffeePot', 'Aws Io T Thing Coffee Pot', 'an optional tech label')
@enduml
```

## AwsIoTThingCoffeePotCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsIoTThingCoffeePotCard
include('aws-20210730/Resource/LoT/AwsIoTThingCoffeePot')

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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsIoTThingCoffeePotCard
include('aws-20210730/Resource/LoT/AwsIoTThingCoffeePot')

' renders the element
AwsIoTThingCoffeePotCard('AwsIoTThingCoffeePotCard', 'Aws Io T Thing Coffee Pot Card', 'an optional description')
@enduml
```

## AwsIoTThingCoffeePotGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsIoTThingCoffeePotGroup
include('aws-20210730/Resource/LoT/AwsIoTThingCoffeePot')

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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsIoTThingCoffeePotGroup
include('aws-20210730/Resource/LoT/AwsIoTThingCoffeePot')

' renders the element
AwsIoTThingCoffeePotGroup('AwsIoTThingCoffeePotGroup', 'Aws Io T Thing Coffee Pot Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

