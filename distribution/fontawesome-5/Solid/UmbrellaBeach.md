# UmbrellaBeach


```text
fontawesome-5/Solid/UmbrellaBeach
```

```text
include('fontawesome-5/Solid/UmbrellaBeach')
```



| Illustration | UmbrellaBeach |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/UmbrellaBeach.png) | ![illustration for UmbrellaBeach](../../fontawesome-5/Solid/UmbrellaBeach.Local.png) |




## UmbrellaBeach

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element UmbrellaBeach
include('fontawesome-5/Solid/UmbrellaBeach')

' renders the element
UmbrellaBeach('UmbrellaBeach', 'Umbrella Beach', 'an optional tech label')
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

' loads the Item which embeds the element UmbrellaBeach
include('fontawesome-5/Solid/UmbrellaBeach')

' renders the element
UmbrellaBeach('UmbrellaBeach', 'Umbrella Beach', 'an optional tech label')
@enduml
```

