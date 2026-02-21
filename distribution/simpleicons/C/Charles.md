# Charles


```text
simpleicons/C/Charles
```

```text
include('simpleicons/C/Charles')
```



| Illustration | Charles |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Charles.png) | ![illustration for Charles](../../simpleicons/C/Charles.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CharlesXs>`
- `<$CharlesSm>`
- `<$CharlesMd>`
- `<$CharlesLg>`





## Charles

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Charles
include('simpleicons/C/Charles')

' renders the element
Charles('Charles', 'Charles', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Charles
include('simpleicons/C/Charles')

' renders the element
Charles('Charles', 'Charles', 'an optional tech label', 'an optional description')
@enduml
```

