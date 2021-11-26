# Hips


```text
fontawesome-5/Brands/Hips
```

```text
include('fontawesome-5/Brands/Hips')
```



| Illustration | Hips |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Hips.png) | ![illustration for Hips](../../fontawesome-5/Brands/Hips.Local.png) |




## Hips

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Hips
include('fontawesome-5/Brands/Hips')

' renders the element
Hips('Hips', 'Hips', 'an optional tech label')
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

' loads the Item which embeds the element Hips
include('fontawesome-5/Brands/Hips')

' renders the element
Hips('Hips', 'Hips', 'an optional tech label')
@enduml
```

