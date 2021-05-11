# Aws Cloud Shell

```text
aws-20210131/Architecture/DeveloperTools/AwsCloudShell
```

```text
include('aws-20210131/Architecture/DeveloperTools/AwsCloudShell')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsCloudShell.png)|![](AwsCloudShell.card.png)|![](AwsCloudShell.element.png)|![](AwsCloudShell.group.png)|



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
' loads the AwsCloudShell element
include('aws-20210131/Architecture/DeveloperTools/AwsCloudShell')
AwsCloudShellCard('aws_cloud_shell', 'Aws Cloud Shell', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsCloudShell element
include('aws-20210131/Architecture/DeveloperTools/AwsCloudShell')
AwsCloudShellCard('aws_cloud_shell', 'Aws Cloud Shell', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsCloudShell element
include('aws-20210131/Architecture/DeveloperTools/AwsCloudShell')
AwsCloudShell('aws_cloud_shell', 'Aws Cloud Shell', 'an optional tech field')
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
' loads the AwsCloudShell element
include('aws-20210131/Architecture/DeveloperTools/AwsCloudShell')
AwsCloudShell('aws_cloud_shell', 'Aws Cloud Shell', 'an optional tech field')
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
' loads the AwsCloudShell element
include('aws-20210131/Architecture/DeveloperTools/AwsCloudShell')
AwsCloudShellGroup('aws_cloud_shell', 'Aws Cloud Shell', 'an optional tech field'){
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
' loads the AwsCloudShell element
include('aws-20210131/Architecture/DeveloperTools/AwsCloudShell')
AwsCloudShellGroup('aws_cloud_shell', 'Aws Cloud Shell', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```
