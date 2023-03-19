# Wikiquote


```text
simpleicons-8/W/Wikiquote
```

```text
include('simpleicons-8/W/Wikiquote')
```



| Illustration | Wikiquote |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/W/Wikiquote.png) | ![illustration for Wikiquote](../../simpleicons-8/W/Wikiquote.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WikiquoteXs>`
- `<$WikiquoteSm>`
- `<$WikiquoteMd>`
- `<$WikiquoteLg>`





## Wikiquote

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Wikiquote
include('simpleicons-8/W/Wikiquote')

' renders the element
Wikiquote('Wikiquote', 'Wikiquote', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Wikiquote
include('simpleicons-8/W/Wikiquote')

' renders the element
Wikiquote('Wikiquote', 'Wikiquote', 'an optional tech label', 'an optional description')
@enduml
```

