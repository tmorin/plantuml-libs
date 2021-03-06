# AwsDirectConnect


```text
aws-20210131/Architecture/NetworkingContent/AwsDirectConnect
```

```text
include('aws-20210131/Architecture/NetworkingContent/AwsDirectConnect')
```



| Illustration | AwsDirectConnect | AwsDirectConnectCard | AwsDirectConnectGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/NetworkingContent/AwsDirectConnect.png) | ![illustration for AwsDirectConnect](../../../aws-20210131/Architecture/NetworkingContent/AwsDirectConnect.Local.png) | ![illustration for AwsDirectConnectCard](../../../aws-20210131/Architecture/NetworkingContent/AwsDirectConnectCard.Local.png) | ![illustration for AwsDirectConnectGroup](../../../aws-20210131/Architecture/NetworkingContent/AwsDirectConnectGroup.Local.png) |




## AwsDirectConnect

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsDirectConnect
include('aws-20210131/Architecture/NetworkingContent/AwsDirectConnect')

' renders the element
AwsDirectConnect('AwsDirectConnect', 'Aws Direct Connect', 'an optional tech label')
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

' loads the Item which embeds the element AwsDirectConnect
include('aws-20210131/Architecture/NetworkingContent/AwsDirectConnect')

' renders the element
AwsDirectConnect('AwsDirectConnect', 'Aws Direct Connect', 'an optional tech label')
@enduml
```

## AwsDirectConnectCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsDirectConnectCard
include('aws-20210131/Architecture/NetworkingContent/AwsDirectConnect')

' renders the element
AwsDirectConnectCard('AwsDirectConnectCard', 'Aws Direct Connect Card', 'an optional description')
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

' loads the Item which embeds the element AwsDirectConnectCard
include('aws-20210131/Architecture/NetworkingContent/AwsDirectConnect')

' renders the element
AwsDirectConnectCard('AwsDirectConnectCard', 'Aws Direct Connect Card', 'an optional description')
@enduml
```

## AwsDirectConnectGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsDirectConnectGroup
include('aws-20210131/Architecture/NetworkingContent/AwsDirectConnect')

' renders the element
AwsDirectConnectGroup('AwsDirectConnectGroup', 'Aws Direct Connect Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsDirectConnectGroup
include('aws-20210131/Architecture/NetworkingContent/AwsDirectConnect')

' renders the element
AwsDirectConnectGroup('AwsDirectConnectGroup', 'Aws Direct Connect Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

