# MagnifyingGlassPlus


```text
fontawesome-6/Solid/MagnifyingGlassPlus
```

```text
include('fontawesome-6/Solid/MagnifyingGlassPlus')
```



| Illustration | MagnifyingGlassPlus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/MagnifyingGlassPlus.png) | ![illustration for MagnifyingGlassPlus](../../fontawesome-6/Solid/MagnifyingGlassPlus.Local.png) |




## MagnifyingGlassPlus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MagnifyingGlassPlus
include('fontawesome-6/Solid/MagnifyingGlassPlus')

' renders the element
MagnifyingGlassPlus('MagnifyingGlassPlus', 'Magnifying Glass Plus', 'an optional tech label')
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

' loads the Item which embeds the element MagnifyingGlassPlus
include('fontawesome-6/Solid/MagnifyingGlassPlus')

' renders the element
MagnifyingGlassPlus('MagnifyingGlassPlus', 'Magnifying Glass Plus', 'an optional tech label')
@enduml
```

