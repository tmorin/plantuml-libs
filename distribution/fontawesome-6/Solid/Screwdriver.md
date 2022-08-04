# Screwdriver


```text
fontawesome-6/Solid/Screwdriver
```

```text
include('fontawesome-6/Solid/Screwdriver')
```



| Illustration | Screwdriver |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Screwdriver.png) | ![illustration for Screwdriver](../../fontawesome-6/Solid/Screwdriver.Local.png) |




## Screwdriver

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Screwdriver
include('fontawesome-6/Solid/Screwdriver')

' renders the element
Screwdriver('Screwdriver', 'Screwdriver', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Screwdriver
include('fontawesome-6/Solid/Screwdriver')

' renders the element
Screwdriver('Screwdriver', 'Screwdriver', 'an optional tech label', 'an optional description')
@enduml
```

