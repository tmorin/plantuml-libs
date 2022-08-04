# Resolving


```text
fontawesome-6/Brands/Resolving
```

```text
include('fontawesome-6/Brands/Resolving')
```



| Illustration | Resolving |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Resolving.png) | ![illustration for Resolving](../../fontawesome-6/Brands/Resolving.Local.png) |




## Resolving

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Resolving
include('fontawesome-6/Brands/Resolving')

' renders the element
Resolving('Resolving', 'Resolving', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Resolving
include('fontawesome-6/Brands/Resolving')

' renders the element
Resolving('Resolving', 'Resolving', 'an optional tech label', 'an optional description')
@enduml
```

