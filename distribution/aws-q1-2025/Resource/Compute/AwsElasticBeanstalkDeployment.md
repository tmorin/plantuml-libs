# AwsElasticBeanstalkDeployment


```text
aws-q1-2025/Resource/Compute/AwsElasticBeanstalkDeployment
```

```text
include('aws-q1-2025/Resource/Compute/AwsElasticBeanstalkDeployment')
```



| Illustration | AwsElasticBeanstalkDeployment | AwsElasticBeanstalkDeploymentCard | AwsElasticBeanstalkDeploymentGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2025/Resource/Compute/AwsElasticBeanstalkDeployment.png) | ![illustration for AwsElasticBeanstalkDeployment](../../../aws-q1-2025/Resource/Compute/AwsElasticBeanstalkDeployment.Local.png) | ![illustration for AwsElasticBeanstalkDeploymentCard](../../../aws-q1-2025/Resource/Compute/AwsElasticBeanstalkDeploymentCard.Local.png) | ![illustration for AwsElasticBeanstalkDeploymentGroup](../../../aws-q1-2025/Resource/Compute/AwsElasticBeanstalkDeploymentGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsElasticBeanstalkDeploymentXs>`
- `<$AwsElasticBeanstalkDeploymentSm>`
- `<$AwsElasticBeanstalkDeploymentMd>`
- `<$AwsElasticBeanstalkDeploymentLg>`





## AwsElasticBeanstalkDeployment

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsElasticBeanstalkDeployment
include('aws-q1-2025/Resource/Compute/AwsElasticBeanstalkDeployment')

' renders the element
AwsElasticBeanstalkDeployment('AwsElasticBeanstalkDeployment', 'Aws Elastic Beanstalk Deployment', 'an optional tech label', 'an optional description')
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsElasticBeanstalkDeployment
include('aws-q1-2025/Resource/Compute/AwsElasticBeanstalkDeployment')

' renders the element
AwsElasticBeanstalkDeployment('AwsElasticBeanstalkDeployment', 'Aws Elastic Beanstalk Deployment', 'an optional tech label', 'an optional description')
@enduml
```

## AwsElasticBeanstalkDeploymentCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsElasticBeanstalkDeploymentCard
include('aws-q1-2025/Resource/Compute/AwsElasticBeanstalkDeployment')

' renders the element
AwsElasticBeanstalkDeploymentCard('AwsElasticBeanstalkDeploymentCard', 'Aws Elastic Beanstalk Deployment Card', 'an optional description')
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsElasticBeanstalkDeploymentCard
include('aws-q1-2025/Resource/Compute/AwsElasticBeanstalkDeployment')

' renders the element
AwsElasticBeanstalkDeploymentCard('AwsElasticBeanstalkDeploymentCard', 'Aws Elastic Beanstalk Deployment Card', 'an optional description')
@enduml
```

## AwsElasticBeanstalkDeploymentGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsElasticBeanstalkDeploymentGroup
include('aws-q1-2025/Resource/Compute/AwsElasticBeanstalkDeployment')

' renders the element
AwsElasticBeanstalkDeploymentGroup('AwsElasticBeanstalkDeploymentGroup', 'Aws Elastic Beanstalk Deployment Group', 'an optional tech label') {
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsElasticBeanstalkDeploymentGroup
include('aws-q1-2025/Resource/Compute/AwsElasticBeanstalkDeployment')

' renders the element
AwsElasticBeanstalkDeploymentGroup('AwsElasticBeanstalkDeploymentGroup', 'Aws Elastic Beanstalk Deployment Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

