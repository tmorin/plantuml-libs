# Modx


```text
fontawesome-5/Brands/Modx
```

```text
include('fontawesome-5/Brands/Modx')
```



| Illustration | Modx |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Modx.png) | ![illustration for Modx](../../fontawesome-5/Brands/Modx.Local.png) |




## Modx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Modx
include('fontawesome-5/Brands/Modx')

' renders the element
Modx('Modx', 'Modx', 'an optional tech label')
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

' loads the Item which embeds the element Modx
include('fontawesome-5/Brands/Modx')

' renders the element
Modx('Modx', 'Modx', 'an optional tech label')
@enduml
```

