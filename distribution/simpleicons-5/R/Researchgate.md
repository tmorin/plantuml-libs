# Researchgate


```text
simpleicons-5/R/Researchgate
```

```text
include('simpleicons-5/R/Researchgate')
```



| Illustration | Researchgate |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/R/Researchgate.png) | ![illustration for Researchgate](../../simpleicons-5/R/Researchgate.Local.png) |




## Researchgate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Researchgate
include('simpleicons-5/R/Researchgate')

' renders the element
Researchgate('Researchgate', 'Researchgate', 'an optional tech label')
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

' loads the Item which embeds the element Researchgate
include('simpleicons-5/R/Researchgate')

' renders the element
Researchgate('Researchgate', 'Researchgate', 'an optional tech label')
@enduml
```

