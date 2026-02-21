# Piped


```text
simpleicons/P/Piped
```

```text
include('simpleicons/P/Piped')
```



| Illustration | Piped |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Piped.png) | ![illustration for Piped](../../simpleicons/P/Piped.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PipedXs>`
- `<$PipedSm>`
- `<$PipedMd>`
- `<$PipedLg>`





## Piped

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Piped
include('simpleicons/P/Piped')

' renders the element
Piped('Piped', 'Piped', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Piped
include('simpleicons/P/Piped')

' renders the element
Piped('Piped', 'Piped', 'an optional tech label', 'an optional description')
@enduml
```

