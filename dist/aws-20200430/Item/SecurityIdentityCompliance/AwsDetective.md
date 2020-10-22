# Aws Detective

```text
aws-20200430/Item/SecurityIdentityCompliance/AwsDetective
```

```text
include('aws-20200430/Item/SecurityIdentityCompliance/AwsDetective')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsDetective.png)|![](AwsDetective.card.png)|![](AwsDetective.element.png)|![](AwsDetective.group.png)|



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
' loads the AwsDetective element
include('aws-20200430/Item/SecurityIdentityCompliance/AwsDetective')
AwsDetectiveCard('aws_detective', 'Aws Detective', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsDetective element
include('aws-20200430/Item/SecurityIdentityCompliance/AwsDetective')
AwsDetectiveCard('aws_detective', 'Aws Detective', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsDetective element
include('aws-20200430/Item/SecurityIdentityCompliance/AwsDetective')
AwsDetective('aws_detective', 'Aws Detective', 'an optional tech field')
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
' loads the AwsDetective element
include('aws-20200430/Item/SecurityIdentityCompliance/AwsDetective')
AwsDetective('aws_detective', 'Aws Detective', 'an optional tech field')
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
' loads the AwsDetective element
include('aws-20200430/Item/SecurityIdentityCompliance/AwsDetective')
AwsDetectiveGroup('aws_detective', 'Aws Detective', 'an optional tech field'){
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
' loads the AwsDetective element
include('aws-20200430/Item/SecurityIdentityCompliance/AwsDetective')
AwsDetectiveGroup('aws_detective', 'Aws Detective', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

