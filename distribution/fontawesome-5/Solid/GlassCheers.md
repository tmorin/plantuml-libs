# GlassCheers


```text
fontawesome-5/Solid/GlassCheers
```

```text
include('fontawesome-5/Solid/GlassCheers')
```



| Illustration | GlassCheers |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/GlassCheers.png) | ![illustration for GlassCheers](../../fontawesome-5/Solid/GlassCheers.Local.png) |




## GlassCheers

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GlassCheers
include('fontawesome-5/Solid/GlassCheers')

' renders the element
GlassCheers('GlassCheers', 'Glass Cheers', 'an optional tech label')
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

' loads the Item which embeds the element GlassCheers
include('fontawesome-5/Solid/GlassCheers')

' renders the element
GlassCheers('GlassCheers', 'Glass Cheers', 'an optional tech label')
@enduml
```

