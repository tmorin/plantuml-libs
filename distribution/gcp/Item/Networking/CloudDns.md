# CloudDns


```text
gcp/Item/Networking/CloudDns
```

```text
include('gcp/Item/Networking/CloudDns')
```



| Illustration | CloudDns | CloudDnsCard | CloudDnsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../gcp/Item/Networking/CloudDns.png) | ![illustration for CloudDns](../../../gcp/Item/Networking/CloudDns.Local.png) | ![illustration for CloudDnsCard](../../../gcp/Item/Networking/CloudDnsCard.Local.png) | ![illustration for CloudDnsGroup](../../../gcp/Item/Networking/CloudDnsGroup.Local.png) |




## CloudDns

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudDns
include('gcp/Item/Networking/CloudDns')

' renders the element
CloudDns('CloudDns', 'Cloud Dns', 'an optional tech label')
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
include('gcp/bootstrap')

' loads the Item which embeds the element CloudDns
include('gcp/Item/Networking/CloudDns')

' renders the element
CloudDns('CloudDns', 'Cloud Dns', 'an optional tech label')
@enduml
```

## CloudDnsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudDnsCard
include('gcp/Item/Networking/CloudDns')

' renders the element
CloudDnsCard('CloudDnsCard', 'Cloud Dns Card', 'an optional description')
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
include('gcp/bootstrap')

' loads the Item which embeds the element CloudDnsCard
include('gcp/Item/Networking/CloudDns')

' renders the element
CloudDnsCard('CloudDnsCard', 'Cloud Dns Card', 'an optional description')
@enduml
```

## CloudDnsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudDnsGroup
include('gcp/Item/Networking/CloudDns')

' renders the element
CloudDnsGroup('CloudDnsGroup', 'Cloud Dns Group', 'an optional tech label') {
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
include('gcp/bootstrap')

' loads the Item which embeds the element CloudDnsGroup
include('gcp/Item/Networking/CloudDns')

' renders the element
CloudDnsGroup('CloudDnsGroup', 'Cloud Dns Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

