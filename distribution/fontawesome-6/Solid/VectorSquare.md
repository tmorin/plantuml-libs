# VectorSquare


```text
fontawesome-6/Solid/VectorSquare
```

```text
include('fontawesome-6/Solid/VectorSquare')
```



| Illustration | VectorSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/VectorSquare.png) | ![illustration for VectorSquare](../../fontawesome-6/Solid/VectorSquare.Local.png) |




## VectorSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element VectorSquare
include('fontawesome-6/Solid/VectorSquare')

' renders the element
VectorSquare('VectorSquare', 'Vector Square', 'an optional tech label')
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

' loads the Item which embeds the element VectorSquare
include('fontawesome-6/Solid/VectorSquare')

' renders the element
VectorSquare('VectorSquare', 'Vector Square', 'an optional tech label')
@enduml
```

