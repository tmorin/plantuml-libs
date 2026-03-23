# ToiletPaperAlt


```text
fontawesome/Solid/ToiletPaperAlt
```

```text
include('fontawesome/Solid/ToiletPaperAlt')
```



| Illustration | ToiletPaperAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ToiletPaperAlt.png) | ![illustration for ToiletPaperAlt](../../fontawesome/Solid/ToiletPaperAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ToiletPaperAltXs>`
- `<$ToiletPaperAltSm>`
- `<$ToiletPaperAltMd>`
- `<$ToiletPaperAltLg>`





## ToiletPaperAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ToiletPaperAlt
include('fontawesome/Solid/ToiletPaperAlt')

' renders the element
ToiletPaperAlt('ToiletPaperAlt', 'Toilet Paper Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ToiletPaperAlt
include('fontawesome/Solid/ToiletPaperAlt')

' renders the element
ToiletPaperAlt('ToiletPaperAlt', 'Toilet Paper Alt', 'an optional tech label', 'an optional description')
@enduml
```

