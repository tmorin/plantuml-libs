# AmazonEc2T3AInstance


```text
aws-q1-2023/Resource/Compute/AmazonEc2T3AInstance
```

```text
include('aws-q1-2023/Resource/Compute/AmazonEc2T3AInstance')
```



| Illustration | AmazonEc2T3AInstance | AmazonEc2T3AInstanceCard | AmazonEc2T3AInstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Resource/Compute/AmazonEc2T3AInstance.png) | ![illustration for AmazonEc2T3AInstance](../../../aws-q1-2023/Resource/Compute/AmazonEc2T3AInstance.Local.png) | ![illustration for AmazonEc2T3AInstanceCard](../../../aws-q1-2023/Resource/Compute/AmazonEc2T3AInstanceCard.Local.png) | ![illustration for AmazonEc2T3AInstanceGroup](../../../aws-q1-2023/Resource/Compute/AmazonEc2T3AInstanceGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonEc2T3AInstanceXs>`
- `<$AmazonEc2T3AInstanceSm>`
- `<$AmazonEc2T3AInstanceMd>`
- `<$AmazonEc2T3AInstanceLg>`





## AmazonEc2T3AInstance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2T3AInstance
include('aws-q1-2023/Resource/Compute/AmazonEc2T3AInstance')

' renders the element
AmazonEc2T3AInstance('AmazonEc2T3aInstance', 'Amazon Ec2 T3a Instance', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2T3AInstance
include('aws-q1-2023/Resource/Compute/AmazonEc2T3AInstance')

' renders the element
AmazonEc2T3AInstance('AmazonEc2T3aInstance', 'Amazon Ec2 T3a Instance', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonEc2T3AInstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2T3AInstanceCard
include('aws-q1-2023/Resource/Compute/AmazonEc2T3AInstance')

' renders the element
AmazonEc2T3AInstanceCard('AmazonEc2T3aInstanceCard', 'Amazon Ec2 T3a Instance Card', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2T3AInstanceCard
include('aws-q1-2023/Resource/Compute/AmazonEc2T3AInstance')

' renders the element
AmazonEc2T3AInstanceCard('AmazonEc2T3aInstanceCard', 'Amazon Ec2 T3a Instance Card', 'an optional description')
@enduml
```

## AmazonEc2T3AInstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2T3AInstanceGroup
include('aws-q1-2023/Resource/Compute/AmazonEc2T3AInstance')

' renders the element
AmazonEc2T3AInstanceGroup('AmazonEc2T3aInstanceGroup', 'Amazon Ec2 T3a Instance Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonEc2T3AInstanceGroup
include('aws-q1-2023/Resource/Compute/AmazonEc2T3AInstance')

' renders the element
AmazonEc2T3AInstanceGroup('AmazonEc2T3aInstanceGroup', 'Amazon Ec2 T3a Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

