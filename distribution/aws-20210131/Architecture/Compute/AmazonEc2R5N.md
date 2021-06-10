# AmazonEc2R5N


```text
aws-20210131/Architecture/Compute/AmazonEc2R5N
```

```text
include('aws-20210131/Architecture/Compute/AmazonEc2R5N')
```



| Illustration | AmazonEc2R5N | AmazonEc2R5NCard | AmazonEc2R5NGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/Compute/AmazonEc2R5N.png) | ![illustration for AmazonEc2R5N](../../../aws-20210131/Architecture/Compute/AmazonEc2R5N.Local.png) | ![illustration for AmazonEc2R5NCard](../../../aws-20210131/Architecture/Compute/AmazonEc2R5NCard.Local.png) | ![illustration for AmazonEc2R5NGroup](../../../aws-20210131/Architecture/Compute/AmazonEc2R5NGroup.Local.png) |




## AmazonEc2R5N

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEc2R5N
include('aws-20210131/Architecture/Compute/AmazonEc2R5N')

' renders the element
AmazonEc2R5N('AmazonEc2R5n', 'Amazon Ec2 R5n', 'an optional tech label')
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

' loads the Item which embeds the element AmazonEc2R5N
include('aws-20210131/Architecture/Compute/AmazonEc2R5N')

' renders the element
AmazonEc2R5N('AmazonEc2R5n', 'Amazon Ec2 R5n', 'an optional tech label')
@enduml
```

## AmazonEc2R5NCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEc2R5NCard
include('aws-20210131/Architecture/Compute/AmazonEc2R5N')

' renders the element
AmazonEc2R5NCard('AmazonEc2R5nCard', 'Amazon Ec2 R5n Card', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2R5NCard
include('aws-20210131/Architecture/Compute/AmazonEc2R5N')

' renders the element
AmazonEc2R5NCard('AmazonEc2R5nCard', 'Amazon Ec2 R5n Card', 'an optional description')
@enduml
```

## AmazonEc2R5NGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEc2R5NGroup
include('aws-20210131/Architecture/Compute/AmazonEc2R5N')

' renders the element
AmazonEc2R5NGroup('AmazonEc2R5nGroup', 'Amazon Ec2 R5n Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonEc2R5NGroup
include('aws-20210131/Architecture/Compute/AmazonEc2R5N')

' renders the element
AmazonEc2R5NGroup('AmazonEc2R5nGroup', 'Amazon Ec2 R5n Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

