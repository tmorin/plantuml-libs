# Tiktok


```text
fontawesome/Brands/Tiktok
```

```text
include('fontawesome/Brands/Tiktok')
```



| Illustration | Tiktok |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Tiktok.png) | ![illustration for Tiktok](../../fontawesome/Brands/Tiktok.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TiktokXs>`
- `<$TiktokSm>`
- `<$TiktokMd>`
- `<$TiktokLg>`





## Tiktok

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Tiktok
include('fontawesome/Brands/Tiktok')

' renders the element
Tiktok('Tiktok', 'Tiktok', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tiktok
include('fontawesome/Brands/Tiktok')

' renders the element
Tiktok('Tiktok', 'Tiktok', 'an optional tech label', 'an optional description')
@enduml
```

