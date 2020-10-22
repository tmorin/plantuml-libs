# Aws Secrets Manager

```text
aws-20200430/Item/SecurityIdentityCompliance/AwsSecretsManager
```

```text
include('aws-20200430/Item/SecurityIdentityCompliance/AwsSecretsManager')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsSecretsManager.png)|![](AwsSecretsManager.card.png)|![](AwsSecretsManager.element.png)|![](AwsSecretsManager.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsSecretsManager element
include('aws-20200430/Item/SecurityIdentityCompliance/AwsSecretsManager')
AwsSecretsManagerCard('aws_secrets_manager', 'Aws Secrets Manager', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsSecretsManager element
include('aws-20200430/Item/SecurityIdentityCompliance/AwsSecretsManager')
AwsSecretsManagerCard('aws_secrets_manager', 'Aws Secrets Manager', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsSecretsManager element
include('aws-20200430/Item/SecurityIdentityCompliance/AwsSecretsManager')
AwsSecretsManager('aws_secrets_manager', 'Aws Secrets Manager', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsSecretsManager element
include('aws-20200430/Item/SecurityIdentityCompliance/AwsSecretsManager')
AwsSecretsManager('aws_secrets_manager', 'Aws Secrets Manager', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsSecretsManager element
include('aws-20200430/Item/SecurityIdentityCompliance/AwsSecretsManager')
AwsSecretsManagerGroup('aws_secrets_manager', 'Aws Secrets Manager', 'an optional tech field'){
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsSecretsManager element
include('aws-20200430/Item/SecurityIdentityCompliance/AwsSecretsManager')
AwsSecretsManagerGroup('aws_secrets_manager', 'Aws Secrets Manager', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

