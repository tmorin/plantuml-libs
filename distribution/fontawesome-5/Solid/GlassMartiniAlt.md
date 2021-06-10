# GlassMartiniAlt


```text
fontawesome-5/Solid/GlassMartiniAlt
```

```text
include('fontawesome-5/Solid/GlassMartiniAlt')
```



| Illustration | GlassMartiniAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/GlassMartiniAlt.png) | ![illustration for GlassMartiniAlt](../../fontawesome-5/Solid/GlassMartiniAlt.Local.png) |




## GlassMartiniAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GlassMartiniAlt
include('fontawesome-5/Solid/GlassMartiniAlt')

' renders the element
GlassMartiniAlt('GlassMartiniAlt', 'Glass Martini Alt', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GlassMartiniAlt
include('fontawesome-5/Solid/GlassMartiniAlt')

' renders the element
GlassMartiniAlt('GlassMartiniAlt', 'Glass Martini Alt', 'an optional tech label')
@enduml
```

