# AmazonConnect


```text
aws-20210131/Architecture/CustomerEnagagement/AmazonConnect
```

```text
include('aws-20210131/Architecture/CustomerEnagagement/AmazonConnect')
```



| Illustration | AmazonConnect | AmazonConnectCard | AmazonConnectGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/CustomerEnagagement/AmazonConnect.png) | ![illustration for AmazonConnect](../../../aws-20210131/Architecture/CustomerEnagagement/AmazonConnect.Local.png) | ![illustration for AmazonConnectCard](../../../aws-20210131/Architecture/CustomerEnagagement/AmazonConnectCard.Local.png) | ![illustration for AmazonConnectGroup](../../../aws-20210131/Architecture/CustomerEnagagement/AmazonConnectGroup.Local.png) |




## AmazonConnect

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonConnect
include('aws-20210131/Architecture/CustomerEnagagement/AmazonConnect')

' renders the element
AmazonConnect('AmazonConnect', 'Amazon Connect', 'an optional tech label')
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

' loads the Item which embeds the element AmazonConnect
include('aws-20210131/Architecture/CustomerEnagagement/AmazonConnect')

' renders the element
AmazonConnect('AmazonConnect', 'Amazon Connect', 'an optional tech label')
@enduml
```

## AmazonConnectCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonConnectCard
include('aws-20210131/Architecture/CustomerEnagagement/AmazonConnect')

' renders the element
AmazonConnectCard('AmazonConnectCard', 'Amazon Connect Card', 'an optional description')
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

' loads the Item which embeds the element AmazonConnectCard
include('aws-20210131/Architecture/CustomerEnagagement/AmazonConnect')

' renders the element
AmazonConnectCard('AmazonConnectCard', 'Amazon Connect Card', 'an optional description')
@enduml
```

## AmazonConnectGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonConnectGroup
include('aws-20210131/Architecture/CustomerEnagagement/AmazonConnect')

' renders the element
AmazonConnectGroup('AmazonConnectGroup', 'Amazon Connect Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonConnectGroup
include('aws-20210131/Architecture/CustomerEnagagement/AmazonConnect')

' renders the element
AmazonConnectGroup('AmazonConnectGroup', 'Amazon Connect Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

