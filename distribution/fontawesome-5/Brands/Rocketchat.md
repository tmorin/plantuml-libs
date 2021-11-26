# Rocketchat


```text
fontawesome-5/Brands/Rocketchat
```

```text
include('fontawesome-5/Brands/Rocketchat')
```



| Illustration | Rocketchat |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Rocketchat.png) | ![illustration for Rocketchat](../../fontawesome-5/Brands/Rocketchat.Local.png) |




## Rocketchat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Rocketchat
include('fontawesome-5/Brands/Rocketchat')

' renders the element
Rocketchat('Rocketchat', 'Rocketchat', 'an optional tech label')
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

' loads the Item which embeds the element Rocketchat
include('fontawesome-5/Brands/Rocketchat')

' renders the element
Rocketchat('Rocketchat', 'Rocketchat', 'an optional tech label')
@enduml
```

