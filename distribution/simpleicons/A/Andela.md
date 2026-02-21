# Andela


```text
simpleicons/A/Andela
```

```text
include('simpleicons/A/Andela')
```



| Illustration | Andela |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Andela.png) | ![illustration for Andela](../../simpleicons/A/Andela.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Andela
include('simpleicons/A/Andela')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Andela
include('simpleicons/A/Andela')

' renders the element
Andela('Andela', 'Andela', 'an optional tech label', 'an optional description')
@enduml
```

