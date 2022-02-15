# Connectdevelop


```text
fontawesome-6/Brands/Connectdevelop
```

```text
include('fontawesome-6/Brands/Connectdevelop')
```



| Illustration | Connectdevelop |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Connectdevelop.png) | ![illustration for Connectdevelop](../../fontawesome-6/Brands/Connectdevelop.Local.png) |




## Connectdevelop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Connectdevelop
include('fontawesome-6/Brands/Connectdevelop')

' renders the element
Connectdevelop('Connectdevelop', 'Connectdevelop', 'an optional tech label')
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

' loads the Item which embeds the element Connectdevelop
include('fontawesome-6/Brands/Connectdevelop')

' renders the element
Connectdevelop('Connectdevelop', 'Connectdevelop', 'an optional tech label')
@enduml
```

