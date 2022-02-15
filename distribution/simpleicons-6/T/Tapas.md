# Tapas


```text
simpleicons-6/T/Tapas
```

```text
include('simpleicons-6/T/Tapas')
```



| Illustration | Tapas |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/T/Tapas.png) | ![illustration for Tapas](../../simpleicons-6/T/Tapas.Local.png) |




## Tapas

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Tapas
include('simpleicons-6/T/Tapas')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Tapas
include('simpleicons-6/T/Tapas')

' renders the element
Tapas('Tapas', 'Tapas', 'an optional tech label')
@enduml
```

