# Neptune


```text
simpleicons/N/Neptune
```

```text
include('simpleicons/N/Neptune')
```



| Illustration | Neptune |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Neptune.png) | ![illustration for Neptune](../../simpleicons/N/Neptune.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NeptuneXs>`
- `<$NeptuneSm>`
- `<$NeptuneMd>`
- `<$NeptuneLg>`





## Neptune

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Neptune
include('simpleicons/N/Neptune')

' renders the element
Neptune('Neptune', 'Neptune', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Neptune
include('simpleicons/N/Neptune')

' renders the element
Neptune('Neptune', 'Neptune', 'an optional tech label', 'an optional description')
@enduml
```

