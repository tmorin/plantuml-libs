# Agora


```text
simpleicons-7/A/Agora
```

```text
include('simpleicons-7/A/Agora')
```



| Illustration | Agora |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Agora.png) | ![illustration for Agora](../../simpleicons-7/A/Agora.Local.png) |




## Agora

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Agora
include('simpleicons-7/A/Agora')

' renders the element
Agora('Agora', 'Agora', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Agora
include('simpleicons-7/A/Agora')

' renders the element
Agora('Agora', 'Agora', 'an optional tech label', 'an optional description')
@enduml
```

