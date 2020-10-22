# Aws S3 Glacier Vault

```text
aws-20200430/Item/Storage/AwsS3GlacierVault
```

```text
include('aws-20200430/Item/Storage/AwsS3GlacierVault')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsS3GlacierVault.png)|![](AwsS3GlacierVault.card.png)|![](AwsS3GlacierVault.element.png)|![](AwsS3GlacierVault.group.png)|



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
' loads the AwsS3GlacierVault element
include('aws-20200430/Item/Storage/AwsS3GlacierVault')
AwsS3GlacierVaultCard('aws_s_3_glacier_vault', 'Aws S3 Glacier Vault', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsS3GlacierVault element
include('aws-20200430/Item/Storage/AwsS3GlacierVault')
AwsS3GlacierVaultCard('aws_s_3_glacier_vault', 'Aws S3 Glacier Vault', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsS3GlacierVault element
include('aws-20200430/Item/Storage/AwsS3GlacierVault')
AwsS3GlacierVault('aws_s_3_glacier_vault', 'Aws S3 Glacier Vault', 'an optional tech field')
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
' loads the AwsS3GlacierVault element
include('aws-20200430/Item/Storage/AwsS3GlacierVault')
AwsS3GlacierVault('aws_s_3_glacier_vault', 'Aws S3 Glacier Vault', 'an optional tech field')
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
' loads the AwsS3GlacierVault element
include('aws-20200430/Item/Storage/AwsS3GlacierVault')
AwsS3GlacierVaultGroup('aws_s_3_glacier_vault', 'Aws S3 Glacier Vault', 'an optional tech field'){
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
' loads the AwsS3GlacierVault element
include('aws-20200430/Item/Storage/AwsS3GlacierVault')
AwsS3GlacierVaultGroup('aws_s_3_glacier_vault', 'Aws S3 Glacier Vault', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

