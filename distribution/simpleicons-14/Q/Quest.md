# Quest


```text
simpleicons-14/Q/Quest
```

```text
include('simpleicons-14/Q/Quest')
```



| Illustration | Quest |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Q/Quest.png) | ![illustration for Quest](../../simpleicons-14/Q/Quest.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QuestXs>`
- `<$QuestSm>`
- `<$QuestMd>`
- `<$QuestLg>`





## Quest

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Quest
include('simpleicons-14/Q/Quest')

' renders the element
Quest('Quest', 'Quest', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Quest
include('simpleicons-14/Q/Quest')

' renders the element
Quest('Quest', 'Quest', 'an optional tech label', 'an optional description')
@enduml
```

