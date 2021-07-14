# Pypy


```text
simpleicons-5/P/Pypy
```

```text
include('simpleicons-5/P/Pypy')
```



| Illustration | Pypy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Pypy.png) | ![illustration for Pypy](../../simpleicons-5/P/Pypy.Local.png) |




## Pypy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Pypy
include('simpleicons-5/P/Pypy')

' renders the element
Pypy('Pypy', 'Pypy', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Pypy
include('simpleicons-5/P/Pypy')

' renders the element
Pypy('Pypy', 'Pypy', 'an optional tech label')
@enduml
```

