# WheatAlt


```text
fontawesome/Solid/WheatAlt
```

```text
include('fontawesome/Solid/WheatAlt')
```



| Illustration | WheatAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/WheatAlt.png) | ![illustration for WheatAlt](../../fontawesome/Solid/WheatAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WheatAltXs>`
- `<$WheatAltSm>`
- `<$WheatAltMd>`
- `<$WheatAltLg>`





## WheatAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element WheatAlt
include('fontawesome/Solid/WheatAlt')

' renders the element
WheatAlt('WheatAlt', 'Wheat Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WheatAlt
include('fontawesome/Solid/WheatAlt')

' renders the element
WheatAlt('WheatAlt', 'Wheat Alt', 'an optional tech label', 'an optional description')
@enduml
```

