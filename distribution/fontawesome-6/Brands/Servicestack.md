# Servicestack


```text
fontawesome-6/Brands/Servicestack
```

```text
include('fontawesome-6/Brands/Servicestack')
```



| Illustration | Servicestack |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Servicestack.png) | ![illustration for Servicestack](../../fontawesome-6/Brands/Servicestack.Local.png) |




## Servicestack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Servicestack
include('fontawesome-6/Brands/Servicestack')

' renders the element
Servicestack('Servicestack', 'Servicestack', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Servicestack
include('fontawesome-6/Brands/Servicestack')

' renders the element
Servicestack('Servicestack', 'Servicestack', 'an optional tech label', 'an optional description')
@enduml
```

