# ServicePublicIpAddresses


```text
azure-20/Item/Networking/ServicePublicIpAddresses
```

```text
include('azure-20/Item/Networking/ServicePublicIpAddresses')
```



| Illustration | ServicePublicIpAddresses | ServicePublicIpAddressesCard | ServicePublicIpAddressesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-20/Item/Networking/ServicePublicIpAddresses.png) | ![illustration for ServicePublicIpAddresses](../../../azure-20/Item/Networking/ServicePublicIpAddresses.Local.png) | ![illustration for ServicePublicIpAddressesCard](../../../azure-20/Item/Networking/ServicePublicIpAddressesCard.Local.png) | ![illustration for ServicePublicIpAddressesGroup](../../../azure-20/Item/Networking/ServicePublicIpAddressesGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServicePublicIpAddressesXs>`
- `<$ServicePublicIpAddressesSm>`
- `<$ServicePublicIpAddressesMd>`
- `<$ServicePublicIpAddressesLg>`





## ServicePublicIpAddresses

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServicePublicIpAddresses
include('azure-20/Item/Networking/ServicePublicIpAddresses')

' renders the element
ServicePublicIpAddresses('ServicePublicIpAddresses', 'Service Public Ip Addresses', 'an optional tech label', 'an optional description')
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServicePublicIpAddresses
include('azure-20/Item/Networking/ServicePublicIpAddresses')

' renders the element
ServicePublicIpAddresses('ServicePublicIpAddresses', 'Service Public Ip Addresses', 'an optional tech label', 'an optional description')
@enduml
```

## ServicePublicIpAddressesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServicePublicIpAddressesCard
include('azure-20/Item/Networking/ServicePublicIpAddresses')

' renders the element
ServicePublicIpAddressesCard('ServicePublicIpAddressesCard', 'Service Public Ip Addresses Card', 'an optional description')
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServicePublicIpAddressesCard
include('azure-20/Item/Networking/ServicePublicIpAddresses')

' renders the element
ServicePublicIpAddressesCard('ServicePublicIpAddressesCard', 'Service Public Ip Addresses Card', 'an optional description')
@enduml
```

## ServicePublicIpAddressesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServicePublicIpAddressesGroup
include('azure-20/Item/Networking/ServicePublicIpAddresses')

' renders the element
ServicePublicIpAddressesGroup('ServicePublicIpAddressesGroup', 'Service Public Ip Addresses Group', 'an optional tech label') {
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServicePublicIpAddressesGroup
include('azure-20/Item/Networking/ServicePublicIpAddresses')

' renders the element
ServicePublicIpAddressesGroup('ServicePublicIpAddressesGroup', 'Service Public Ip Addresses Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

