# TransactionalClient


```text
eip-1/MessagingEndpoints/TransactionalClient
```

```text
include('eip-1/MessagingEndpoints/TransactionalClient')
```



| Illustration | TransactionalClient | TransactionalClientGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip-1/MessagingEndpoints/TransactionalClient.png) | ![illustration for TransactionalClient](../../eip-1/MessagingEndpoints/TransactionalClient.Local.png) | ![illustration for TransactionalClientGroup](../../eip-1/MessagingEndpoints/TransactionalClientGroup.Local.png) |




## TransactionalClient

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element TransactionalClient
include('eip-1/MessagingEndpoints/TransactionalClient')

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
include('eip-1/bootstrap')

' loads the Item which embeds the element TransactionalClient
include('eip-1/MessagingEndpoints/TransactionalClient')

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
include('eip-1/bootstrap')

' loads the Item which embeds the element TransactionalClientGroup
include('eip-1/MessagingEndpoints/TransactionalClient')

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
include('eip-1/bootstrap')

' loads the Item which embeds the element TransactionalClientGroup
include('eip-1/MessagingEndpoints/TransactionalClient')

' renders the element
TransactionalClientGroup('TransactionalClientGroup', 'Transactional Client Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

