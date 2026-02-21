# Chatwoot


```text
simpleicons/C/Chatwoot
```

```text
include('simpleicons/C/Chatwoot')
```



| Illustration | Chatwoot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Chatwoot.png) | ![illustration for Chatwoot](../../simpleicons/C/Chatwoot.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChatwootXs>`
- `<$ChatwootSm>`
- `<$ChatwootMd>`
- `<$ChatwootLg>`





## Chatwoot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Chatwoot
include('simpleicons/C/Chatwoot')

' renders the element
Chatwoot('Chatwoot', 'Chatwoot', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Chatwoot
include('simpleicons/C/Chatwoot')

' renders the element
Chatwoot('Chatwoot', 'Chatwoot', 'an optional tech label', 'an optional description')
@enduml
```

