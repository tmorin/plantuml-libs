# MessageRouter


```text
eip-1/MessagingSystems/MessageRouter
```

```text
include('eip-1/MessagingSystems/MessageRouter')
```



| Illustration | MessageRouter | MessageRouterGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip-1/MessagingSystems/MessageRouter.png) | ![illustration for MessageRouter](../../eip-1/MessagingSystems/MessageRouter.Local.png) | ![illustration for MessageRouterGroup](../../eip-1/MessagingSystems/MessageRouterGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MessageRouterXs>`
- `<$MessageRouterSm>`
- `<$MessageRouterMd>`
- `<$MessageRouterLg>`





## MessageRouter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element MessageRouter
include('eip-1/MessagingSystems/MessageRouter')

' renders the element
MessageRouter('MessageRouter', 'Message Router', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MessageRouter
include('eip-1/MessagingSystems/MessageRouter')

' renders the element
MessageRouter('MessageRouter', 'Message Router', 'an optional tech label', 'an optional description')
@enduml
```

## MessageRouterGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element MessageRouterGroup
include('eip-1/MessagingSystems/MessageRouter')

' renders the element
MessageRouterGroup('MessageRouterGroup', 'Message Router Group', 'an optional tech label') {
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

' loads the Item which embeds the element MessageRouterGroup
include('eip-1/MessagingSystems/MessageRouter')

' renders the element
MessageRouterGroup('MessageRouterGroup', 'Message Router Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

