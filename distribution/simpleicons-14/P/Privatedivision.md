# Privatedivision


```text
simpleicons-14/P/Privatedivision
```

```text
include('simpleicons-14/P/Privatedivision')
```



| Illustration | Privatedivision |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Privatedivision.png) | ![illustration for Privatedivision](../../simpleicons-14/P/Privatedivision.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PrivatedivisionXs>`
- `<$PrivatedivisionSm>`
- `<$PrivatedivisionMd>`
- `<$PrivatedivisionLg>`





## Privatedivision

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Privatedivision
include('simpleicons-14/P/Privatedivision')

' renders the element
Privatedivision('Privatedivision', 'Privatedivision', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Privatedivision
include('simpleicons-14/P/Privatedivision')

' renders the element
Privatedivision('Privatedivision', 'Privatedivision', 'an optional tech label', 'an optional description')
@enduml
```

