# Section


```text
fontawesome/Solid/Section
```

```text
include('fontawesome/Solid/Section')
```



| Illustration | Section |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Section.png) | ![illustration for Section](../../fontawesome/Solid/Section.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SectionXs>`
- `<$SectionSm>`
- `<$SectionMd>`
- `<$SectionLg>`





## Section

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Section
include('fontawesome/Solid/Section')

' renders the element
Section('Section', 'Section', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Section
include('fontawesome/Solid/Section')

' renders the element
Section('Section', 'Section', 'an optional tech label', 'an optional description')
@enduml
```

