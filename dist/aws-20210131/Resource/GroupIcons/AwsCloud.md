# Aws Cloud

```text
aws-20210131/Resource/GroupIcons/AwsCloud
```

```text
include('aws-20210131/Resource/GroupIcons/AwsCloud')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsCloud.png)|![](AwsCloud.card.png)|![](AwsCloud.element.png)|![](AwsCloud.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsCloud element
include('aws-20210131/Resource/GroupIcons/AwsCloud')
AwsCloudCard('aws_cloud', 'Aws Cloud', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsCloud element
include('aws-20210131/Resource/GroupIcons/AwsCloud')
AwsCloudCard('aws_cloud', 'Aws Cloud', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsCloud element
include('aws-20210131/Resource/GroupIcons/AwsCloud')
AwsCloud('aws_cloud', 'Aws Cloud', 'an optional tech field')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsCloud element
include('aws-20210131/Resource/GroupIcons/AwsCloud')
AwsCloud('aws_cloud', 'Aws Cloud', 'an optional tech field')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsCloud element
include('aws-20210131/Resource/GroupIcons/AwsCloud')
AwsCloudGroup('aws_cloud', 'Aws Cloud', 'an optional tech field'){
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsCloud element
include('aws-20210131/Resource/GroupIcons/AwsCloud')
AwsCloudGroup('aws_cloud', 'Aws Cloud', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```
