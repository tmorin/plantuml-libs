# Aws Private Link

```text
aws-20200911/Service/NetworkingContent/AwsPrivateLink
```

```text
include('aws-20200911/Service/NetworkingContent/AwsPrivateLink')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsPrivateLink.png)|![](AwsPrivateLink.card.png)|![](AwsPrivateLink.element.png)|![](AwsPrivateLink.group.png)|



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
' loads the AwsPrivateLink element
include('aws-20200911/Service/NetworkingContent/AwsPrivateLink')
AwsPrivateLinkCard('aws_private_link', 'Aws Private Link', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsPrivateLink element
include('aws-20200911/Service/NetworkingContent/AwsPrivateLink')
AwsPrivateLinkCard('aws_private_link', 'Aws Private Link', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsPrivateLink element
include('aws-20200911/Service/NetworkingContent/AwsPrivateLink')
AwsPrivateLink('aws_private_link', 'Aws Private Link', 'an optional tech field')
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
' loads the AwsPrivateLink element
include('aws-20200911/Service/NetworkingContent/AwsPrivateLink')
AwsPrivateLink('aws_private_link', 'Aws Private Link', 'an optional tech field')
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
' loads the AwsPrivateLink element
include('aws-20200911/Service/NetworkingContent/AwsPrivateLink')
AwsPrivateLinkGroup('aws_private_link', 'Aws Private Link', 'an optional tech field'){
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
' loads the AwsPrivateLink element
include('aws-20200911/Service/NetworkingContent/AwsPrivateLink')
AwsPrivateLinkGroup('aws_private_link', 'Aws Private Link', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

