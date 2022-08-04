# MagnifyingGlass


```text
fontawesome-6/Solid/MagnifyingGlass
```

```text
include('fontawesome-6/Solid/MagnifyingGlass')
```



| Illustration | MagnifyingGlass |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/MagnifyingGlass.png) | ![illustration for MagnifyingGlass](../../fontawesome-6/Solid/MagnifyingGlass.Local.png) |




## MagnifyingGlass

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MagnifyingGlass
include('fontawesome-6/Solid/MagnifyingGlass')

' renders the element
MagnifyingGlass('MagnifyingGlass', 'Magnifying Glass', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MagnifyingGlass
include('fontawesome-6/Solid/MagnifyingGlass')

' renders the element
MagnifyingGlass('MagnifyingGlass', 'Magnifying Glass', 'an optional tech label', 'an optional description')
@enduml
```

