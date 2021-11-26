# Odnoklassniki


```text
fontawesome-5/Brands/Odnoklassniki
```

```text
include('fontawesome-5/Brands/Odnoklassniki')
```



| Illustration | Odnoklassniki |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Odnoklassniki.png) | ![illustration for Odnoklassniki](../../fontawesome-5/Brands/Odnoklassniki.Local.png) |




## Odnoklassniki

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Odnoklassniki
include('fontawesome-5/Brands/Odnoklassniki')

' renders the element
Odnoklassniki('Odnoklassniki', 'Odnoklassniki', 'an optional tech label')
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

' loads the Item which embeds the element Odnoklassniki
include('fontawesome-5/Brands/Odnoklassniki')

' renders the element
Odnoklassniki('Odnoklassniki', 'Odnoklassniki', 'an optional tech label')
@enduml
```

