# Aws Code Build

```text
aws-20210131/Architecture/DeveloperTools/AwsCodeBuild
```

```text
include('aws-20210131/Architecture/DeveloperTools/AwsCodeBuild')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsCodeBuild.png)|![](AwsCodeBuild.card.png)|![](AwsCodeBuild.element.png)|![](AwsCodeBuild.group.png)|



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
' loads the AwsCodeBuild element
include('aws-20210131/Architecture/DeveloperTools/AwsCodeBuild')
AwsCodeBuildCard('aws_code_build', 'Aws Code Build', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsCodeBuild element
include('aws-20210131/Architecture/DeveloperTools/AwsCodeBuild')
AwsCodeBuildCard('aws_code_build', 'Aws Code Build', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsCodeBuild element
include('aws-20210131/Architecture/DeveloperTools/AwsCodeBuild')
AwsCodeBuild('aws_code_build', 'Aws Code Build', 'an optional tech field')
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
' loads the AwsCodeBuild element
include('aws-20210131/Architecture/DeveloperTools/AwsCodeBuild')
AwsCodeBuild('aws_code_build', 'Aws Code Build', 'an optional tech field')
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
' loads the AwsCodeBuild element
include('aws-20210131/Architecture/DeveloperTools/AwsCodeBuild')
AwsCodeBuildGroup('aws_code_build', 'Aws Code Build', 'an optional tech field'){
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
' loads the AwsCodeBuild element
include('aws-20210131/Architecture/DeveloperTools/AwsCodeBuild')
AwsCodeBuildGroup('aws_code_build', 'Aws Code Build', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

