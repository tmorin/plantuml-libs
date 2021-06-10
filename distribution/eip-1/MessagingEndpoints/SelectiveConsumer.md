# SelectiveConsumer


```text
eip-1/MessagingEndpoints/SelectiveConsumer
```

```text
include('eip-1/MessagingEndpoints/SelectiveConsumer')
```



| Illustration | SelectiveConsumer | SelectiveConsumerGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip-1/MessagingEndpoints/SelectiveConsumer.png) | ![illustration for SelectiveConsumer](../../eip-1/MessagingEndpoints/SelectiveConsumer.Local.png) | ![illustration for SelectiveConsumerGroup](../../eip-1/MessagingEndpoints/SelectiveConsumerGroup.Local.png) |




## SelectiveConsumer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element SelectiveConsumer
include('eip-1/MessagingEndpoints/SelectiveConsumer')

' renders the element
SelectiveConsumer('SelectiveConsumer', 'Selective Consumer', 'an optional tech label')
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

' loads the Item which embeds the element SelectiveConsumer
include('eip-1/MessagingEndpoints/SelectiveConsumer')

' renders the element
SelectiveConsumer('SelectiveConsumer', 'Selective Consumer', 'an optional tech label')
@enduml
```

## SelectiveConsumerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element SelectiveConsumerGroup
include('eip-1/MessagingEndpoints/SelectiveConsumer')

' renders the element
SelectiveConsumerGroup('SelectiveConsumerGroup', 'Selective Consumer Group', 'an optional tech label') {
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

' loads the Item which embeds the element SelectiveConsumerGroup
include('eip-1/MessagingEndpoints/SelectiveConsumer')

' renders the element
SelectiveConsumerGroup('SelectiveConsumerGroup', 'Selective Consumer Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

