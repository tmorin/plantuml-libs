# AmazonConnect


```text
aws/Architecture/BusinessApplications/AmazonConnect
```

```text
include('aws/Architecture/BusinessApplications/AmazonConnect')
```



| Illustration | AmazonConnect | AmazonConnectCard | AmazonConnectGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Architecture/BusinessApplications/AmazonConnect.png) | ![illustration for AmazonConnect](../../../aws/Architecture/BusinessApplications/AmazonConnect.Local.png) | ![illustration for AmazonConnectCard](../../../aws/Architecture/BusinessApplications/AmazonConnectCard.Local.png) | ![illustration for AmazonConnectGroup](../../../aws/Architecture/BusinessApplications/AmazonConnectGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonConnectXs>`
- `<$AmazonConnectSm>`
- `<$AmazonConnectMd>`
- `<$AmazonConnectLg>`





## AmazonConnect

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonConnect
include('aws/Architecture/BusinessApplications/AmazonConnect')

' renders the element
AmazonConnect('AmazonConnect', 'Amazon Connect', 'an optional tech label', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element AmazonConnect
include('aws/Architecture/BusinessApplications/AmazonConnect')

' renders the element
AmazonConnect('AmazonConnect', 'Amazon Connect', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonConnectCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonConnectCard
include('aws/Architecture/BusinessApplications/AmazonConnect')

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
include('aws/bootstrap')

' loads the Item which embeds the element AmazonConnectCard
include('aws/Architecture/BusinessApplications/AmazonConnect')

' renders the element
AmazonConnectCard('AmazonConnectCard', 'Amazon Connect Card', 'an optional description')
@enduml
```

## AmazonConnectGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonConnectGroup
include('aws/Architecture/BusinessApplications/AmazonConnect')

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
include('aws/bootstrap')

' loads the Item which embeds the element AmazonConnectGroup
include('aws/Architecture/BusinessApplications/AmazonConnect')

' renders the element
AmazonConnectGroup('AmazonConnectGroup', 'Amazon Connect Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

