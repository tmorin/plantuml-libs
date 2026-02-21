# ToiletPaper


```text
fontawesome/Solid/ToiletPaper
```

```text
include('fontawesome/Solid/ToiletPaper')
```



| Illustration | ToiletPaper |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ToiletPaper.png) | ![illustration for ToiletPaper](../../fontawesome/Solid/ToiletPaper.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ToiletPaperXs>`
- `<$ToiletPaperSm>`
- `<$ToiletPaperMd>`
- `<$ToiletPaperLg>`





## ToiletPaper

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ToiletPaper
include('fontawesome/Solid/ToiletPaper')

' renders the element
ToiletPaper('ToiletPaper', 'Toilet Paper', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element ToiletPaper
include('fontawesome/Solid/ToiletPaper')

' renders the element
ToiletPaper('ToiletPaper', 'Toilet Paper', 'an optional tech label', 'an optional description')
@enduml
```

