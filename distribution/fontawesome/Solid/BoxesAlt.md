# BoxesAlt


```text
fontawesome/Solid/BoxesAlt
```

```text
include('fontawesome/Solid/BoxesAlt')
```



| Illustration | BoxesAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BoxesAlt.png) | ![illustration for BoxesAlt](../../fontawesome/Solid/BoxesAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BoxesAltXs>`
- `<$BoxesAltSm>`
- `<$BoxesAltMd>`
- `<$BoxesAltLg>`





## BoxesAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BoxesAlt
include('fontawesome/Solid/BoxesAlt')

' renders the element
BoxesAlt('BoxesAlt', 'Boxes Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BoxesAlt
include('fontawesome/Solid/BoxesAlt')

' renders the element
BoxesAlt('BoxesAlt', 'Boxes Alt', 'an optional tech label', 'an optional description')
@enduml
```

