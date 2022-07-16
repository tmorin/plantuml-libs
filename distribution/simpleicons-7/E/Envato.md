# Envato


```text
simpleicons-7/E/Envato
```

```text
include('simpleicons-7/E/Envato')
```



| Illustration | Envato |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/E/Envato.png) | ![illustration for Envato](../../simpleicons-7/E/Envato.Local.png) |




## Envato

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Envato
include('simpleicons-7/E/Envato')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Envato
include('simpleicons-7/E/Envato')

' renders the element
Envato('Envato', 'Envato', 'an optional tech label')
@enduml
```

