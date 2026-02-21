# QueryMessage


```text
eip/MessageConstruction/QueryMessage
```

```text
include('eip/MessageConstruction/QueryMessage')
```



| Illustration | QueryMessage | QueryMessageGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip/MessageConstruction/QueryMessage.png) | ![illustration for QueryMessage](../../eip/MessageConstruction/QueryMessage.Local.png) | ![illustration for QueryMessageGroup](../../eip/MessageConstruction/QueryMessageGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QueryMessageXs>`
- `<$QueryMessageSm>`
- `<$QueryMessageMd>`
- `<$QueryMessageLg>`





## QueryMessage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element QueryMessage
include('eip/MessageConstruction/QueryMessage')

' renders the element
QueryMessage('QueryMessage', 'Query Message', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element QueryMessage
include('eip/MessageConstruction/QueryMessage')

' renders the element
QueryMessage('QueryMessage', 'Query Message', 'an optional tech label', 'an optional description')
@enduml
```

## QueryMessageGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element QueryMessageGroup
include('eip/MessageConstruction/QueryMessage')

' renders the element
QueryMessageGroup('QueryMessageGroup', 'Query Message Group', 'an optional tech label') {
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

' loads the Item which embeds the element QueryMessageGroup
include('eip/MessageConstruction/QueryMessage')

' renders the element
QueryMessageGroup('QueryMessageGroup', 'Query Message Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

