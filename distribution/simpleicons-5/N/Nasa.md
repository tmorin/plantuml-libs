# Nasa


```text
simpleicons-5/N/Nasa
```

```text
include('simpleicons-5/N/Nasa')
```



| Illustration | Nasa |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/N/Nasa.png) | ![illustration for Nasa](../../simpleicons-5/N/Nasa.Local.png) |




## Nasa

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Nasa
include('simpleicons-5/N/Nasa')

' renders the element
Nasa('Nasa', 'Nasa', 'an optional tech label')
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

' loads the Item which embeds the element Nasa
include('simpleicons-5/N/Nasa')

' renders the element
Nasa('Nasa', 'Nasa', 'an optional tech label')
@enduml
```

