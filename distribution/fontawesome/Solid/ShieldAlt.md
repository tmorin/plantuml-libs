# ShieldAlt


```text
fontawesome/Solid/ShieldAlt
```

```text
include('fontawesome/Solid/ShieldAlt')
```



| Illustration | ShieldAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ShieldAlt.png) | ![illustration for ShieldAlt](../../fontawesome/Solid/ShieldAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ShieldAltXs>`
- `<$ShieldAltSm>`
- `<$ShieldAltMd>`
- `<$ShieldAltLg>`





## ShieldAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ShieldAlt
include('fontawesome/Solid/ShieldAlt')

' renders the element
ShieldAlt('ShieldAlt', 'Shield Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ShieldAlt
include('fontawesome/Solid/ShieldAlt')

' renders the element
ShieldAlt('ShieldAlt', 'Shield Alt', 'an optional tech label', 'an optional description')
@enduml
```

