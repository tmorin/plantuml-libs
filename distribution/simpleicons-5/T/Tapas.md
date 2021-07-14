# Tapas


```text
simpleicons-5/T/Tapas
```

```text
include('simpleicons-5/T/Tapas')
```



| Illustration | Tapas |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Tapas.png) | ![illustration for Tapas](../../simpleicons-5/T/Tapas.Local.png) |




## Tapas

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Tapas
include('simpleicons-5/T/Tapas')

' renders the element
Tapas('Tapas', 'Tapas', 'an optional tech label')
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

' loads the Item which embeds the element Tapas
include('simpleicons-5/T/Tapas')

' renders the element
Tapas('Tapas', 'Tapas', 'an optional tech label')
@enduml
```

