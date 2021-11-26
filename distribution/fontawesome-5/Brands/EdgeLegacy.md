# EdgeLegacy


```text
fontawesome-5/Brands/EdgeLegacy
```

```text
include('fontawesome-5/Brands/EdgeLegacy')
```



| Illustration | EdgeLegacy |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/EdgeLegacy.png) | ![illustration for EdgeLegacy](../../fontawesome-5/Brands/EdgeLegacy.Local.png) |




## EdgeLegacy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element EdgeLegacy
include('fontawesome-5/Brands/EdgeLegacy')

' renders the element
EdgeLegacy('EdgeLegacy', 'Edge Legacy', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element EdgeLegacy
include('fontawesome-5/Brands/EdgeLegacy')

' renders the element
EdgeLegacy('EdgeLegacy', 'Edge Legacy', 'an optional tech label')
@enduml
```

