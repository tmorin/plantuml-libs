# Bible


```text
fontawesome/Solid/Bible
```

```text
include('fontawesome/Solid/Bible')
```



| Illustration | Bible |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Bible.png) | ![illustration for Bible](../../fontawesome/Solid/Bible.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BibleXs>`
- `<$BibleSm>`
- `<$BibleMd>`
- `<$BibleLg>`





## Bible

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Bible
include('fontawesome/Solid/Bible')

' renders the element
Bible('Bible', 'Bible', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bible
include('fontawesome/Solid/Bible')

' renders the element
Bible('Bible', 'Bible', 'an optional tech label', 'an optional description')
@enduml
```

