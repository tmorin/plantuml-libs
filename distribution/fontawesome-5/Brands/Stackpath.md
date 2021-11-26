# Stackpath


```text
fontawesome-5/Brands/Stackpath
```

```text
include('fontawesome-5/Brands/Stackpath')
```



| Illustration | Stackpath |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Stackpath.png) | ![illustration for Stackpath](../../fontawesome-5/Brands/Stackpath.Local.png) |




## Stackpath

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Stackpath
include('fontawesome-5/Brands/Stackpath')

' renders the element
Stackpath('Stackpath', 'Stackpath', 'an optional tech label')
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

' loads the Item which embeds the element Stackpath
include('fontawesome-5/Brands/Stackpath')

' renders the element
Stackpath('Stackpath', 'Stackpath', 'an optional tech label')
@enduml
```

