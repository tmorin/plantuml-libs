# Stumbleupon


```text
fontawesome-6/Brands/Stumbleupon
```

```text
include('fontawesome-6/Brands/Stumbleupon')
```



| Illustration | Stumbleupon |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Stumbleupon.png) | ![illustration for Stumbleupon](../../fontawesome-6/Brands/Stumbleupon.Local.png) |




## Stumbleupon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Stumbleupon
include('fontawesome-6/Brands/Stumbleupon')

' renders the element
Stumbleupon('Stumbleupon', 'Stumbleupon', 'an optional tech label')
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

' loads the Item which embeds the element Stumbleupon
include('fontawesome-6/Brands/Stumbleupon')

' renders the element
Stumbleupon('Stumbleupon', 'Stumbleupon', 'an optional tech label')
@enduml
```

