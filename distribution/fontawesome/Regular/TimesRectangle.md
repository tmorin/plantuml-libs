# TimesRectangle


```text
fontawesome/Regular/TimesRectangle
```

```text
include('fontawesome/Regular/TimesRectangle')
```



| Illustration | TimesRectangle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/TimesRectangle.png) | ![illustration for TimesRectangle](../../fontawesome/Regular/TimesRectangle.Local.png) |



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
include('fontawesome/Regular/TimesRectangle')

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
include('fontawesome/Regular/TimesRectangle')

' renders the element
TimesRectangle('TimesRectangle', 'Times Rectangle', 'an optional tech label', 'an optional description')
@enduml
```

