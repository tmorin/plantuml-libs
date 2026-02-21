# Pixiv


```text
fontawesome/Brands/Pixiv
```

```text
include('fontawesome/Brands/Pixiv')
```



| Illustration | Pixiv |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Pixiv.png) | ![illustration for Pixiv](../../fontawesome/Brands/Pixiv.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PixivXs>`
- `<$PixivSm>`
- `<$PixivMd>`
- `<$PixivLg>`





## Pixiv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Pixiv
include('fontawesome/Brands/Pixiv')

' renders the element
Pixiv('Pixiv', 'Pixiv', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pixiv
include('fontawesome/Brands/Pixiv')

' renders the element
Pixiv('Pixiv', 'Pixiv', 'an optional tech label', 'an optional description')
@enduml
```

