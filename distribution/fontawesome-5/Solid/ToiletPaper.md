# ToiletPaper


```text
fontawesome-5/Solid/ToiletPaper
```

```text
include('fontawesome-5/Solid/ToiletPaper')
```



| Illustration | ToiletPaper |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ToiletPaper.png) | ![illustration for ToiletPaper](../../fontawesome-5/Solid/ToiletPaper.Local.png) |




## ToiletPaper

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ToiletPaper
include('fontawesome-5/Solid/ToiletPaper')

' renders the element
ToiletPaper('ToiletPaper', 'Toilet Paper', 'an optional tech label')
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

' loads the Item which embeds the element ToiletPaper
include('fontawesome-5/Solid/ToiletPaper')

' renders the element
ToiletPaper('ToiletPaper', 'Toilet Paper', 'an optional tech label')
@enduml
```

