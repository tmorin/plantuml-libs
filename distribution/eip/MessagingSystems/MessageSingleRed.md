# MessageSingleRed


```text
eip/MessagingSystems/MessageSingleRed
```

```text
include('eip/MessagingSystems/MessageSingleRed')
```



| Illustration | MessageSingleRed | MessageSingleRedGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip/MessagingSystems/MessageSingleRed.png) | ![illustration for MessageSingleRed](../../eip/MessagingSystems/MessageSingleRed.Local.png) | ![illustration for MessageSingleRedGroup](../../eip/MessagingSystems/MessageSingleRedGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MessageSingleRedXs>`
- `<$MessageSingleRedSm>`
- `<$MessageSingleRedMd>`
- `<$MessageSingleRedLg>`





## MessageSingleRed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element MessageSingleRed
include('eip/MessagingSystems/MessageSingleRed')

' renders the element
MessageSingleRed('MessageSingleRed', 'Message Single Red', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MessageSingleRed
include('eip/MessagingSystems/MessageSingleRed')

' renders the element
MessageSingleRed('MessageSingleRed', 'Message Single Red', 'an optional tech label', 'an optional description')
@enduml
```

## MessageSingleRedGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element MessageSingleRedGroup
include('eip/MessagingSystems/MessageSingleRed')

' renders the element
MessageSingleRedGroup('MessageSingleRedGroup', 'Message Single Red Group', 'an optional tech label') {
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

' loads the Item which embeds the element MessageSingleRedGroup
include('eip/MessagingSystems/MessageSingleRed')

' renders the element
MessageSingleRedGroup('MessageSingleRedGroup', 'Message Single Red Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

