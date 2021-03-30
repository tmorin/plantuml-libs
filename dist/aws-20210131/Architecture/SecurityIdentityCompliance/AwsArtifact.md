# Aws Artifact

```text
aws-20210131/Architecture/SecurityIdentityCompliance/AwsArtifact
```

```text
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsArtifact')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsArtifact.png)|![](AwsArtifact.card.png)|![](AwsArtifact.element.png)|![](AwsArtifact.group.png)|



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
' loads the AwsArtifact element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsArtifact')
AwsArtifactCard('aws_artifact', 'Aws Artifact', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsArtifact element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsArtifact')
AwsArtifactCard('aws_artifact', 'Aws Artifact', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsArtifact element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsArtifact')
AwsArtifact('aws_artifact', 'Aws Artifact', 'an optional tech field')
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
' loads the AwsArtifact element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsArtifact')
AwsArtifact('aws_artifact', 'Aws Artifact', 'an optional tech field')
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
' loads the AwsArtifact element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsArtifact')
AwsArtifactGroup('aws_artifact', 'Aws Artifact', 'an optional tech field'){
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
' loads the AwsArtifact element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsArtifact')
AwsArtifactGroup('aws_artifact', 'Aws Artifact', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

