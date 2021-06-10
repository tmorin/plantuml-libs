# GlassMartini


```text
fontawesome-5/Solid/GlassMartini
```

```text
include('fontawesome-5/Solid/GlassMartini')
```



| Illustration | GlassMartini |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/GlassMartini.png) | ![illustration for GlassMartini](../../fontawesome-5/Solid/GlassMartini.Local.png) |




## GlassMartini

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GlassMartini
include('fontawesome-5/Solid/GlassMartini')

' renders the element
GlassMartini('GlassMartini', 'Glass Martini', 'an optional tech label')
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

' loads the Item which embeds the element GlassMartini
include('fontawesome-5/Solid/GlassMartini')

' renders the element
GlassMartini('GlassMartini', 'Glass Martini', 'an optional tech label')
@enduml
```

