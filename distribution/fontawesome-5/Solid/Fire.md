# Fire


```text
fontawesome-5/Solid/Fire
```

```text
include('fontawesome-5/Solid/Fire')
```



| Illustration | Fire |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Fire.png) | ![illustration for Fire](../../fontawesome-5/Solid/Fire.Local.png) |




## Fire

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Fire
include('fontawesome-5/Solid/Fire')

' renders the element
Fire('Fire', 'Fire', 'an optional tech label')
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

' loads the Item which embeds the element Fire
include('fontawesome-5/Solid/Fire')

' renders the element
Fire('Fire', 'Fire', 'an optional tech label')
@enduml
```

