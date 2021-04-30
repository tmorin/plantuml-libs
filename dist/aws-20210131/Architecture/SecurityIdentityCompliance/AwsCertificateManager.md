# Aws Certificate Manager

```text
aws-20210131/Architecture/SecurityIdentityCompliance/AwsCertificateManager
```

```text
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsCertificateManager')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsCertificateManager.png)|![](AwsCertificateManager.card.png)|![](AwsCertificateManager.element.png)|![](AwsCertificateManager.group.png)|



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
' loads the AwsCertificateManager element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsCertificateManager')
AwsCertificateManagerCard('aws_certificate_manager', 'Aws Certificate Manager', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsCertificateManager element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsCertificateManager')
AwsCertificateManagerCard('aws_certificate_manager', 'Aws Certificate Manager', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsCertificateManager element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsCertificateManager')
AwsCertificateManager('aws_certificate_manager', 'Aws Certificate Manager', 'an optional tech field')
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
' loads the AwsCertificateManager element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsCertificateManager')
AwsCertificateManager('aws_certificate_manager', 'Aws Certificate Manager', 'an optional tech field')
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
' loads the AwsCertificateManager element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsCertificateManager')
AwsCertificateManagerGroup('aws_certificate_manager', 'Aws Certificate Manager', 'an optional tech field'){
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
' loads the AwsCertificateManager element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsCertificateManager')
AwsCertificateManagerGroup('aws_certificate_manager', 'Aws Certificate Manager', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

