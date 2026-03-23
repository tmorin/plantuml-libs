# ToiletPaperBlank


```text
fontawesome/Solid/ToiletPaperBlank
```

```text
include('fontawesome/Solid/ToiletPaperBlank')
```



| Illustration | ToiletPaperBlank |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ToiletPaperBlank.png) | ![illustration for ToiletPaperBlank](../../fontawesome/Solid/ToiletPaperBlank.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ToiletPaperBlankXs>`
- `<$ToiletPaperBlankSm>`
- `<$ToiletPaperBlankMd>`
- `<$ToiletPaperBlankLg>`





## ToiletPaperBlank

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ToiletPaperBlank
include('fontawesome/Solid/ToiletPaperBlank')

' renders the element
ToiletPaperBlank('ToiletPaperBlank', 'Toilet Paper Blank', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ToiletPaperBlank
include('fontawesome/Solid/ToiletPaperBlank')

' renders the element
ToiletPaperBlank('ToiletPaperBlank', 'Toilet Paper Blank', 'an optional tech label', 'an optional description')
@enduml
```

