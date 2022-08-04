# QueryMessage


```text
eip-1/MessageConstruction/QueryMessage
```

```text
include('eip-1/MessageConstruction/QueryMessage')
```



| Illustration | QueryMessage | QueryMessageGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip-1/MessageConstruction/QueryMessage.png) | ![illustration for QueryMessage](../../eip-1/MessageConstruction/QueryMessage.Local.png) | ![illustration for QueryMessageGroup](../../eip-1/MessageConstruction/QueryMessageGroup.Local.png) |




## QueryMessage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element QueryMessage
include('eip-1/MessageConstruction/QueryMessage')

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
include('eip-1/bootstrap')

' loads the Item which embeds the element QueryMessage
include('eip-1/MessageConstruction/QueryMessage')

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
include('eip-1/bootstrap')

' loads the Item which embeds the element QueryMessageGroup
include('eip-1/MessageConstruction/QueryMessage')

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
include('eip-1/bootstrap')

' loads the Item which embeds the element QueryMessageGroup
include('eip-1/MessageConstruction/QueryMessage')

' renders the element
QueryMessageGroup('QueryMessageGroup', 'Query Message Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

