# Apper


```text
fontawesome-5/Brands/Apper
```

```text
include('fontawesome-5/Brands/Apper')
```



| Illustration | Apper |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Apper.png) | ![illustration for Apper](../../fontawesome-5/Brands/Apper.Local.png) |




## Apper

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Apper
include('fontawesome-5/Brands/Apper')

' renders the element
Apper('Apper', 'Apper', 'an optional tech label')
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

' loads the Item which embeds the element Apper
include('fontawesome-5/Brands/Apper')

' renders the element
Apper('Apper', 'Apper', 'an optional tech label')
@enduml
```

