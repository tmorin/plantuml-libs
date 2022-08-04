# Affiliatetheme


```text
fontawesome-6/Brands/Affiliatetheme
```

```text
include('fontawesome-6/Brands/Affiliatetheme')
```



| Illustration | Affiliatetheme |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Affiliatetheme.png) | ![illustration for Affiliatetheme](../../fontawesome-6/Brands/Affiliatetheme.Local.png) |




## Affiliatetheme

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Affiliatetheme
include('fontawesome-6/Brands/Affiliatetheme')

' renders the element
Affiliatetheme('Affiliatetheme', 'Affiliatetheme', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Affiliatetheme
include('fontawesome-6/Brands/Affiliatetheme')

' renders the element
Affiliatetheme('Affiliatetheme', 'Affiliatetheme', 'an optional tech label', 'an optional description')
@enduml
```

