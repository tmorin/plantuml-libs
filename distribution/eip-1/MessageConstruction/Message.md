# Message


```text
eip-1/MessageConstruction/Message
```

```text
include('eip-1/MessageConstruction/Message')
```



| Illustration | Message | MessageGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip-1/MessageConstruction/Message.png) | ![illustration for Message](../../eip-1/MessageConstruction/Message.Local.png) | ![illustration for MessageGroup](../../eip-1/MessageConstruction/MessageGroup.Local.png) |




## Message

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element Message
include('eip-1/MessageConstruction/Message')

' renders the element
Message('Message', 'Message', 'an optional tech label')
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

' loads the Item which embeds the element Message
include('eip-1/MessageConstruction/Message')

' renders the element
Message('Message', 'Message', 'an optional tech label')
@enduml
```

## MessageGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element MessageGroup
include('eip-1/MessageConstruction/Message')

' renders the element
MessageGroup('MessageGroup', 'Message Group', 'an optional tech label') {
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

' loads the Item which embeds the element MessageGroup
include('eip-1/MessageConstruction/Message')

' renders the element
MessageGroup('MessageGroup', 'Message Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

