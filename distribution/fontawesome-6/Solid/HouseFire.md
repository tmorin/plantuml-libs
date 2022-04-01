# HouseFire


```text
fontawesome-6/Solid/HouseFire
```

```text
include('fontawesome-6/Solid/HouseFire')
```



| Illustration | HouseFire |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HouseFire.png) | ![illustration for HouseFire](../../fontawesome-6/Solid/HouseFire.Local.png) |




## HouseFire

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HouseFire
include('fontawesome-6/Solid/HouseFire')

' renders the element
HouseFire('HouseFire', 'House Fire', 'an optional tech label')
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

' loads the Item which embeds the element HouseFire
include('fontawesome-6/Solid/HouseFire')

' renders the element
HouseFire('HouseFire', 'House Fire', 'an optional tech label')
@enduml
```

