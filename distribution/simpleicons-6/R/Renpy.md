# Renpy


```text
simpleicons-6/R/Renpy
```

```text
include('simpleicons-6/R/Renpy')
```



| Illustration | Renpy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Renpy.png) | ![illustration for Renpy](../../simpleicons-6/R/Renpy.Local.png) |




## Renpy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Renpy
include('simpleicons-6/R/Renpy')

' renders the element
Renpy('Renpy', 'Renpy', 'an optional tech label')
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

' loads the Item which embeds the element Renpy
include('simpleicons-6/R/Renpy')

' renders the element
Renpy('Renpy', 'Renpy', 'an optional tech label')
@enduml
```

