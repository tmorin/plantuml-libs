# Digg


```text
fontawesome-5/Brands/Digg
```

```text
include('fontawesome-5/Brands/Digg')
```



| Illustration | Digg |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Digg.png) | ![illustration for Digg](../../fontawesome-5/Brands/Digg.Local.png) |




## Digg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Digg
include('fontawesome-5/Brands/Digg')

' renders the element
Digg('Digg', 'Digg', 'an optional tech label')
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

' loads the Item which embeds the element Digg
include('fontawesome-5/Brands/Digg')

' renders the element
Digg('Digg', 'Digg', 'an optional tech label')
@enduml
```

