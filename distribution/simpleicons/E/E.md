# E


```text
simpleicons/E/E
```

```text
include('simpleicons/E/E')
```



| Illustration | E |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/E/E.png) | ![illustration for E](../../simpleicons/E/E.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EXs>`
- `<$ESm>`
- `<$EMd>`
- `<$ELg>`





## E

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element E
include('simpleicons/E/E')

' renders the element
E('E', 'E', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element E
include('simpleicons/E/E')

' renders the element
E('E', 'E', 'an optional tech label', 'an optional description')
@enduml
```

