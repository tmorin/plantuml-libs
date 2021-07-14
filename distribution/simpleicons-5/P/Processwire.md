# Processwire


```text
simpleicons-5/P/Processwire
```

```text
include('simpleicons-5/P/Processwire')
```



| Illustration | Processwire |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Processwire.png) | ![illustration for Processwire](../../simpleicons-5/P/Processwire.Local.png) |




## Processwire

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Processwire
include('simpleicons-5/P/Processwire')

' renders the element
Processwire('Processwire', 'Processwire', 'an optional tech label')
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

' loads the Item which embeds the element Processwire
include('simpleicons-5/P/Processwire')

' renders the element
Processwire('Processwire', 'Processwire', 'an optional tech label')
@enduml
```

