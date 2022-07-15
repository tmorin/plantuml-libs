# AmazonWorkDocsSdk


```text
aws-q2-2022/Architecture/BusinessApplications/AmazonWorkDocsSdk
```

```text
include('aws-q2-2022/Architecture/BusinessApplications/AmazonWorkDocsSdk')
```



| Illustration | AmazonWorkDocsSdk | AmazonWorkDocsSdkCard | AmazonWorkDocsSdkGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2022/Architecture/BusinessApplications/AmazonWorkDocsSdk.png) | ![illustration for AmazonWorkDocsSdk](../../../aws-q2-2022/Architecture/BusinessApplications/AmazonWorkDocsSdk.Local.png) | ![illustration for AmazonWorkDocsSdkCard](../../../aws-q2-2022/Architecture/BusinessApplications/AmazonWorkDocsSdkCard.Local.png) | ![illustration for AmazonWorkDocsSdkGroup](../../../aws-q2-2022/Architecture/BusinessApplications/AmazonWorkDocsSdkGroup.Local.png) |




## AmazonWorkDocsSdk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonWorkDocsSdk
include('aws-q2-2022/Architecture/BusinessApplications/AmazonWorkDocsSdk')

' renders the element
AmazonWorkDocsSdk('AmazonWorkDocsSdk', 'Amazon Work Docs Sdk', 'an optional tech label')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonWorkDocsSdk
include('aws-q2-2022/Architecture/BusinessApplications/AmazonWorkDocsSdk')

' renders the element
AmazonWorkDocsSdk('AmazonWorkDocsSdk', 'Amazon Work Docs Sdk', 'an optional tech label')
@enduml
```

## AmazonWorkDocsSdkCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonWorkDocsSdkCard
include('aws-q2-2022/Architecture/BusinessApplications/AmazonWorkDocsSdk')

' renders the element
AmazonWorkDocsSdkCard('AmazonWorkDocsSdkCard', 'Amazon Work Docs Sdk Card', 'an optional description')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonWorkDocsSdkCard
include('aws-q2-2022/Architecture/BusinessApplications/AmazonWorkDocsSdk')

' renders the element
AmazonWorkDocsSdkCard('AmazonWorkDocsSdkCard', 'Amazon Work Docs Sdk Card', 'an optional description')
@enduml
```

## AmazonWorkDocsSdkGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonWorkDocsSdkGroup
include('aws-q2-2022/Architecture/BusinessApplications/AmazonWorkDocsSdk')

' renders the element
AmazonWorkDocsSdkGroup('AmazonWorkDocsSdkGroup', 'Amazon Work Docs Sdk Group', 'an optional tech label') {
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonWorkDocsSdkGroup
include('aws-q2-2022/Architecture/BusinessApplications/AmazonWorkDocsSdk')

' renders the element
AmazonWorkDocsSdkGroup('AmazonWorkDocsSdkGroup', 'Amazon Work Docs Sdk Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

