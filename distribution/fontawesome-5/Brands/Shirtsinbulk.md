# Shirtsinbulk


```text
fontawesome-5/Brands/Shirtsinbulk
```

```text
include('fontawesome-5/Brands/Shirtsinbulk')
```



| Illustration | Shirtsinbulk |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Shirtsinbulk.png) | ![illustration for Shirtsinbulk](../../fontawesome-5/Brands/Shirtsinbulk.Local.png) |




## Shirtsinbulk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Shirtsinbulk
include('fontawesome-5/Brands/Shirtsinbulk')

' renders the element
Shirtsinbulk('Shirtsinbulk', 'Shirtsinbulk', 'an optional tech label')
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

' loads the Item which embeds the element Shirtsinbulk
include('fontawesome-5/Brands/Shirtsinbulk')

' renders the element
Shirtsinbulk('Shirtsinbulk', 'Shirtsinbulk', 'an optional tech label')
@enduml
```

