# Uber


```text
fontawesome-5/Brands/Uber
```

```text
include('fontawesome-5/Brands/Uber')
```



| Illustration | Uber |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Uber.png) | ![illustration for Uber](../../fontawesome-5/Brands/Uber.Local.png) |




## Uber

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Uber
include('fontawesome-5/Brands/Uber')

' renders the element
Uber('Uber', 'Uber', 'an optional tech label')
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

' loads the Item which embeds the element Uber
include('fontawesome-5/Brands/Uber')

' renders the element
Uber('Uber', 'Uber', 'an optional tech label')
@enduml
```

