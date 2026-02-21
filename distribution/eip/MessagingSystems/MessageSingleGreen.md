# MessageSingleGreen


```text
eip/MessagingSystems/MessageSingleGreen
```

```text
include('eip/MessagingSystems/MessageSingleGreen')
```



| Illustration | MessageSingleGreen | MessageSingleGreenGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip/MessagingSystems/MessageSingleGreen.png) | ![illustration for MessageSingleGreen](../../eip/MessagingSystems/MessageSingleGreen.Local.png) | ![illustration for MessageSingleGreenGroup](../../eip/MessagingSystems/MessageSingleGreenGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MessageSingleGreenXs>`
- `<$MessageSingleGreenSm>`
- `<$MessageSingleGreenMd>`
- `<$MessageSingleGreenLg>`





## MessageSingleGreen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element MessageSingleGreen
include('eip/MessagingSystems/MessageSingleGreen')

' renders the element
MessageSingleGreen('MessageSingleGreen', 'Message Single Green', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MessageSingleGreen
include('eip/MessagingSystems/MessageSingleGreen')

' renders the element
MessageSingleGreen('MessageSingleGreen', 'Message Single Green', 'an optional tech label', 'an optional description')
@enduml
```

## MessageSingleGreenGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element MessageSingleGreenGroup
include('eip/MessagingSystems/MessageSingleGreen')

' renders the element
MessageSingleGreenGroup('MessageSingleGreenGroup', 'Message Single Green Group', 'an optional tech label') {
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

' loads the Item which embeds the element MessageSingleGreenGroup
include('eip/MessagingSystems/MessageSingleGreen')

' renders the element
MessageSingleGreenGroup('MessageSingleGreenGroup', 'Message Single Green Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

