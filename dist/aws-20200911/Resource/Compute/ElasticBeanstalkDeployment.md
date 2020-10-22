# Elastic Beanstalk Deployment

```text
aws-20200911/Resource/Compute/ElasticBeanstalkDeployment
```

```text
include('aws-20200911/Resource/Compute/ElasticBeanstalkDeployment')
```

|icon|card|element|group|
|---|---|---|---|
|![](ElasticBeanstalkDeployment.png)|![](ElasticBeanstalkDeployment.card.png)|![](ElasticBeanstalkDeployment.element.png)|![](ElasticBeanstalkDeployment.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the ElasticBeanstalkDeployment element
include('aws-20200911/Resource/Compute/ElasticBeanstalkDeployment')
ElasticBeanstalkDeploymentCard('elastic_beanstalk_deployment', 'Elastic Beanstalk Deployment', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the ElasticBeanstalkDeployment element
include('aws-20200911/Resource/Compute/ElasticBeanstalkDeployment')
ElasticBeanstalkDeploymentCard('elastic_beanstalk_deployment', 'Elastic Beanstalk Deployment', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```


## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the ElasticBeanstalkDeployment element
include('aws-20200911/Resource/Compute/ElasticBeanstalkDeployment')
ElasticBeanstalkDeployment('elastic_beanstalk_deployment', 'Elastic Beanstalk Deployment', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the ElasticBeanstalkDeployment element
include('aws-20200911/Resource/Compute/ElasticBeanstalkDeployment')
ElasticBeanstalkDeployment('elastic_beanstalk_deployment', 'Elastic Beanstalk Deployment', 'an optional tech field')
@enduml
```


## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the ElasticBeanstalkDeployment element
include('aws-20200911/Resource/Compute/ElasticBeanstalkDeployment')
ElasticBeanstalkDeploymentGroup('elastic_beanstalk_deployment', 'Elastic Beanstalk Deployment', 'an optional tech field'){
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
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the ElasticBeanstalkDeployment element
include('aws-20200911/Resource/Compute/ElasticBeanstalkDeployment')
ElasticBeanstalkDeploymentGroup('elastic_beanstalk_deployment', 'Elastic Beanstalk Deployment', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

