# MessageSequence


```text
eip-1/MessageConstruction/MessageSequence
```

```text
include('eip-1/MessageConstruction/MessageSequence')
```



| Illustration | MessageSequence | MessageSequenceGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip-1/MessageConstruction/MessageSequence.png) | ![illustration for MessageSequence](../../eip-1/MessageConstruction/MessageSequence.Local.png) | ![illustration for MessageSequenceGroup](../../eip-1/MessageConstruction/MessageSequenceGroup.Local.png) |



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
include('eip-1/bootstrap')

' loads the Item which embeds the element MessageSequence
include('eip-1/MessageConstruction/MessageSequence')

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
include('eip-1/bootstrap')

' loads the Item which embeds the element MessageSequence
include('eip-1/MessageConstruction/MessageSequence')

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
include('eip-1/bootstrap')

' loads the Item which embeds the element MessageSequenceGroup
include('eip-1/MessageConstruction/MessageSequence')

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
include('eip-1/bootstrap')

' loads the Item which embeds the element MessageSequenceGroup
include('eip-1/MessageConstruction/MessageSequence')

' renders the element
MessageSequenceGroup('MessageSequenceGroup', 'Message Sequence Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

