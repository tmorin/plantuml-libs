# Andela


```text
simpleicons-14/A/Andela
```

```text
include('simpleicons-14/A/Andela')
```



| Illustration | Andela |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Andela.png) | ![illustration for Andela](../../simpleicons-14/A/Andela.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AndelaXs>`
- `<$AndelaSm>`
- `<$AndelaMd>`
- `<$AndelaLg>`





## Andela

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Andela
include('simpleicons-14/A/Andela')

' renders the element
Andela('Andela', 'Andela', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Andela
include('simpleicons-14/A/Andela')

' renders the element
Andela('Andela', 'Andela', 'an optional tech label', 'an optional description')
@enduml
```

