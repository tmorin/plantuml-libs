# Processwire


```text
simpleicons/P/Processwire
```

```text
include('simpleicons/P/Processwire')
```



| Illustration | Processwire |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Processwire.png) | ![illustration for Processwire](../../simpleicons/P/Processwire.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ProcesswireXs>`
- `<$ProcesswireSm>`
- `<$ProcesswireMd>`
- `<$ProcesswireLg>`





## Processwire

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Processwire
include('simpleicons/P/Processwire')

' renders the element
Processwire('Processwire', 'Processwire', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Processwire
include('simpleicons/P/Processwire')

' renders the element
Processwire('Processwire', 'Processwire', 'an optional tech label', 'an optional description')
@enduml
```

