# CommandMessage


```text
eip-1/MessageConstruction/CommandMessage
```

```text
include('eip-1/MessageConstruction/CommandMessage')
```



| Illustration | CommandMessage | CommandMessageGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip-1/MessageConstruction/CommandMessage.png) | ![illustration for CommandMessage](../../eip-1/MessageConstruction/CommandMessage.Local.png) | ![illustration for CommandMessageGroup](../../eip-1/MessageConstruction/CommandMessageGroup.Local.png) |




## CommandMessage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element CommandMessage
include('eip-1/MessageConstruction/CommandMessage')

' renders the element
CommandMessage('CommandMessage', 'Command Message', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CommandMessage
include('eip-1/MessageConstruction/CommandMessage')

' renders the element
CommandMessage('CommandMessage', 'Command Message', 'an optional tech label', 'an optional description')
@enduml
```

## CommandMessageGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element CommandMessageGroup
include('eip-1/MessageConstruction/CommandMessage')

' renders the element
CommandMessageGroup('CommandMessageGroup', 'Command Message Group', 'an optional tech label') {
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

' loads the Item which embeds the element CommandMessageGroup
include('eip-1/MessageConstruction/CommandMessage')

' renders the element
CommandMessageGroup('CommandMessageGroup', 'Command Message Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

