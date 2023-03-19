# PeopleGroup


```text
fontawesome-6/Solid/PeopleGroup
```

```text
include('fontawesome-6/Solid/PeopleGroup')
```



| Illustration | PeopleGroup |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PeopleGroup.png) | ![illustration for PeopleGroup](../../fontawesome-6/Solid/PeopleGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PeopleGroupXs>`
- `<$PeopleGroupSm>`
- `<$PeopleGroupMd>`
- `<$PeopleGroupLg>`





## PeopleGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PeopleGroup
include('fontawesome-6/Solid/PeopleGroup')

' renders the element
PeopleGroup('PeopleGroup', 'People Group', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PeopleGroup
include('fontawesome-6/Solid/PeopleGroup')

' renders the element
PeopleGroup('PeopleGroup', 'People Group', 'an optional tech label', 'an optional description')
@enduml
```

