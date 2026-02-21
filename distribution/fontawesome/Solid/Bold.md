# Bold


```text
fontawesome/Solid/Bold
```

```text
include('fontawesome/Solid/Bold')
```



| Illustration | Bold |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Bold.png) | ![illustration for Bold](../../fontawesome/Solid/Bold.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BoldXs>`
- `<$BoldSm>`
- `<$BoldMd>`
- `<$BoldLg>`





## Bold

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Bold
include('fontawesome/Solid/Bold')

' renders the element
Bold('Bold', 'Bold', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bold
include('fontawesome/Solid/Bold')

' renders the element
Bold('Bold', 'Bold', 'an optional tech label', 'an optional description')
@enduml
```

