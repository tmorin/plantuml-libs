# Briefcase


```text
fontawesome/Solid/Briefcase
```

```text
include('fontawesome/Solid/Briefcase')
```



| Illustration | Briefcase |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Briefcase.png) | ![illustration for Briefcase](../../fontawesome/Solid/Briefcase.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BriefcaseXs>`
- `<$BriefcaseSm>`
- `<$BriefcaseMd>`
- `<$BriefcaseLg>`





## Briefcase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Briefcase
include('fontawesome/Solid/Briefcase')

' renders the element
Briefcase('Briefcase', 'Briefcase', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Briefcase
include('fontawesome/Solid/Briefcase')

' renders the element
Briefcase('Briefcase', 'Briefcase', 'an optional tech label', 'an optional description')
@enduml
```

