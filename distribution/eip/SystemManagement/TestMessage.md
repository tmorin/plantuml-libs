# TestMessage


```text
eip/SystemManagement/TestMessage
```

```text
include('eip/SystemManagement/TestMessage')
```



| Illustration | TestMessage | TestMessageGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip/SystemManagement/TestMessage.png) | ![illustration for TestMessage](../../eip/SystemManagement/TestMessage.Local.png) | ![illustration for TestMessageGroup](../../eip/SystemManagement/TestMessageGroup.Local.png) |



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
include('eip/bootstrap')

' loads the Item which embeds the element TestMessage
include('eip/SystemManagement/TestMessage')

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
include('eip/bootstrap')

' loads the Item which embeds the element TestMessage
include('eip/SystemManagement/TestMessage')

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
include('eip/bootstrap')

' loads the Item which embeds the element TestMessageGroup
include('eip/SystemManagement/TestMessage')

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
include('eip/bootstrap')

' loads the Item which embeds the element TestMessageGroup
include('eip/SystemManagement/TestMessage')

' renders the element
TestMessageGroup('TestMessageGroup', 'Test Message Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

