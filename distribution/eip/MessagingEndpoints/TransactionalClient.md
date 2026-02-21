# TransactionalClient


```text
eip/MessagingEndpoints/TransactionalClient
```

```text
include('eip/MessagingEndpoints/TransactionalClient')
```



| Illustration | TransactionalClient | TransactionalClientGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip/MessagingEndpoints/TransactionalClient.png) | ![illustration for TransactionalClient](../../eip/MessagingEndpoints/TransactionalClient.Local.png) | ![illustration for TransactionalClientGroup](../../eip/MessagingEndpoints/TransactionalClientGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TransactionalClientXs>`
- `<$TransactionalClientSm>`
- `<$TransactionalClientMd>`
- `<$TransactionalClientLg>`





## TransactionalClient

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element TransactionalClient
include('eip/MessagingEndpoints/TransactionalClient')

' renders the element
TransactionalClient('TransactionalClient', 'Transactional Client', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TransactionalClient
include('eip/MessagingEndpoints/TransactionalClient')

' renders the element
TransactionalClient('TransactionalClient', 'Transactional Client', 'an optional tech label', 'an optional description')
@enduml
```

## TransactionalClientGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element TransactionalClientGroup
include('eip/MessagingEndpoints/TransactionalClient')

' renders the element
TransactionalClientGroup('TransactionalClientGroup', 'Transactional Client Group', 'an optional tech label') {
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

' loads the Item which embeds the element TransactionalClientGroup
include('eip/MessagingEndpoints/TransactionalClient')

' renders the element
TransactionalClientGroup('TransactionalClientGroup', 'Transactional Client Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

