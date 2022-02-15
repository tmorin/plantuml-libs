# Envato


```text
simpleicons-6/E/Envato
```

```text
include('simpleicons-6/E/Envato')
```



| Illustration | Envato |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/E/Envato.png) | ![illustration for Envato](../../simpleicons-6/E/Envato.Local.png) |




## Envato

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Envato
include('simpleicons-6/E/Envato')

' renders the element
Envato('Envato', 'Envato', 'an optional tech label')
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

' loads the Item which embeds the element Envato
include('simpleicons-6/E/Envato')

' renders the element
Envato('Envato', 'Envato', 'an optional tech label')
@enduml
```

