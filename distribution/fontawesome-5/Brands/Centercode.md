# Centercode


```text
fontawesome-5/Brands/Centercode
```

```text
include('fontawesome-5/Brands/Centercode')
```



| Illustration | Centercode |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Centercode.png) | ![illustration for Centercode](../../fontawesome-5/Brands/Centercode.Local.png) |




## Centercode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Centercode
include('fontawesome-5/Brands/Centercode')

' renders the element
Centercode('Centercode', 'Centercode', 'an optional tech label')
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

' loads the Item which embeds the element Centercode
include('fontawesome-5/Brands/Centercode')

' renders the element
Centercode('Centercode', 'Centercode', 'an optional tech label')
@enduml
```

