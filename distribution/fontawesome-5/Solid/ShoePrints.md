# ShoePrints


```text
fontawesome-5/Solid/ShoePrints
```

```text
include('fontawesome-5/Solid/ShoePrints')
```



| Illustration | ShoePrints |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ShoePrints.png) | ![illustration for ShoePrints](../../fontawesome-5/Solid/ShoePrints.Local.png) |




## ShoePrints

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ShoePrints
include('fontawesome-5/Solid/ShoePrints')

' renders the element
ShoePrints('ShoePrints', 'Shoe Prints', 'an optional tech label')
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

' loads the Item which embeds the element ShoePrints
include('fontawesome-5/Solid/ShoePrints')

' renders the element
ShoePrints('ShoePrints', 'Shoe Prints', 'an optional tech label')
@enduml
```

