# Gamemaker


```text
simpleicons-14/G/Gamemaker
```

```text
include('simpleicons-14/G/Gamemaker')
```



| Illustration | Gamemaker |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Gamemaker.png) | ![illustration for Gamemaker](../../simpleicons-14/G/Gamemaker.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GamemakerXs>`
- `<$GamemakerSm>`
- `<$GamemakerMd>`
- `<$GamemakerLg>`





## Gamemaker

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Gamemaker
include('simpleicons-14/G/Gamemaker')

' renders the element
Gamemaker('Gamemaker', 'Gamemaker', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gamemaker
include('simpleicons-14/G/Gamemaker')

' renders the element
Gamemaker('Gamemaker', 'Gamemaker', 'an optional tech label', 'an optional description')
@enduml
```

