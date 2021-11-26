# Wpressr


```text
fontawesome-5/Brands/Wpressr
```

```text
include('fontawesome-5/Brands/Wpressr')
```



| Illustration | Wpressr |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Wpressr.png) | ![illustration for Wpressr](../../fontawesome-5/Brands/Wpressr.Local.png) |




## Wpressr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Wpressr
include('fontawesome-5/Brands/Wpressr')

' renders the element
Wpressr('Wpressr', 'Wpressr', 'an optional tech label')
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

' loads the Item which embeds the element Wpressr
include('fontawesome-5/Brands/Wpressr')

' renders the element
Wpressr('Wpressr', 'Wpressr', 'an optional tech label')
@enduml
```

