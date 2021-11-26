# Semanticrelease


```text
simpleicons-5/S/Semanticrelease
```

```text
include('simpleicons-5/S/Semanticrelease')
```



| Illustration | Semanticrelease |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Semanticrelease.png) | ![illustration for Semanticrelease](../../simpleicons-5/S/Semanticrelease.Local.png) |




## Semanticrelease

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Semanticrelease
include('simpleicons-5/S/Semanticrelease')

' renders the element
Semanticrelease('Semanticrelease', 'Semanticrelease', 'an optional tech label')
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

' loads the Item which embeds the element Semanticrelease
include('simpleicons-5/S/Semanticrelease')

' renders the element
Semanticrelease('Semanticrelease', 'Semanticrelease', 'an optional tech label')
@enduml
```

