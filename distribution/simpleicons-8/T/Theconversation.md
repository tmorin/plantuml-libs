# Theconversation


```text
simpleicons-8/T/Theconversation
```

```text
include('simpleicons-8/T/Theconversation')
```



| Illustration | Theconversation |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/T/Theconversation.png) | ![illustration for Theconversation](../../simpleicons-8/T/Theconversation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TheconversationXs>`
- `<$TheconversationSm>`
- `<$TheconversationMd>`
- `<$TheconversationLg>`





## Theconversation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Theconversation
include('simpleicons-8/T/Theconversation')

' renders the element
Theconversation('Theconversation', 'Theconversation', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Theconversation
include('simpleicons-8/T/Theconversation')

' renders the element
Theconversation('Theconversation', 'Theconversation', 'an optional tech label', 'an optional description')
@enduml
```

