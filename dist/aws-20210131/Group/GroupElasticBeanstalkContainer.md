# Group Elastic Beanstalk Container

```text
aws-20210131/Group/GroupElasticBeanstalkContainer
```

```text
include('aws-20210131/Group/GroupElasticBeanstalkContainer')
```

|group|
|---|
|![](GroupElasticBeanstalkContainer.group.local.png)|



## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the GroupElasticBeanstalkContainer element
include('aws-20210131/Group/GroupElasticBeanstalkContainer')
GroupElasticBeanstalkContainer('group_elastic_beanstalk_container', 'Group Elastic Beanstalk Container', 'an optional tech field') {
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
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the GroupElasticBeanstalkContainer element
include('aws-20210131/Group/GroupElasticBeanstalkContainer')
GroupElasticBeanstalkContainer('group_elastic_beanstalk_container', 'Group Elastic Beanstalk Container', 'an optional tech field') {
  note as note
  the content of the group
  end note
}
@enduml
```

