# Imessage


```text
simpleicons/I/Imessage
```

```text
include('simpleicons/I/Imessage')
```



| Illustration | Imessage |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/I/Imessage.png) | ![illustration for Imessage](../../simpleicons/I/Imessage.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ImessageXs>`
- `<$ImessageSm>`
- `<$ImessageMd>`
- `<$ImessageLg>`





## Imessage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Imessage
include('simpleicons/I/Imessage')

' renders the element
Imessage('Imessage', 'Imessage', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Imessage
include('simpleicons/I/Imessage')

' renders the element
Imessage('Imessage', 'Imessage', 'an optional tech label', 'an optional description')
@enduml
```

