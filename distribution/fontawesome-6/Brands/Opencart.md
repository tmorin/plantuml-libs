# Opencart


```text
fontawesome-6/Brands/Opencart
```

```text
include('fontawesome-6/Brands/Opencart')
```



| Illustration | Opencart |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Opencart.png) | ![illustration for Opencart](../../fontawesome-6/Brands/Opencart.Local.png) |




## Opencart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Opencart
include('fontawesome-6/Brands/Opencart')

' renders the element
Opencart('Opencart', 'Opencart', 'an optional tech label')
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

' loads the Item which embeds the element Opencart
include('fontawesome-6/Brands/Opencart')

' renders the element
Opencart('Opencart', 'Opencart', 'an optional tech label')
@enduml
```

