# Pypi


```text
simpleicons-5/P/Pypi
```

```text
include('simpleicons-5/P/Pypi')
```



| Illustration | Pypi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Pypi.png) | ![illustration for Pypi](../../simpleicons-5/P/Pypi.Local.png) |




## Pypi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Pypi
include('simpleicons-5/P/Pypi')

' renders the element
Pypi('Pypi', 'Pypi', 'an optional tech label')
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

' loads the Item which embeds the element Pypi
include('simpleicons-5/P/Pypi')

' renders the element
Pypi('Pypi', 'Pypi', 'an optional tech label')
@enduml
```

