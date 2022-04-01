# AmazonRdsProxyInstance


```text
aws-q1-2022/Resource/Database/AmazonRdsProxyInstance
```

```text
include('aws-q1-2022/Resource/Database/AmazonRdsProxyInstance')
```



| Illustration | AmazonRdsProxyInstance | AmazonRdsProxyInstanceCard | AmazonRdsProxyInstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2022/Resource/Database/AmazonRdsProxyInstance.png) | ![illustration for AmazonRdsProxyInstance](../../../aws-q1-2022/Resource/Database/AmazonRdsProxyInstance.Local.png) | ![illustration for AmazonRdsProxyInstanceCard](../../../aws-q1-2022/Resource/Database/AmazonRdsProxyInstanceCard.Local.png) | ![illustration for AmazonRdsProxyInstanceGroup](../../../aws-q1-2022/Resource/Database/AmazonRdsProxyInstanceGroup.Local.png) |




## AmazonRdsProxyInstance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonRdsProxyInstance
include('aws-q1-2022/Resource/Database/AmazonRdsProxyInstance')

' renders the element
AmazonRdsProxyInstance('AmazonRdsProxyInstance', 'Amazon Rds Proxy Instance', 'an optional tech label')
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonRdsProxyInstance
include('aws-q1-2022/Resource/Database/AmazonRdsProxyInstance')

' renders the element
AmazonRdsProxyInstance('AmazonRdsProxyInstance', 'Amazon Rds Proxy Instance', 'an optional tech label')
@enduml
```

## AmazonRdsProxyInstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonRdsProxyInstanceCard
include('aws-q1-2022/Resource/Database/AmazonRdsProxyInstance')

' renders the element
AmazonRdsProxyInstanceCard('AmazonRdsProxyInstanceCard', 'Amazon Rds Proxy Instance Card', 'an optional description')
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonRdsProxyInstanceCard
include('aws-q1-2022/Resource/Database/AmazonRdsProxyInstance')

' renders the element
AmazonRdsProxyInstanceCard('AmazonRdsProxyInstanceCard', 'Amazon Rds Proxy Instance Card', 'an optional description')
@enduml
```

## AmazonRdsProxyInstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonRdsProxyInstanceGroup
include('aws-q1-2022/Resource/Database/AmazonRdsProxyInstance')

' renders the element
AmazonRdsProxyInstanceGroup('AmazonRdsProxyInstanceGroup', 'Amazon Rds Proxy Instance Group', 'an optional tech label') {
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonRdsProxyInstanceGroup
include('aws-q1-2022/Resource/Database/AmazonRdsProxyInstance')

' renders the element
AmazonRdsProxyInstanceGroup('AmazonRdsProxyInstanceGroup', 'Amazon Rds Proxy Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

