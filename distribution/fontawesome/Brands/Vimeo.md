# Vimeo


```text
fontawesome/Brands/Vimeo
```

```text
include('fontawesome/Brands/Vimeo')
```



| Illustration | Vimeo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Vimeo.png) | ![illustration for Vimeo](../../fontawesome/Brands/Vimeo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VimeoXs>`
- `<$VimeoSm>`
- `<$VimeoMd>`
- `<$VimeoLg>`





## Vimeo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Vimeo
include('fontawesome/Brands/Vimeo')

' renders the element
Vimeo('Vimeo', 'Vimeo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vimeo
include('fontawesome/Brands/Vimeo')

' renders the element
Vimeo('Vimeo', 'Vimeo', 'an optional tech label', 'an optional description')
@enduml
```

