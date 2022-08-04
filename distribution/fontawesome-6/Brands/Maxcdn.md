# Maxcdn


```text
fontawesome-6/Brands/Maxcdn
```

```text
include('fontawesome-6/Brands/Maxcdn')
```



| Illustration | Maxcdn |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Maxcdn.png) | ![illustration for Maxcdn](../../fontawesome-6/Brands/Maxcdn.Local.png) |




## Maxcdn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Maxcdn
include('fontawesome-6/Brands/Maxcdn')

' renders the element
Maxcdn('Maxcdn', 'Maxcdn', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Maxcdn
include('fontawesome-6/Brands/Maxcdn')

' renders the element
Maxcdn('Maxcdn', 'Maxcdn', 'an optional tech label', 'an optional description')
@enduml
```

