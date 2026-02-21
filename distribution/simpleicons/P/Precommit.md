# Precommit


```text
simpleicons/P/Precommit
```

```text
include('simpleicons/P/Precommit')
```



| Illustration | Precommit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Precommit.png) | ![illustration for Precommit](../../simpleicons/P/Precommit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PrecommitXs>`
- `<$PrecommitSm>`
- `<$PrecommitMd>`
- `<$PrecommitLg>`





## Precommit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Precommit
include('simpleicons/P/Precommit')

' renders the element
Precommit('Precommit', 'Precommit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Precommit
include('simpleicons/P/Precommit')

' renders the element
Precommit('Precommit', 'Precommit', 'an optional tech label', 'an optional description')
@enduml
```

