# S3 Glacier Vault

```text
aws-20200911/Resource/Storage/S3GlacierVault
```

```text
include('aws-20200911/Resource/Storage/S3GlacierVault')
```

|icon|card|element|group|
|---|---|---|---|
|![](S3GlacierVault.png)|![](S3GlacierVault.card.png)|![](S3GlacierVault.element.png)|![](S3GlacierVault.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the S3GlacierVault element
include('aws-20200911/Resource/Storage/S3GlacierVault')
S3GlacierVaultCard('s_3_glacier_vault', 'S3 Glacier Vault', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the S3GlacierVault element
include('aws-20200911/Resource/Storage/S3GlacierVault')
S3GlacierVaultCard('s_3_glacier_vault', 'S3 Glacier Vault', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the S3GlacierVault element
include('aws-20200911/Resource/Storage/S3GlacierVault')
S3GlacierVault('s_3_glacier_vault', 'S3 Glacier Vault', 'an optional tech field')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the S3GlacierVault element
include('aws-20200911/Resource/Storage/S3GlacierVault')
S3GlacierVault('s_3_glacier_vault', 'S3 Glacier Vault', 'an optional tech field')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the S3GlacierVault element
include('aws-20200911/Resource/Storage/S3GlacierVault')
S3GlacierVaultGroup('s_3_glacier_vault', 'S3 Glacier Vault', 'an optional tech field'){
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the S3GlacierVault element
include('aws-20200911/Resource/Storage/S3GlacierVault')
S3GlacierVaultGroup('s_3_glacier_vault', 'S3 Glacier Vault', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

