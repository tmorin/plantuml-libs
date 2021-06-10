# Css3Alt


```text
fontawesome-5/Brands/Css3Alt
```

```text
include('fontawesome-5/Brands/Css3Alt')
```



| Illustration | Css3Alt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Css3Alt.png) | ![illustration for Css3Alt](../../fontawesome-5/Brands/Css3Alt.Local.png) |




## Css3Alt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Css3Alt
include('fontawesome-5/Brands/Css3Alt')

' renders the element
Css3Alt('Css3Alt', 'Css3 Alt', 'an optional tech label')
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

' loads the Item which embeds the element Css3Alt
include('fontawesome-5/Brands/Css3Alt')

' renders the element
Css3Alt('Css3Alt', 'Css3 Alt', 'an optional tech label')
@enduml
```

