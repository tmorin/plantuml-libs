# Wind


```text
fontawesome-5/Solid/Wind
```

```text
include('fontawesome-5/Solid/Wind')
```



| Illustration | Wind |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Wind.png) | ![illustration for Wind](../../fontawesome-5/Solid/Wind.Local.png) |




## Wind

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Wind
include('fontawesome-5/Solid/Wind')

' renders the element
Wind('Wind', 'Wind', 'an optional tech label')
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

' loads the Item which embeds the element Wind
include('fontawesome-5/Solid/Wind')

' renders the element
Wind('Wind', 'Wind', 'an optional tech label')
@enduml
```

