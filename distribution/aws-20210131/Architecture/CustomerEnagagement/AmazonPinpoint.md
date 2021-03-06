# AmazonPinpoint


```text
aws-20210131/Architecture/CustomerEnagagement/AmazonPinpoint
```

```text
include('aws-20210131/Architecture/CustomerEnagagement/AmazonPinpoint')
```



| Illustration | AmazonPinpoint | AmazonPinpointCard | AmazonPinpointGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/CustomerEnagagement/AmazonPinpoint.png) | ![illustration for AmazonPinpoint](../../../aws-20210131/Architecture/CustomerEnagagement/AmazonPinpoint.Local.png) | ![illustration for AmazonPinpointCard](../../../aws-20210131/Architecture/CustomerEnagagement/AmazonPinpointCard.Local.png) | ![illustration for AmazonPinpointGroup](../../../aws-20210131/Architecture/CustomerEnagagement/AmazonPinpointGroup.Local.png) |




## AmazonPinpoint

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonPinpoint
include('aws-20210131/Architecture/CustomerEnagagement/AmazonPinpoint')

' renders the element
AmazonPinpoint('AmazonPinpoint', 'Amazon Pinpoint', 'an optional tech label')
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

' loads the Item which embeds the element AmazonPinpoint
include('aws-20210131/Architecture/CustomerEnagagement/AmazonPinpoint')

' renders the element
AmazonPinpoint('AmazonPinpoint', 'Amazon Pinpoint', 'an optional tech label')
@enduml
```

## AmazonPinpointCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonPinpointCard
include('aws-20210131/Architecture/CustomerEnagagement/AmazonPinpoint')

' renders the element
AmazonPinpointCard('AmazonPinpointCard', 'Amazon Pinpoint Card', 'an optional description')
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

' loads the Item which embeds the element AmazonPinpointCard
include('aws-20210131/Architecture/CustomerEnagagement/AmazonPinpoint')

' renders the element
AmazonPinpointCard('AmazonPinpointCard', 'Amazon Pinpoint Card', 'an optional description')
@enduml
```

## AmazonPinpointGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonPinpointGroup
include('aws-20210131/Architecture/CustomerEnagagement/AmazonPinpoint')

' renders the element
AmazonPinpointGroup('AmazonPinpointGroup', 'Amazon Pinpoint Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonPinpointGroup
include('aws-20210131/Architecture/CustomerEnagagement/AmazonPinpoint')

' renders the element
AmazonPinpointGroup('AmazonPinpointGroup', 'Amazon Pinpoint Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

