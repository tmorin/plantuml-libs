# Coronarenderer


```text
simpleicons-6/C/Coronarenderer
```

```text
include('simpleicons-6/C/Coronarenderer')
```



| Illustration | Coronarenderer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Coronarenderer.png) | ![illustration for Coronarenderer](../../simpleicons-6/C/Coronarenderer.Local.png) |




## Coronarenderer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Coronarenderer
include('simpleicons-6/C/Coronarenderer')

' renders the element
Coronarenderer('Coronarenderer', 'Coronarenderer', 'an optional tech label')
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

' loads the Item which embeds the element Coronarenderer
include('simpleicons-6/C/Coronarenderer')

' renders the element
Coronarenderer('Coronarenderer', 'Coronarenderer', 'an optional tech label')
@enduml
```

