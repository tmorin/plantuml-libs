# GlideG


```text
fontawesome/Brands/GlideG
```

```text
include('fontawesome/Brands/GlideG')
```



| Illustration | GlideG |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/GlideG.png) | ![illustration for GlideG](../../fontawesome/Brands/GlideG.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GlideGXs>`
- `<$GlideGSm>`
- `<$GlideGMd>`
- `<$GlideGLg>`





## GlideG

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GlideG
include('fontawesome/Brands/GlideG')

' renders the element
GlideG('GlideG', 'Glide G', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GlideG
include('fontawesome/Brands/GlideG')

' renders the element
GlideG('GlideG', 'Glide G', 'an optional tech label', 'an optional description')
@enduml
```

