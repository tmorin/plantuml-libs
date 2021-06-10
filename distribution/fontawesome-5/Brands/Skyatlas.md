# Skyatlas


```text
fontawesome-5/Brands/Skyatlas
```

```text
include('fontawesome-5/Brands/Skyatlas')
```



| Illustration | Skyatlas |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Skyatlas.png) | ![illustration for Skyatlas](../../fontawesome-5/Brands/Skyatlas.Local.png) |




## Skyatlas

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Skyatlas
include('fontawesome-5/Brands/Skyatlas')

' renders the element
Skyatlas('Skyatlas', 'Skyatlas', 'an optional tech label')
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

' loads the Item which embeds the element Skyatlas
include('fontawesome-5/Brands/Skyatlas')

' renders the element
Skyatlas('Skyatlas', 'Skyatlas', 'an optional tech label')
@enduml
```

