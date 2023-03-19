# Industry


```text
fontawesome-6/Solid/Industry
```

```text
include('fontawesome-6/Solid/Industry')
```



| Illustration | Industry |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Industry.png) | ![illustration for Industry](../../fontawesome-6/Solid/Industry.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IndustryXs>`
- `<$IndustrySm>`
- `<$IndustryMd>`
- `<$IndustryLg>`





## Industry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Industry
include('fontawesome-6/Solid/Industry')

' renders the element
Industry('Industry', 'Industry', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Industry
include('fontawesome-6/Solid/Industry')

' renders the element
Industry('Industry', 'Industry', 'an optional tech label', 'an optional description')
@enduml
```

