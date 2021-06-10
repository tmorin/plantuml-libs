# AwsClientVpn


```text
aws-20210131/Architecture/NetworkingContent/AwsClientVpn
```

```text
include('aws-20210131/Architecture/NetworkingContent/AwsClientVpn')
```



| Illustration | AwsClientVpn | AwsClientVpnCard | AwsClientVpnGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/NetworkingContent/AwsClientVpn.png) | ![illustration for AwsClientVpn](../../../aws-20210131/Architecture/NetworkingContent/AwsClientVpn.Local.png) | ![illustration for AwsClientVpnCard](../../../aws-20210131/Architecture/NetworkingContent/AwsClientVpnCard.Local.png) | ![illustration for AwsClientVpnGroup](../../../aws-20210131/Architecture/NetworkingContent/AwsClientVpnGroup.Local.png) |




## AwsClientVpn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsClientVpn
include('aws-20210131/Architecture/NetworkingContent/AwsClientVpn')

' renders the element
AwsClientVpn('AwsClientVpn', 'Aws Client Vpn', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsClientVpn
include('aws-20210131/Architecture/NetworkingContent/AwsClientVpn')

' renders the element
AwsClientVpn('AwsClientVpn', 'Aws Client Vpn', 'an optional tech label')
@enduml
```

## AwsClientVpnCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsClientVpnCard
include('aws-20210131/Architecture/NetworkingContent/AwsClientVpn')

' renders the element
AwsClientVpnCard('AwsClientVpnCard', 'Aws Client Vpn Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsClientVpnCard
include('aws-20210131/Architecture/NetworkingContent/AwsClientVpn')

' renders the element
AwsClientVpnCard('AwsClientVpnCard', 'Aws Client Vpn Card', 'an optional description')
@enduml
```

## AwsClientVpnGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsClientVpnGroup
include('aws-20210131/Architecture/NetworkingContent/AwsClientVpn')

' renders the element
AwsClientVpnGroup('AwsClientVpnGroup', 'Aws Client Vpn Group', 'an optional tech label') {
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

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsClientVpnGroup
include('aws-20210131/Architecture/NetworkingContent/AwsClientVpn')

' renders the element
AwsClientVpnGroup('AwsClientVpnGroup', 'Aws Client Vpn Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

