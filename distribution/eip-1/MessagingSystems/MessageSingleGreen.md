# MessageSingleGreen


```text
eip-1/MessagingSystems/MessageSingleGreen
```

```text
include('eip-1/MessagingSystems/MessageSingleGreen')
```



| Illustration | MessageSingleGreen | MessageSingleGreenGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip-1/MessagingSystems/MessageSingleGreen.png) | ![illustration for MessageSingleGreen](../../eip-1/MessagingSystems/MessageSingleGreen.Local.png) | ![illustration for MessageSingleGreenGroup](../../eip-1/MessagingSystems/MessageSingleGreenGroup.Local.png) |



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
include('eip-1/bootstrap')

' loads the Item which embeds the element MessageSingleGreen
include('eip-1/MessagingSystems/MessageSingleGreen')

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
include('eip-1/bootstrap')

' loads the Item which embeds the element MessageSingleGreen
include('eip-1/MessagingSystems/MessageSingleGreen')

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
include('eip-1/bootstrap')

' loads the Item which embeds the element MessageSingleGreenGroup
include('eip-1/MessagingSystems/MessageSingleGreen')

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
include('eip-1/bootstrap')

' loads the Item which embeds the element MessageSingleGreenGroup
include('eip-1/MessagingSystems/MessageSingleGreen')

' renders the element
MessageSingleGreenGroup('MessageSingleGreenGroup', 'Message Single Green Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

