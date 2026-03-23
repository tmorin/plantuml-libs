# Institution


```text
fontawesome/Solid/Institution
```

```text
include('fontawesome/Solid/Institution')
```



| Illustration | Institution |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Institution.png) | ![illustration for Institution](../../fontawesome/Solid/Institution.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InstitutionXs>`
- `<$InstitutionSm>`
- `<$InstitutionMd>`
- `<$InstitutionLg>`





## Institution

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Institution
include('fontawesome/Solid/Institution')

' renders the element
Institution('Institution', 'Institution', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Institution
include('fontawesome/Solid/Institution')

' renders the element
Institution('Institution', 'Institution', 'an optional tech label', 'an optional description')
@enduml
```

