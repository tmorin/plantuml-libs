# Bimobject


```text
fontawesome-5/Brands/Bimobject
```

```text
include('fontawesome-5/Brands/Bimobject')
```



| Illustration | Bimobject |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Bimobject.png) | ![illustration for Bimobject](../../fontawesome-5/Brands/Bimobject.Local.png) |




## Bimobject

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Bimobject
include('fontawesome-5/Brands/Bimobject')

' renders the element
Bimobject('Bimobject', 'Bimobject', 'an optional tech label')
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

' loads the Item which embeds the element Bimobject
include('fontawesome-5/Brands/Bimobject')

' renders the element
Bimobject('Bimobject', 'Bimobject', 'an optional tech label')
@enduml
```

