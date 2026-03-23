# MehBlank


```text
fontawesome/Solid/MehBlank
```

```text
include('fontawesome/Solid/MehBlank')
```



| Illustration | MehBlank |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MehBlank.png) | ![illustration for MehBlank](../../fontawesome/Solid/MehBlank.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MehBlankXs>`
- `<$MehBlankSm>`
- `<$MehBlankMd>`
- `<$MehBlankLg>`





## MehBlank

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MehBlank
include('fontawesome/Solid/MehBlank')

' renders the element
MehBlank('MehBlank', 'Meh Blank', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MehBlank
include('fontawesome/Solid/MehBlank')

' renders the element
MehBlank('MehBlank', 'Meh Blank', 'an optional tech label', 'an optional description')
@enduml
```

