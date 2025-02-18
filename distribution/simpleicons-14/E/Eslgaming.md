# Eslgaming


```text
simpleicons-14/E/Eslgaming
```

```text
include('simpleicons-14/E/Eslgaming')
```



| Illustration | Eslgaming |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Eslgaming.png) | ![illustration for Eslgaming](../../simpleicons-14/E/Eslgaming.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EslgamingXs>`
- `<$EslgamingSm>`
- `<$EslgamingMd>`
- `<$EslgamingLg>`





## Eslgaming

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Eslgaming
include('simpleicons-14/E/Eslgaming')

' renders the element
Eslgaming('Eslgaming', 'Eslgaming', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Eslgaming
include('simpleicons-14/E/Eslgaming')

' renders the element
Eslgaming('Eslgaming', 'Eslgaming', 'an optional tech label', 'an optional description')
@enduml
```

