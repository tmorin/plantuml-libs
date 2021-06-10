# MessagingGateway


```text
eip-1/MessagingEndpoints/MessagingGateway
```

```text
include('eip-1/MessagingEndpoints/MessagingGateway')
```



| Illustration | MessagingGateway | MessagingGatewayGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip-1/MessagingEndpoints/MessagingGateway.png) | ![illustration for MessagingGateway](../../eip-1/MessagingEndpoints/MessagingGateway.Local.png) | ![illustration for MessagingGatewayGroup](../../eip-1/MessagingEndpoints/MessagingGatewayGroup.Local.png) |




## MessagingGateway

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element MessagingGateway
include('eip-1/MessagingEndpoints/MessagingGateway')

' renders the element
MessagingGateway('MessagingGateway', 'Messaging Gateway', 'an optional tech label')
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
include('eip-1/bootstrap')

' loads the Item which embeds the element MessagingGateway
include('eip-1/MessagingEndpoints/MessagingGateway')

' renders the element
MessagingGateway('MessagingGateway', 'Messaging Gateway', 'an optional tech label')
@enduml
```

## MessagingGatewayGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element MessagingGatewayGroup
include('eip-1/MessagingEndpoints/MessagingGateway')

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
include('eip-1/bootstrap')

' loads the Item which embeds the element MessagingGatewayGroup
include('eip-1/MessagingEndpoints/MessagingGateway')

' renders the element
MessagingGatewayGroup('MessagingGatewayGroup', 'Messaging Gateway Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

