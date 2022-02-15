# Researchgate


```text
simpleicons-6/R/Researchgate
```

```text
include('simpleicons-6/R/Researchgate')
```



| Illustration | Researchgate |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Researchgate.png) | ![illustration for Researchgate](../../simpleicons-6/R/Researchgate.Local.png) |




## Researchgate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Researchgate
include('simpleicons-6/R/Researchgate')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Researchgate
include('simpleicons-6/R/Researchgate')

' renders the element
Researchgate('Researchgate', 'Researchgate', 'an optional tech label')
@enduml
```

