# TestMessage


```text
eip-1/SystemManagement/TestMessage
```

```text
include('eip-1/SystemManagement/TestMessage')
```



| Illustration | TestMessage | TestMessageGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip-1/SystemManagement/TestMessage.png) | ![illustration for TestMessage](../../eip-1/SystemManagement/TestMessage.Local.png) | ![illustration for TestMessageGroup](../../eip-1/SystemManagement/TestMessageGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TestMessageXs>`
- `<$TestMessageSm>`
- `<$TestMessageMd>`
- `<$TestMessageLg>`





## TestMessage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element TestMessage
include('eip-1/SystemManagement/TestMessage')

' renders the element
TestMessage('TestMessage', 'Test Message', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TestMessage
include('eip-1/SystemManagement/TestMessage')

' renders the element
TestMessage('TestMessage', 'Test Message', 'an optional tech label', 'an optional description')
@enduml
```

## TestMessageGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element TestMessageGroup
include('eip-1/SystemManagement/TestMessage')

' renders the element
TestMessageGroup('TestMessageGroup', 'Test Message Group', 'an optional tech label') {
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

' loads the Item which embeds the element TestMessageGroup
include('eip-1/SystemManagement/TestMessage')

' renders the element
TestMessageGroup('TestMessageGroup', 'Test Message Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

