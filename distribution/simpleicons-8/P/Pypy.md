# Pypy


```text
simpleicons-8/P/Pypy
```

```text
include('simpleicons-8/P/Pypy')
```



| Illustration | Pypy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Pypy.png) | ![illustration for Pypy](../../simpleicons-8/P/Pypy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PypyXs>`
- `<$PypySm>`
- `<$PypyMd>`
- `<$PypyLg>`





## Pypy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Pypy
include('simpleicons-8/P/Pypy')

' renders the element
Pypy('Pypy', 'Pypy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pypy
include('simpleicons-8/P/Pypy')

' renders the element
Pypy('Pypy', 'Pypy', 'an optional tech label', 'an optional description')
@enduml
```

