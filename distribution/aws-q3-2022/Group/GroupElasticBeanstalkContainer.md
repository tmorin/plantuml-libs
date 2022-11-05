# GroupElasticBeanstalkContainer


```text
aws-q3-2022/Group/GroupElasticBeanstalkContainer
```

```text
include('aws-q3-2022/Group/GroupElasticBeanstalkContainer')
```



| Illustration | GroupElasticBeanstalkContainer |
| :---: | :---: |
| ![illustration for Illustration](../../aws-q3-2022/Resource/GroupIcons/ElasticBeanstalkContainer.png) | ![illustration for GroupElasticBeanstalkContainer](../../aws-q3-2022/Group/GroupElasticBeanstalkContainer.Local.png) |




## GroupElasticBeanstalkContainer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element GroupElasticBeanstalkContainer
include('aws-q3-2022/Group/GroupElasticBeanstalkContainer')

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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element GroupElasticBeanstalkContainer
include('aws-q3-2022/Group/GroupElasticBeanstalkContainer')

GroupElasticBeanstalkContainer('GroupElasticBeanstalkContainer', 'Group Elastic Beanstalk Container', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

