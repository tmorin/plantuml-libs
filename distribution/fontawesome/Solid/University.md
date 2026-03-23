# University


```text
fontawesome/Solid/University
```

```text
include('fontawesome/Solid/University')
```



| Illustration | University |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/University.png) | ![illustration for University](../../fontawesome/Solid/University.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UniversityXs>`
- `<$UniversitySm>`
- `<$UniversityMd>`
- `<$UniversityLg>`





## University

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element University
include('fontawesome/Solid/University')

' renders the element
University('University', 'University', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element University
include('fontawesome/Solid/University')

' renders the element
University('University', 'University', 'an optional tech label', 'an optional description')
@enduml
```

