# Modx


```text
fontawesome-6/Brands/Modx
```

```text
include('fontawesome-6/Brands/Modx')
```



| Illustration | Modx |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Modx.png) | ![illustration for Modx](../../fontawesome-6/Brands/Modx.Local.png) |




## Modx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Modx
include('fontawesome-6/Brands/Modx')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Modx
include('fontawesome-6/Brands/Modx')

' renders the element
Modx('Modx', 'Modx', 'an optional tech label')
@enduml
```

