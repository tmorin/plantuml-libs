# Centercode


```text
fontawesome-6/Brands/Centercode
```

```text
include('fontawesome-6/Brands/Centercode')
```



| Illustration | Centercode |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Centercode.png) | ![illustration for Centercode](../../fontawesome-6/Brands/Centercode.Local.png) |




## Centercode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Centercode
include('fontawesome-6/Brands/Centercode')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Centercode
include('fontawesome-6/Brands/Centercode')

' renders the element
Centercode('Centercode', 'Centercode', 'an optional tech label')
@enduml
```

