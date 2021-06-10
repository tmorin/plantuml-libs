# Umbraco


```text
fontawesome-5/Brands/Umbraco
```

```text
include('fontawesome-5/Brands/Umbraco')
```



| Illustration | Umbraco |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Umbraco.png) | ![illustration for Umbraco](../../fontawesome-5/Brands/Umbraco.Local.png) |




## Umbraco

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Umbraco
include('fontawesome-5/Brands/Umbraco')

' renders the element
Umbraco('Umbraco', 'Umbraco', 'an optional tech label')
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

' loads the Item which embeds the element Umbraco
include('fontawesome-5/Brands/Umbraco')

' renders the element
Umbraco('Umbraco', 'Umbraco', 'an optional tech label')
@enduml
```

