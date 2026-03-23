# IdCardAlt


```text
fontawesome/Solid/IdCardAlt
```

```text
include('fontawesome/Solid/IdCardAlt')
```



| Illustration | IdCardAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/IdCardAlt.png) | ![illustration for IdCardAlt](../../fontawesome/Solid/IdCardAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IdCardAltXs>`
- `<$IdCardAltSm>`
- `<$IdCardAltMd>`
- `<$IdCardAltLg>`





## IdCardAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element IdCardAlt
include('fontawesome/Solid/IdCardAlt')

' renders the element
IdCardAlt('IdCardAlt', 'Id Card Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element IdCardAlt
include('fontawesome/Solid/IdCardAlt')

' renders the element
IdCardAlt('IdCardAlt', 'Id Card Alt', 'an optional tech label', 'an optional description')
@enduml
```

