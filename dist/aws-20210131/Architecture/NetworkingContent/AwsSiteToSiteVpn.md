# Aws Site To Site Vpn

```text
aws-20210131/Architecture/NetworkingContent/AwsSiteToSiteVpn
```

```text
include('aws-20210131/Architecture/NetworkingContent/AwsSiteToSiteVpn')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsSiteToSiteVpn.png)|![](AwsSiteToSiteVpn.card.png)|![](AwsSiteToSiteVpn.element.png)|![](AwsSiteToSiteVpn.group.png)|



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
' loads the AwsSiteToSiteVpn element
include('aws-20210131/Architecture/NetworkingContent/AwsSiteToSiteVpn')
AwsSiteToSiteVpnCard('aws_site_to_site_vpn', 'Aws Site To Site Vpn', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsSiteToSiteVpn element
include('aws-20210131/Architecture/NetworkingContent/AwsSiteToSiteVpn')
AwsSiteToSiteVpnCard('aws_site_to_site_vpn', 'Aws Site To Site Vpn', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsSiteToSiteVpn element
include('aws-20210131/Architecture/NetworkingContent/AwsSiteToSiteVpn')
AwsSiteToSiteVpn('aws_site_to_site_vpn', 'Aws Site To Site Vpn', 'an optional tech field')
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
' loads the AwsSiteToSiteVpn element
include('aws-20210131/Architecture/NetworkingContent/AwsSiteToSiteVpn')
AwsSiteToSiteVpn('aws_site_to_site_vpn', 'Aws Site To Site Vpn', 'an optional tech field')
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
' loads the AwsSiteToSiteVpn element
include('aws-20210131/Architecture/NetworkingContent/AwsSiteToSiteVpn')
AwsSiteToSiteVpnGroup('aws_site_to_site_vpn', 'Aws Site To Site Vpn', 'an optional tech field'){
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
' loads the AwsSiteToSiteVpn element
include('aws-20210131/Architecture/NetworkingContent/AwsSiteToSiteVpn')
AwsSiteToSiteVpnGroup('aws_site_to_site_vpn', 'Aws Site To Site Vpn', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

