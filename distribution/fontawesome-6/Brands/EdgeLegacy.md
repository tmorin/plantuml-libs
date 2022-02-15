# EdgeLegacy


```text
fontawesome-6/Brands/EdgeLegacy
```

```text
include('fontawesome-6/Brands/EdgeLegacy')
```



| Illustration | EdgeLegacy |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/EdgeLegacy.png) | ![illustration for EdgeLegacy](../../fontawesome-6/Brands/EdgeLegacy.Local.png) |




## EdgeLegacy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element EdgeLegacy
include('fontawesome-6/Brands/EdgeLegacy')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element EdgeLegacy
include('fontawesome-6/Brands/EdgeLegacy')

' renders the element
EdgeLegacy('EdgeLegacy', 'Edge Legacy', 'an optional tech label')
@enduml
```

