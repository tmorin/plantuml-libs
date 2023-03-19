# Polymer


```text
material-4/Action/Polymer
```

```text
include('material-4/Action/Polymer')
```



| Illustration | Polymer |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Polymer.png) | ![illustration for Polymer](../../material-4/Action/Polymer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PolymerXs>`
- `<$PolymerSm>`
- `<$PolymerMd>`
- `<$PolymerLg>`





## Polymer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Polymer
include('material-4/Action/Polymer')

' renders the element
Polymer('Polymer', 'Polymer', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Polymer
include('material-4/Action/Polymer')

' renders the element
Polymer('Polymer', 'Polymer', 'an optional tech label', 'an optional description')
@enduml
```

