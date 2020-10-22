# Aws Vpn

```text
aws-20200911/Service/NetworkingContent/AwsVpn
```

```text
include('aws-20200911/Service/NetworkingContent/AwsVpn')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsVpn.png)|![](AwsVpn.card.png)|![](AwsVpn.element.png)|![](AwsVpn.group.png)|



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
' loads the AwsVpn element
include('aws-20200911/Service/NetworkingContent/AwsVpn')
AwsVpnCard('aws_vpn', 'Aws Vpn', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsVpn element
include('aws-20200911/Service/NetworkingContent/AwsVpn')
AwsVpnCard('aws_vpn', 'Aws Vpn', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsVpn element
include('aws-20200911/Service/NetworkingContent/AwsVpn')
AwsVpn('aws_vpn', 'Aws Vpn', 'an optional tech field')
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
' loads the AwsVpn element
include('aws-20200911/Service/NetworkingContent/AwsVpn')
AwsVpn('aws_vpn', 'Aws Vpn', 'an optional tech field')
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
' loads the AwsVpn element
include('aws-20200911/Service/NetworkingContent/AwsVpn')
AwsVpnGroup('aws_vpn', 'Aws Vpn', 'an optional tech field'){
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
' loads the AwsVpn element
include('aws-20200911/Service/NetworkingContent/AwsVpn')
AwsVpnGroup('aws_vpn', 'Aws Vpn', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

