# ExpandAlt


```text
fontawesome/Solid/ExpandAlt
```

```text
include('fontawesome/Solid/ExpandAlt')
```



| Illustration | ExpandAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ExpandAlt.png) | ![illustration for ExpandAlt](../../fontawesome/Solid/ExpandAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ExpandAltXs>`
- `<$ExpandAltSm>`
- `<$ExpandAltMd>`
- `<$ExpandAltLg>`





## ExpandAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ExpandAlt
include('fontawesome/Solid/ExpandAlt')

' renders the element
ExpandAlt('ExpandAlt', 'Expand Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ExpandAlt
include('fontawesome/Solid/ExpandAlt')

' renders the element
ExpandAlt('ExpandAlt', 'Expand Alt', 'an optional tech label', 'an optional description')
@enduml
```

