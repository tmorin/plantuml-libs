# VectorSquare


```text
fontawesome-5/Solid/VectorSquare
```

```text
include('fontawesome-5/Solid/VectorSquare')
```



| Illustration | VectorSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/VectorSquare.png) | ![illustration for VectorSquare](../../fontawesome-5/Solid/VectorSquare.Local.png) |




## VectorSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element VectorSquare
include('fontawesome-5/Solid/VectorSquare')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element VectorSquare
include('fontawesome-5/Solid/VectorSquare')

' renders the element
VectorSquare('VectorSquare', 'Vector Square', 'an optional tech label')
@enduml
```

