# GroupElasticBeanstalkContainer


```text
aws-q2-2024/Group/GroupElasticBeanstalkContainer
```

```text
include('aws-q2-2024/Group/GroupElasticBeanstalkContainer')
```



| Illustration | GroupElasticBeanstalkContainer |
| :---: | :---: |
| ![illustration for Illustration](../../aws-q2-2024/Resource/GroupIcons/ElasticBeanstalkContainer.png) | ![illustration for GroupElasticBeanstalkContainer](../../aws-q2-2024/Group/GroupElasticBeanstalkContainer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GroupElasticBeanstalkContainerXs>`
- `<$GroupElasticBeanstalkContainerSm>`
- `<$GroupElasticBeanstalkContainerMd>`
- `<$GroupElasticBeanstalkContainerLg>`





## GroupElasticBeanstalkContainer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element GroupElasticBeanstalkContainer
include('aws-q2-2024/Group/GroupElasticBeanstalkContainer')

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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element GroupElasticBeanstalkContainer
include('aws-q2-2024/Group/GroupElasticBeanstalkContainer')

GroupElasticBeanstalkContainer('GroupElasticBeanstalkContainer', 'Group Elastic Beanstalk Container', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

