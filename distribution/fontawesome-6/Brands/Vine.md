# Vine


```text
fontawesome-6/Brands/Vine
```

```text
include('fontawesome-6/Brands/Vine')
```



| Illustration | Vine |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Vine.png) | ![illustration for Vine](../../fontawesome-6/Brands/Vine.Local.png) |




## Vine

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Vine
include('fontawesome-6/Brands/Vine')

' renders the element
Vine('Vine', 'Vine', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vine
include('fontawesome-6/Brands/Vine')

' renders the element
Vine('Vine', 'Vine', 'an optional tech label', 'an optional description')
@enduml
```

