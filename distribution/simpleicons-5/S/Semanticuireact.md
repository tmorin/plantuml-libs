# Semanticuireact


```text
simpleicons-5/S/Semanticuireact
```

```text
include('simpleicons-5/S/Semanticuireact')
```



| Illustration | Semanticuireact |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Semanticuireact.png) | ![illustration for Semanticuireact](../../simpleicons-5/S/Semanticuireact.Local.png) |




## Semanticuireact

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Semanticuireact
include('simpleicons-5/S/Semanticuireact')

' renders the element
Semanticuireact('Semanticuireact', 'Semanticuireact', 'an optional tech label')
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

' loads the Item which embeds the element Semanticuireact
include('simpleicons-5/S/Semanticuireact')

' renders the element
Semanticuireact('Semanticuireact', 'Semanticuireact', 'an optional tech label')
@enduml
```

