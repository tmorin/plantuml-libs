# Screenpal


```text
fontawesome-6/Brands/Screenpal
```

```text
include('fontawesome-6/Brands/Screenpal')
```



| Illustration | Screenpal |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Screenpal.png) | ![illustration for Screenpal](../../fontawesome-6/Brands/Screenpal.Local.png) |




## Screenpal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Screenpal
include('fontawesome-6/Brands/Screenpal')

' renders the element
Screenpal('Screenpal', 'Screenpal', 'an optional tech label')
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

' loads the Item which embeds the element Screenpal
include('fontawesome-6/Brands/Screenpal')

' renders the element
Screenpal('Screenpal', 'Screenpal', 'an optional tech label')
@enduml
```

