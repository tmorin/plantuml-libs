# CompetingConsumers


```text
eip-1/MessagingEndpoints/CompetingConsumers
```

```text
include('eip-1/MessagingEndpoints/CompetingConsumers')
```



| Illustration | CompetingConsumers | CompetingConsumersGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip-1/MessagingEndpoints/CompetingConsumers.png) | ![illustration for CompetingConsumers](../../eip-1/MessagingEndpoints/CompetingConsumers.Local.png) | ![illustration for CompetingConsumersGroup](../../eip-1/MessagingEndpoints/CompetingConsumersGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CompetingConsumersXs>`
- `<$CompetingConsumersSm>`
- `<$CompetingConsumersMd>`
- `<$CompetingConsumersLg>`





## CompetingConsumers

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element CompetingConsumers
include('eip-1/MessagingEndpoints/CompetingConsumers')

' renders the element
CompetingConsumers('CompetingConsumers', 'Competing Consumers', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CompetingConsumers
include('eip-1/MessagingEndpoints/CompetingConsumers')

' renders the element
CompetingConsumers('CompetingConsumers', 'Competing Consumers', 'an optional tech label', 'an optional description')
@enduml
```

## CompetingConsumersGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element CompetingConsumersGroup
include('eip-1/MessagingEndpoints/CompetingConsumers')

' renders the element
CompetingConsumersGroup('CompetingConsumersGroup', 'Competing Consumers Group', 'an optional tech label') {
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

' loads the Item which embeds the element CompetingConsumersGroup
include('eip-1/MessagingEndpoints/CompetingConsumers')

' renders the element
CompetingConsumersGroup('CompetingConsumersGroup', 'Competing Consumers Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

