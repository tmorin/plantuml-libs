# AmazonEc2R6AInstance


```text
aws-q1-2023/Resource/Compute/AmazonEc2R6AInstance
```

```text
include('aws-q1-2023/Resource/Compute/AmazonEc2R6AInstance')
```



| Illustration | AmazonEc2R6AInstance | AmazonEc2R6AInstanceCard | AmazonEc2R6AInstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Resource/Compute/AmazonEc2R6AInstance.png) | ![illustration for AmazonEc2R6AInstance](../../../aws-q1-2023/Resource/Compute/AmazonEc2R6AInstance.Local.png) | ![illustration for AmazonEc2R6AInstanceCard](../../../aws-q1-2023/Resource/Compute/AmazonEc2R6AInstanceCard.Local.png) | ![illustration for AmazonEc2R6AInstanceGroup](../../../aws-q1-2023/Resource/Compute/AmazonEc2R6AInstanceGroup.Local.png) |




## AmazonEc2R6AInstance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2R6AInstance
include('aws-q1-2023/Resource/Compute/AmazonEc2R6AInstance')

' renders the element
AmazonEc2R6AInstance('AmazonEc2R6aInstance', 'Amazon Ec2 R6a Instance', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2R6AInstance
include('aws-q1-2023/Resource/Compute/AmazonEc2R6AInstance')

' renders the element
AmazonEc2R6AInstance('AmazonEc2R6aInstance', 'Amazon Ec2 R6a Instance', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonEc2R6AInstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2R6AInstanceCard
include('aws-q1-2023/Resource/Compute/AmazonEc2R6AInstance')

' renders the element
AmazonEc2R6AInstanceCard('AmazonEc2R6aInstanceCard', 'Amazon Ec2 R6a Instance Card', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2R6AInstanceCard
include('aws-q1-2023/Resource/Compute/AmazonEc2R6AInstance')

' renders the element
AmazonEc2R6AInstanceCard('AmazonEc2R6aInstanceCard', 'Amazon Ec2 R6a Instance Card', 'an optional description')
@enduml
```

## AmazonEc2R6AInstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2R6AInstanceGroup
include('aws-q1-2023/Resource/Compute/AmazonEc2R6AInstance')

' renders the element
AmazonEc2R6AInstanceGroup('AmazonEc2R6aInstanceGroup', 'Amazon Ec2 R6a Instance Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonEc2R6AInstanceGroup
include('aws-q1-2023/Resource/Compute/AmazonEc2R6AInstance')

' renders the element
AmazonEc2R6AInstanceGroup('AmazonEc2R6aInstanceGroup', 'Amazon Ec2 R6a Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

