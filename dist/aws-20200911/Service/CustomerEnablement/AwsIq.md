# Aws Iq

```text
aws-20200911/Service/CustomerEnablement/AwsIq
```

```text
include('aws-20200911/Service/CustomerEnablement/AwsIq')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsIq.png)|![](AwsIq.card.png)|![](AwsIq.element.png)|![](AwsIq.group.png)|



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
' loads the AwsIq element
include('aws-20200911/Service/CustomerEnablement/AwsIq')
AwsIqCard('aws_iq', 'Aws Iq', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsIq element
include('aws-20200911/Service/CustomerEnablement/AwsIq')
AwsIqCard('aws_iq', 'Aws Iq', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsIq element
include('aws-20200911/Service/CustomerEnablement/AwsIq')
AwsIq('aws_iq', 'Aws Iq', 'an optional tech field')
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
' loads the AwsIq element
include('aws-20200911/Service/CustomerEnablement/AwsIq')
AwsIq('aws_iq', 'Aws Iq', 'an optional tech field')
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
' loads the AwsIq element
include('aws-20200911/Service/CustomerEnablement/AwsIq')
AwsIqGroup('aws_iq', 'Aws Iq', 'an optional tech field'){
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
' loads the AwsIq element
include('aws-20200911/Service/CustomerEnablement/AwsIq')
AwsIqGroup('aws_iq', 'Aws Iq', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

