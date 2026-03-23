# GlassCheers


```text
fontawesome/Solid/GlassCheers
```

```text
include('fontawesome/Solid/GlassCheers')
```



| Illustration | GlassCheers |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/GlassCheers.png) | ![illustration for GlassCheers](../../fontawesome/Solid/GlassCheers.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GlassCheersXs>`
- `<$GlassCheersSm>`
- `<$GlassCheersMd>`
- `<$GlassCheersLg>`





## GlassCheers

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GlassCheers
include('fontawesome/Solid/GlassCheers')

' renders the element
GlassCheers('GlassCheers', 'Glass Cheers', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GlassCheers
include('fontawesome/Solid/GlassCheers')

' renders the element
GlassCheers('GlassCheers', 'Glass Cheers', 'an optional tech label', 'an optional description')
@enduml
```

