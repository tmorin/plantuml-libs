# Aws Signer

```text
aws-20210131/Architecture/SecurityIdentityCompliance/AwsSigner
```

```text
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsSigner')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsSigner.png)|![](AwsSigner.card.png)|![](AwsSigner.element.png)|![](AwsSigner.group.png)|



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
' loads the AwsSigner element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsSigner')
AwsSignerCard('aws_signer', 'Aws Signer', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsSigner element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsSigner')
AwsSignerCard('aws_signer', 'Aws Signer', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsSigner element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsSigner')
AwsSigner('aws_signer', 'Aws Signer', 'an optional tech field')
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
' loads the AwsSigner element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsSigner')
AwsSigner('aws_signer', 'Aws Signer', 'an optional tech field')
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
' loads the AwsSigner element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsSigner')
AwsSignerGroup('aws_signer', 'Aws Signer', 'an optional tech field'){
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
' loads the AwsSigner element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsSigner')
AwsSignerGroup('aws_signer', 'Aws Signer', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

