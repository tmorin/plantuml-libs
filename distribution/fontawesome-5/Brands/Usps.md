# Usps


```text
fontawesome-5/Brands/Usps
```

```text
include('fontawesome-5/Brands/Usps')
```



| Illustration | Usps |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Usps.png) | ![illustration for Usps](../../fontawesome-5/Brands/Usps.Local.png) |




## Usps

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Usps
include('fontawesome-5/Brands/Usps')

' renders the element
Usps('Usps', 'Usps', 'an optional tech label')
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

' loads the Item which embeds the element Usps
include('fontawesome-5/Brands/Usps')

' renders the element
Usps('Usps', 'Usps', 'an optional tech label')
@enduml
```

