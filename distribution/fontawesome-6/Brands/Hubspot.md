# Hubspot


```text
fontawesome-6/Brands/Hubspot
```

```text
include('fontawesome-6/Brands/Hubspot')
```



| Illustration | Hubspot |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Hubspot.png) | ![illustration for Hubspot](../../fontawesome-6/Brands/Hubspot.Local.png) |




## Hubspot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Hubspot
include('fontawesome-6/Brands/Hubspot')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Hubspot
include('fontawesome-6/Brands/Hubspot')

' renders the element
Hubspot('Hubspot', 'Hubspot', 'an optional tech label')
@enduml
```

