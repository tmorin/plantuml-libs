# Bimobject


```text
fontawesome-6/Brands/Bimobject
```

```text
include('fontawesome-6/Brands/Bimobject')
```



| Illustration | Bimobject |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Bimobject.png) | ![illustration for Bimobject](../../fontawesome-6/Brands/Bimobject.Local.png) |




## Bimobject

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Bimobject
include('fontawesome-6/Brands/Bimobject')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Bimobject
include('fontawesome-6/Brands/Bimobject')

' renders the element
Bimobject('Bimobject', 'Bimobject', 'an optional tech label')
@enduml
```

