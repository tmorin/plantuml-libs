# Hryvnia


```text
fontawesome/Solid/Hryvnia
```

```text
include('fontawesome/Solid/Hryvnia')
```



| Illustration | Hryvnia |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Hryvnia.png) | ![illustration for Hryvnia](../../fontawesome/Solid/Hryvnia.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HryvniaXs>`
- `<$HryvniaSm>`
- `<$HryvniaMd>`
- `<$HryvniaLg>`





## Hryvnia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Hryvnia
include('fontawesome/Solid/Hryvnia')

' renders the element
Hryvnia('Hryvnia', 'Hryvnia', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hryvnia
include('fontawesome/Solid/Hryvnia')

' renders the element
Hryvnia('Hryvnia', 'Hryvnia', 'an optional tech label', 'an optional description')
@enduml
```

