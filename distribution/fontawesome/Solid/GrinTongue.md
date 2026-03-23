# GrinTongue


```text
fontawesome/Solid/GrinTongue
```

```text
include('fontawesome/Solid/GrinTongue')
```



| Illustration | GrinTongue |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/GrinTongue.png) | ![illustration for GrinTongue](../../fontawesome/Solid/GrinTongue.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GrinTongueXs>`
- `<$GrinTongueSm>`
- `<$GrinTongueMd>`
- `<$GrinTongueLg>`





## GrinTongue

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GrinTongue
include('fontawesome/Solid/GrinTongue')

' renders the element
GrinTongue('GrinTongue', 'Grin Tongue', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GrinTongue
include('fontawesome/Solid/GrinTongue')

' renders the element
GrinTongue('GrinTongue', 'Grin Tongue', 'an optional tech label', 'an optional description')
@enduml
```

