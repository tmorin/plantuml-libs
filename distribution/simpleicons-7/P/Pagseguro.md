# Pagseguro


```text
simpleicons-7/P/Pagseguro
```

```text
include('simpleicons-7/P/Pagseguro')
```



| Illustration | Pagseguro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Pagseguro.png) | ![illustration for Pagseguro](../../simpleicons-7/P/Pagseguro.Local.png) |




## Pagseguro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Pagseguro
include('simpleicons-7/P/Pagseguro')

' renders the element
Pagseguro('Pagseguro', 'Pagseguro', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Pagseguro
include('simpleicons-7/P/Pagseguro')

' renders the element
Pagseguro('Pagseguro', 'Pagseguro', 'an optional tech label')
@enduml
```

