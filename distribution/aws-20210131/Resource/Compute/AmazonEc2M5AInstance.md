# AmazonEc2M5AInstance


```text
aws-20210131/Resource/Compute/AmazonEc2M5AInstance
```

```text
include('aws-20210131/Resource/Compute/AmazonEc2M5AInstance')
```



| Illustration | AmazonEc2M5AInstance | AmazonEc2M5AInstanceCard | AmazonEc2M5AInstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Resource/Compute/AmazonEc2M5AInstance.png) | ![illustration for AmazonEc2M5AInstance](../../../aws-20210131/Resource/Compute/AmazonEc2M5AInstance.Local.png) | ![illustration for AmazonEc2M5AInstanceCard](../../../aws-20210131/Resource/Compute/AmazonEc2M5AInstanceCard.Local.png) | ![illustration for AmazonEc2M5AInstanceGroup](../../../aws-20210131/Resource/Compute/AmazonEc2M5AInstanceGroup.Local.png) |




## AmazonEc2M5AInstance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEc2M5AInstance
include('aws-20210131/Resource/Compute/AmazonEc2M5AInstance')

' renders the element
AmazonEc2M5AInstance('AmazonEc2M5aInstance', 'Amazon Ec2 M5a Instance', 'an optional tech label')
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

' loads the Item which embeds the element AmazonEc2M5AInstance
include('aws-20210131/Resource/Compute/AmazonEc2M5AInstance')

' renders the element
AmazonEc2M5AInstance('AmazonEc2M5aInstance', 'Amazon Ec2 M5a Instance', 'an optional tech label')
@enduml
```

## AmazonEc2M5AInstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEc2M5AInstanceCard
include('aws-20210131/Resource/Compute/AmazonEc2M5AInstance')

' renders the element
AmazonEc2M5AInstanceCard('AmazonEc2M5aInstanceCard', 'Amazon Ec2 M5a Instance Card', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2M5AInstanceCard
include('aws-20210131/Resource/Compute/AmazonEc2M5AInstance')

' renders the element
AmazonEc2M5AInstanceCard('AmazonEc2M5aInstanceCard', 'Amazon Ec2 M5a Instance Card', 'an optional description')
@enduml
```

## AmazonEc2M5AInstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEc2M5AInstanceGroup
include('aws-20210131/Resource/Compute/AmazonEc2M5AInstance')

' renders the element
AmazonEc2M5AInstanceGroup('AmazonEc2M5aInstanceGroup', 'Amazon Ec2 M5a Instance Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonEc2M5AInstanceGroup
include('aws-20210131/Resource/Compute/AmazonEc2M5AInstance')

' renders the element
AmazonEc2M5AInstanceGroup('AmazonEc2M5aInstanceGroup', 'Amazon Ec2 M5a Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

