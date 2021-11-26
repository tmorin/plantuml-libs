# Fedex


```text
fontawesome-5/Brands/Fedex
```

```text
include('fontawesome-5/Brands/Fedex')
```



| Illustration | Fedex |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Fedex.png) | ![illustration for Fedex](../../fontawesome-5/Brands/Fedex.Local.png) |




## Fedex

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Fedex
include('fontawesome-5/Brands/Fedex')

' renders the element
Fedex('Fedex', 'Fedex', 'an optional tech label')
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

' loads the Item which embeds the element Fedex
include('fontawesome-5/Brands/Fedex')

' renders the element
Fedex('Fedex', 'Fedex', 'an optional tech label')
@enduml
```

