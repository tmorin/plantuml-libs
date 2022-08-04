# PlaceOfWorship


```text
fontawesome-6/Solid/PlaceOfWorship
```

```text
include('fontawesome-6/Solid/PlaceOfWorship')
```



| Illustration | PlaceOfWorship |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PlaceOfWorship.png) | ![illustration for PlaceOfWorship](../../fontawesome-6/Solid/PlaceOfWorship.Local.png) |




## PlaceOfWorship

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PlaceOfWorship
include('fontawesome-6/Solid/PlaceOfWorship')

' renders the element
PlaceOfWorship('PlaceOfWorship', 'Place Of Worship', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PlaceOfWorship
include('fontawesome-6/Solid/PlaceOfWorship')

' renders the element
PlaceOfWorship('PlaceOfWorship', 'Place Of Worship', 'an optional tech label', 'an optional description')
@enduml
```

