# MessageSequence


```text
eip/MessageConstruction/MessageSequence
```

```text
include('eip/MessageConstruction/MessageSequence')
```



| Illustration | MessageSequence | MessageSequenceGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip/MessageConstruction/MessageSequence.png) | ![illustration for MessageSequence](../../eip/MessageConstruction/MessageSequence.Local.png) | ![illustration for MessageSequenceGroup](../../eip/MessageConstruction/MessageSequenceGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MessageSequenceXs>`
- `<$MessageSequenceSm>`
- `<$MessageSequenceMd>`
- `<$MessageSequenceLg>`





## MessageSequence

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element MessageSequence
include('eip/MessageConstruction/MessageSequence')

' renders the element
MessageSequence('MessageSequence', 'Message Sequence', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MessageSequence
include('eip/MessageConstruction/MessageSequence')

' renders the element
MessageSequence('MessageSequence', 'Message Sequence', 'an optional tech label', 'an optional description')
@enduml
```

## MessageSequenceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element MessageSequenceGroup
include('eip/MessageConstruction/MessageSequence')

' renders the element
MessageSequenceGroup('MessageSequenceGroup', 'Message Sequence Group', 'an optional tech label') {
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

' loads the Item which embeds the element MessageSequenceGroup
include('eip/MessageConstruction/MessageSequence')

' renders the element
MessageSequenceGroup('MessageSequenceGroup', 'Message Sequence Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

