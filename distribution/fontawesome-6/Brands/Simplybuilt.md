# Simplybuilt


```text
fontawesome-6/Brands/Simplybuilt
```

```text
include('fontawesome-6/Brands/Simplybuilt')
```



| Illustration | Simplybuilt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Simplybuilt.png) | ![illustration for Simplybuilt](../../fontawesome-6/Brands/Simplybuilt.Local.png) |




## Simplybuilt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Simplybuilt
include('fontawesome-6/Brands/Simplybuilt')

' renders the element
Simplybuilt('Simplybuilt', 'Simplybuilt', 'an optional tech label')
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

' loads the Item which embeds the element Simplybuilt
include('fontawesome-6/Brands/Simplybuilt')

' renders the element
Simplybuilt('Simplybuilt', 'Simplybuilt', 'an optional tech label')
@enduml
```

