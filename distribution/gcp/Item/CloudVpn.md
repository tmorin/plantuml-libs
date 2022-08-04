# CloudVpn


```text
gcp/Item/CloudVpn
```

```text
include('gcp/Item/CloudVpn')
```



| Illustration | CloudVpn | CloudVpnCard | CloudVpnGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../gcp/Item/CloudVpn.png) | ![illustration for CloudVpn](../../gcp/Item/CloudVpn.Local.png) | ![illustration for CloudVpnCard](../../gcp/Item/CloudVpnCard.Local.png) | ![illustration for CloudVpnGroup](../../gcp/Item/CloudVpnGroup.Local.png) |




## CloudVpn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudVpn
include('gcp/Item/CloudVpn')

' renders the element
CloudVpn('CloudVpn', 'Cloud Vpn', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudVpn
include('gcp/Item/CloudVpn')

' renders the element
CloudVpn('CloudVpn', 'Cloud Vpn', 'an optional tech label', 'an optional description')
@enduml
```

## CloudVpnCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudVpnCard
include('gcp/Item/CloudVpn')

' renders the element
CloudVpnCard('CloudVpnCard', 'Cloud Vpn Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudVpnCard
include('gcp/Item/CloudVpn')

' renders the element
CloudVpnCard('CloudVpnCard', 'Cloud Vpn Card', 'an optional description')
@enduml
```

## CloudVpnGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudVpnGroup
include('gcp/Item/CloudVpn')

' renders the element
CloudVpnGroup('CloudVpnGroup', 'Cloud Vpn Group', 'an optional tech label') {
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
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudVpnGroup
include('gcp/Item/CloudVpn')

' renders the element
CloudVpnGroup('CloudVpnGroup', 'Cloud Vpn Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

