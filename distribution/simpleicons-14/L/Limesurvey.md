# Limesurvey


```text
simpleicons-14/L/Limesurvey
```

```text
include('simpleicons-14/L/Limesurvey')
```



| Illustration | Limesurvey |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Limesurvey.png) | ![illustration for Limesurvey](../../simpleicons-14/L/Limesurvey.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LimesurveyXs>`
- `<$LimesurveySm>`
- `<$LimesurveyMd>`
- `<$LimesurveyLg>`





## Limesurvey

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Limesurvey
include('simpleicons-14/L/Limesurvey')

' renders the element
Limesurvey('Limesurvey', 'Limesurvey', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Limesurvey
include('simpleicons-14/L/Limesurvey')

' renders the element
Limesurvey('Limesurvey', 'Limesurvey', 'an optional tech label', 'an optional description')
@enduml
```

