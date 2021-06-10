# Viadeo


```text
fontawesome-5/Brands/Viadeo
```

```text
include('fontawesome-5/Brands/Viadeo')
```



| Illustration | Viadeo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Viadeo.png) | ![illustration for Viadeo](../../fontawesome-5/Brands/Viadeo.Local.png) |




## Viadeo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Viadeo
include('fontawesome-5/Brands/Viadeo')

' renders the element
Viadeo('Viadeo', 'Viadeo', 'an optional tech label')
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

' loads the Item which embeds the element Viadeo
include('fontawesome-5/Brands/Viadeo')

' renders the element
Viadeo('Viadeo', 'Viadeo', 'an optional tech label')
@enduml
```

