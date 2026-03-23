# TimesRectangle


```text
fontawesome/Solid/TimesRectangle
```

```text
include('fontawesome/Solid/TimesRectangle')
```



| Illustration | TimesRectangle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/TimesRectangle.png) | ![illustration for TimesRectangle](../../fontawesome/Solid/TimesRectangle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TimesRectangleXs>`
- `<$TimesRectangleSm>`
- `<$TimesRectangleMd>`
- `<$TimesRectangleLg>`





## TimesRectangle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TimesRectangle
include('fontawesome/Solid/TimesRectangle')

' renders the element
TimesRectangle('TimesRectangle', 'Times Rectangle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TimesRectangle
include('fontawesome/Solid/TimesRectangle')

' renders the element
TimesRectangle('TimesRectangle', 'Times Rectangle', 'an optional tech label', 'an optional description')
@enduml
```

