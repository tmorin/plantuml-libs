# Screwdriver


```text
fontawesome-5/Solid/Screwdriver
```

```text
include('fontawesome-5/Solid/Screwdriver')
```



| Illustration | Screwdriver |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Screwdriver.png) | ![illustration for Screwdriver](../../fontawesome-5/Solid/Screwdriver.Local.png) |




## Screwdriver

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Screwdriver
include('fontawesome-5/Solid/Screwdriver')

' renders the element
Screwdriver('Screwdriver', 'Screwdriver', 'an optional tech label')
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

' loads the Item which embeds the element Screwdriver
include('fontawesome-5/Solid/Screwdriver')

' renders the element
Screwdriver('Screwdriver', 'Screwdriver', 'an optional tech label')
@enduml
```

