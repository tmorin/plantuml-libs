# Cdprojekt


```text
simpleicons-5/C/Cdprojekt
```

```text
include('simpleicons-5/C/Cdprojekt')
```



| Illustration | Cdprojekt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Cdprojekt.png) | ![illustration for Cdprojekt](../../simpleicons-5/C/Cdprojekt.Local.png) |




## Cdprojekt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Cdprojekt
include('simpleicons-5/C/Cdprojekt')

' renders the element
Cdprojekt('Cdprojekt', 'Cdprojekt', 'an optional tech label')
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

' loads the Item which embeds the element Cdprojekt
include('simpleicons-5/C/Cdprojekt')

' renders the element
Cdprojekt('Cdprojekt', 'Cdprojekt', 'an optional tech label')
@enduml
```

