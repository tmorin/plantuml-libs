# MessageTranslator


```text
eip/MessagingSystems/MessageTranslator
```

```text
include('eip/MessagingSystems/MessageTranslator')
```



| Illustration | MessageTranslator | MessageTranslatorGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip/MessagingSystems/MessageTranslator.png) | ![illustration for MessageTranslator](../../eip/MessagingSystems/MessageTranslator.Local.png) | ![illustration for MessageTranslatorGroup](../../eip/MessagingSystems/MessageTranslatorGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MessageTranslatorXs>`
- `<$MessageTranslatorSm>`
- `<$MessageTranslatorMd>`
- `<$MessageTranslatorLg>`





## MessageTranslator

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element MessageTranslator
include('eip/MessagingSystems/MessageTranslator')

' renders the element
MessageTranslator('MessageTranslator', 'Message Translator', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MessageTranslator
include('eip/MessagingSystems/MessageTranslator')

' renders the element
MessageTranslator('MessageTranslator', 'Message Translator', 'an optional tech label', 'an optional description')
@enduml
```

## MessageTranslatorGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element MessageTranslatorGroup
include('eip/MessagingSystems/MessageTranslator')

' renders the element
MessageTranslatorGroup('MessageTranslatorGroup', 'Message Translator Group', 'an optional tech label') {
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

' loads the Item which embeds the element MessageTranslatorGroup
include('eip/MessagingSystems/MessageTranslator')

' renders the element
MessageTranslatorGroup('MessageTranslatorGroup', 'Message Translator Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

