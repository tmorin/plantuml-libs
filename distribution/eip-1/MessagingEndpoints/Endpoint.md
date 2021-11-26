# Endpoint


```text
eip-1/MessagingEndpoints/Endpoint
```

```text
include('eip-1/MessagingEndpoints/Endpoint')
```



| Illustration | Endpoint | EndpointGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip-1/MessagingEndpoints/Endpoint.png) | ![illustration for Endpoint](../../eip-1/MessagingEndpoints/Endpoint.Local.png) | ![illustration for EndpointGroup](../../eip-1/MessagingEndpoints/EndpointGroup.Local.png) |




## Endpoint

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element Endpoint
include('eip-1/MessagingEndpoints/Endpoint')

' renders the element
Endpoint('Endpoint', 'Endpoint', 'an optional tech label')
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

' loads the Item which embeds the element Endpoint
include('eip-1/MessagingEndpoints/Endpoint')

' renders the element
Endpoint('Endpoint', 'Endpoint', 'an optional tech label')
@enduml
```

## EndpointGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element EndpointGroup
include('eip-1/MessagingEndpoints/Endpoint')

' renders the element
EndpointGroup('EndpointGroup', 'Endpoint Group', 'an optional tech label') {
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

' loads the Item which embeds the element EndpointGroup
include('eip-1/MessagingEndpoints/Endpoint')

' renders the element
EndpointGroup('EndpointGroup', 'Endpoint Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

