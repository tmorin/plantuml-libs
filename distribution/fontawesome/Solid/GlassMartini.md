# GlassMartini


```text
fontawesome/Solid/GlassMartini
```

```text
include('fontawesome/Solid/GlassMartini')
```



| Illustration | GlassMartini |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/GlassMartini.png) | ![illustration for GlassMartini](../../fontawesome/Solid/GlassMartini.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GlassMartiniXs>`
- `<$GlassMartiniSm>`
- `<$GlassMartiniMd>`
- `<$GlassMartiniLg>`





## GlassMartini

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GlassMartini
include('fontawesome/Solid/GlassMartini')

' renders the element
GlassMartini('GlassMartini', 'Glass Martini', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GlassMartini
include('fontawesome/Solid/GlassMartini')

' renders the element
GlassMartini('GlassMartini', 'Glass Martini', 'an optional tech label', 'an optional description')
@enduml
```

