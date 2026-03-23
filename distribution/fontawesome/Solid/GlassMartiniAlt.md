# GlassMartiniAlt


```text
fontawesome/Solid/GlassMartiniAlt
```

```text
include('fontawesome/Solid/GlassMartiniAlt')
```



| Illustration | GlassMartiniAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/GlassMartiniAlt.png) | ![illustration for GlassMartiniAlt](../../fontawesome/Solid/GlassMartiniAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GlassMartiniAltXs>`
- `<$GlassMartiniAltSm>`
- `<$GlassMartiniAltMd>`
- `<$GlassMartiniAltLg>`





## GlassMartiniAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GlassMartiniAlt
include('fontawesome/Solid/GlassMartiniAlt')

' renders the element
GlassMartiniAlt('GlassMartiniAlt', 'Glass Martini Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GlassMartiniAlt
include('fontawesome/Solid/GlassMartiniAlt')

' renders the element
GlassMartiniAlt('GlassMartiniAlt', 'Glass Martini Alt', 'an optional tech label', 'an optional description')
@enduml
```

