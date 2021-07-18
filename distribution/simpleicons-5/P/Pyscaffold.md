# Pyscaffold


```text
simpleicons-5/P/Pyscaffold
```

```text
include('simpleicons-5/P/Pyscaffold')
```



| Illustration | Pyscaffold |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Pyscaffold.png) | ![illustration for Pyscaffold](../../simpleicons-5/P/Pyscaffold.Local.png) |




## Pyscaffold

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Pyscaffold
include('simpleicons-5/P/Pyscaffold')

' renders the element
Pyscaffold('Pyscaffold', 'Pyscaffold', 'an optional tech label')
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

' loads the Item which embeds the element Pyscaffold
include('simpleicons-5/P/Pyscaffold')

' renders the element
Pyscaffold('Pyscaffold', 'Pyscaffold', 'an optional tech label')
@enduml
```

