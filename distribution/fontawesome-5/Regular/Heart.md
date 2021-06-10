# Heart


```text
fontawesome-5/Regular/Heart
```

```text
include('fontawesome-5/Regular/Heart')
```



| Illustration | Heart |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/Heart.png) | ![illustration for Heart](../../fontawesome-5/Regular/Heart.Local.png) |




## Heart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Heart
include('fontawesome-5/Regular/Heart')

' renders the element
Heart('Heart', 'Heart', 'an optional tech label')
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

' loads the Item which embeds the element Heart
include('fontawesome-5/Regular/Heart')

' renders the element
Heart('Heart', 'Heart', 'an optional tech label')
@enduml
```

