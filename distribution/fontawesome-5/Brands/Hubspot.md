# Hubspot


```text
fontawesome-5/Brands/Hubspot
```

```text
include('fontawesome-5/Brands/Hubspot')
```



| Illustration | Hubspot |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Hubspot.png) | ![illustration for Hubspot](../../fontawesome-5/Brands/Hubspot.Local.png) |




## Hubspot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Hubspot
include('fontawesome-5/Brands/Hubspot')

' renders the element
Hubspot('Hubspot', 'Hubspot', 'an optional tech label')
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

' loads the Item which embeds the element Hubspot
include('fontawesome-5/Brands/Hubspot')

' renders the element
Hubspot('Hubspot', 'Hubspot', 'an optional tech label')
@enduml
```

