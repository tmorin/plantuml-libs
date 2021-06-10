# GroupElasticBeanstalkContainer


```text
aws-20210131/Group/GroupElasticBeanstalkContainer
```

```text
include('aws-20210131/Group/GroupElasticBeanstalkContainer')
```



| Illustration | GroupElasticBeanstalkContainer |
| :---: | :---: |
| ![illustration for Illustration](../../aws-20210131/Resource/GroupIcons/ElasticBeanstalkContainer.png) | ![illustration for GroupElasticBeanstalkContainer](../../aws-20210131/Group/GroupElasticBeanstalkContainer.Local.png) |




## GroupElasticBeanstalkContainer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element GroupElasticBeanstalkContainer
include('aws-20210131/Group/GroupElasticBeanstalkContainer')

GroupElasticBeanstalkContainer('GroupElasticBeanstalkContainer', 'Group Elastic Beanstalk Container', 'an optional tech label') {
  note as note
  the content of the boundary
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

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element GroupElasticBeanstalkContainer
include('aws-20210131/Group/GroupElasticBeanstalkContainer')

GroupElasticBeanstalkContainer('GroupElasticBeanstalkContainer', 'Group Elastic Beanstalk Container', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

