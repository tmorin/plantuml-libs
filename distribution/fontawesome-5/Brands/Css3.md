# Css3


```text
fontawesome-5/Brands/Css3
```

```text
include('fontawesome-5/Brands/Css3')
```



| Illustration | Css3 |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Css3.png) | ![illustration for Css3](../../fontawesome-5/Brands/Css3.Local.png) |




## Css3

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Css3
include('fontawesome-5/Brands/Css3')

' renders the element
Css3('Css3', 'Css3', 'an optional tech label')
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

' loads the Item which embeds the element Css3
include('fontawesome-5/Brands/Css3')

' renders the element
Css3('Css3', 'Css3', 'an optional tech label')
@enduml
```

