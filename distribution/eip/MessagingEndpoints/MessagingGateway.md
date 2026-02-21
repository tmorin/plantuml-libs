# MessagingGateway


```text
eip/MessagingEndpoints/MessagingGateway
```

```text
include('eip/MessagingEndpoints/MessagingGateway')
```



| Illustration | MessagingGateway | MessagingGatewayGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip/MessagingEndpoints/MessagingGateway.png) | ![illustration for MessagingGateway](../../eip/MessagingEndpoints/MessagingGateway.Local.png) | ![illustration for MessagingGatewayGroup](../../eip/MessagingEndpoints/MessagingGatewayGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MessagingGatewayXs>`
- `<$MessagingGatewaySm>`
- `<$MessagingGatewayMd>`
- `<$MessagingGatewayLg>`





## MessagingGateway

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element MessagingGateway
include('eip/MessagingEndpoints/MessagingGateway')

' renders the element
MessagingGateway('MessagingGateway', 'Messaging Gateway', 'an optional tech label', 'an optional description')
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
include('eip/bootstrap')

' loads the Item which embeds the element MessagingGateway
include('eip/MessagingEndpoints/MessagingGateway')

' renders the element
MessagingGateway('MessagingGateway', 'Messaging Gateway', 'an optional tech label', 'an optional description')
@enduml
```

## MessagingGatewayGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element MessagingGatewayGroup
include('eip/MessagingEndpoints/MessagingGateway')

' renders the element
MessagingGatewayGroup('MessagingGatewayGroup', 'Messaging Gateway Group', 'an optional tech label') {
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
include('eip/bootstrap')

' loads the Item which embeds the element MessagingGatewayGroup
include('eip/MessagingEndpoints/MessagingGateway')

' renders the element
MessagingGatewayGroup('MessagingGatewayGroup', 'Messaging Gateway Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

