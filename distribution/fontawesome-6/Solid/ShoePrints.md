# ShoePrints


```text
fontawesome-6/Solid/ShoePrints
```

```text
include('fontawesome-6/Solid/ShoePrints')
```



| Illustration | ShoePrints |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ShoePrints.png) | ![illustration for ShoePrints](../../fontawesome-6/Solid/ShoePrints.Local.png) |




## ShoePrints

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ShoePrints
include('fontawesome-6/Solid/ShoePrints')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ShoePrints
include('fontawesome-6/Solid/ShoePrints')

' renders the element
ShoePrints('ShoePrints', 'Shoe Prints', 'an optional tech label')
@enduml
```

