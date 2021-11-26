# Surveymonkey


```text
simpleicons-5/S/Surveymonkey
```

```text
include('simpleicons-5/S/Surveymonkey')
```



| Illustration | Surveymonkey |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Surveymonkey.png) | ![illustration for Surveymonkey](../../simpleicons-5/S/Surveymonkey.Local.png) |




## Surveymonkey

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Surveymonkey
include('simpleicons-5/S/Surveymonkey')

' renders the element
Surveymonkey('Surveymonkey', 'Surveymonkey', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Surveymonkey
include('simpleicons-5/S/Surveymonkey')

' renders the element
Surveymonkey('Surveymonkey', 'Surveymonkey', 'an optional tech label')
@enduml
```

