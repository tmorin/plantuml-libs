# Aws Code Deploy

```text
aws-20210131/Architecture/DeveloperTools/AwsCodeDeploy
```

```text
include('aws-20210131/Architecture/DeveloperTools/AwsCodeDeploy')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsCodeDeploy.png)|![](AwsCodeDeploy.card.png)|![](AwsCodeDeploy.element.png)|![](AwsCodeDeploy.group.png)|



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
' loads the AwsCodeDeploy element
include('aws-20210131/Architecture/DeveloperTools/AwsCodeDeploy')
AwsCodeDeployCard('aws_code_deploy', 'Aws Code Deploy', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsCodeDeploy element
include('aws-20210131/Architecture/DeveloperTools/AwsCodeDeploy')
AwsCodeDeployCard('aws_code_deploy', 'Aws Code Deploy', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsCodeDeploy element
include('aws-20210131/Architecture/DeveloperTools/AwsCodeDeploy')
AwsCodeDeploy('aws_code_deploy', 'Aws Code Deploy', 'an optional tech field')
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
' loads the AwsCodeDeploy element
include('aws-20210131/Architecture/DeveloperTools/AwsCodeDeploy')
AwsCodeDeploy('aws_code_deploy', 'Aws Code Deploy', 'an optional tech field')
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
' loads the AwsCodeDeploy element
include('aws-20210131/Architecture/DeveloperTools/AwsCodeDeploy')
AwsCodeDeployGroup('aws_code_deploy', 'Aws Code Deploy', 'an optional tech field'){
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
' loads the AwsCodeDeploy element
include('aws-20210131/Architecture/DeveloperTools/AwsCodeDeploy')
AwsCodeDeployGroup('aws_code_deploy', 'Aws Code Deploy', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

