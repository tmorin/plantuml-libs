# PlaceOfWorship


```text
fontawesome-5/Solid/PlaceOfWorship
```

```text
include('fontawesome-5/Solid/PlaceOfWorship')
```



| Illustration | PlaceOfWorship |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/PlaceOfWorship.png) | ![illustration for PlaceOfWorship](../../fontawesome-5/Solid/PlaceOfWorship.Local.png) |




## PlaceOfWorship

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PlaceOfWorship
include('fontawesome-5/Solid/PlaceOfWorship')

' renders the element
PlaceOfWorship('PlaceOfWorship', 'Place Of Worship', 'an optional tech label')
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

' loads the Item which embeds the element PlaceOfWorship
include('fontawesome-5/Solid/PlaceOfWorship')

' renders the element
PlaceOfWorship('PlaceOfWorship', 'Place Of Worship', 'an optional tech label')
@enduml
```

