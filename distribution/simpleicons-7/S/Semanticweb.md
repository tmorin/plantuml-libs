# Semanticweb


```text
simpleicons-7/S/Semanticweb
```

```text
include('simpleicons-7/S/Semanticweb')
```



| Illustration | Semanticweb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Semanticweb.png) | ![illustration for Semanticweb](../../simpleicons-7/S/Semanticweb.Local.png) |




## Semanticweb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Semanticweb
include('simpleicons-7/S/Semanticweb')

' renders the element
Semanticweb('Semanticweb', 'Semanticweb', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Semanticweb
include('simpleicons-7/S/Semanticweb')

' renders the element
Semanticweb('Semanticweb', 'Semanticweb', 'an optional tech label', 'an optional description')
@enduml
```

