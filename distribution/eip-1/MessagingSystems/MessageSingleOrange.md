# MessageSingleOrange


```text
eip-1/MessagingSystems/MessageSingleOrange
```

```text
include('eip-1/MessagingSystems/MessageSingleOrange')
```



| Illustration | MessageSingleOrange | MessageSingleOrangeGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip-1/MessagingSystems/MessageSingleOrange.png) | ![illustration for MessageSingleOrange](../../eip-1/MessagingSystems/MessageSingleOrange.Local.png) | ![illustration for MessageSingleOrangeGroup](../../eip-1/MessagingSystems/MessageSingleOrangeGroup.Local.png) |




## MessageSingleOrange

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element MessageSingleOrange
include('eip-1/MessagingSystems/MessageSingleOrange')

' renders the element
MessageSingleOrange('MessageSingleOrange', 'Message Single Orange', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MessageSingleOrange
include('eip-1/MessagingSystems/MessageSingleOrange')

' renders the element
MessageSingleOrange('MessageSingleOrange', 'Message Single Orange', 'an optional tech label', 'an optional description')
@enduml
```

## MessageSingleOrangeGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element MessageSingleOrangeGroup
include('eip-1/MessagingSystems/MessageSingleOrange')

' renders the element
MessageSingleOrangeGroup('MessageSingleOrangeGroup', 'Message Single Orange Group', 'an optional tech label') {
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

' loads the Item which embeds the element MessageSingleOrangeGroup
include('eip-1/MessagingSystems/MessageSingleOrange')

' renders the element
MessageSingleOrangeGroup('MessageSingleOrangeGroup', 'Message Single Orange Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

