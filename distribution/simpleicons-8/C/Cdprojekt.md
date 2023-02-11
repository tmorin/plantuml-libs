# Cdprojekt


```text
simpleicons-8/C/Cdprojekt
```

```text
include('simpleicons-8/C/Cdprojekt')
```



| Illustration | Cdprojekt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/C/Cdprojekt.png) | ![illustration for Cdprojekt](../../simpleicons-8/C/Cdprojekt.Local.png) |




## Cdprojekt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Cdprojekt
include('simpleicons-8/C/Cdprojekt')

' renders the element
Cdprojekt('Cdprojekt', 'Cdprojekt', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Cdprojekt
include('simpleicons-8/C/Cdprojekt')

' renders the element
Cdprojekt('Cdprojekt', 'Cdprojekt', 'an optional tech label', 'an optional description')
@enduml
```

