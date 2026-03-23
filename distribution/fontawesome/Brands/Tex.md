# Tex


```text
fontawesome/Brands/Tex
```

```text
include('fontawesome/Brands/Tex')
```



| Illustration | Tex |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Tex.png) | ![illustration for Tex](../../fontawesome/Brands/Tex.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TexXs>`
- `<$TexSm>`
- `<$TexMd>`
- `<$TexLg>`





## Tex

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Tex
include('fontawesome/Brands/Tex')

' renders the element
Tex('Tex', 'Tex', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tex
include('fontawesome/Brands/Tex')

' renders the element
Tex('Tex', 'Tex', 'an optional tech label', 'an optional description')
@enduml
```

