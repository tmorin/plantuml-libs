# Surveymonkey


```text
simpleicons/S/Surveymonkey
```

```text
include('simpleicons/S/Surveymonkey')
```



| Illustration | Surveymonkey |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Surveymonkey.png) | ![illustration for Surveymonkey](../../simpleicons/S/Surveymonkey.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SurveymonkeyXs>`
- `<$SurveymonkeySm>`
- `<$SurveymonkeyMd>`
- `<$SurveymonkeyLg>`





## Surveymonkey

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Surveymonkey
include('simpleicons/S/Surveymonkey')

' renders the element
Surveymonkey('Surveymonkey', 'Surveymonkey', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Surveymonkey
include('simpleicons/S/Surveymonkey')

' renders the element
Surveymonkey('Surveymonkey', 'Surveymonkey', 'an optional tech label', 'an optional description')
@enduml
```

