# Skyatlas


```text
fontawesome-6/Brands/Skyatlas
```

```text
include('fontawesome-6/Brands/Skyatlas')
```



| Illustration | Skyatlas |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Skyatlas.png) | ![illustration for Skyatlas](../../fontawesome-6/Brands/Skyatlas.Local.png) |




## Skyatlas

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Skyatlas
include('fontawesome-6/Brands/Skyatlas')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Skyatlas
include('fontawesome-6/Brands/Skyatlas')

' renders the element
Skyatlas('Skyatlas', 'Skyatlas', 'an optional tech label')
@enduml
```

