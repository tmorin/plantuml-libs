# Cloudflare


```text
fontawesome/Brands/Cloudflare
```

```text
include('fontawesome/Brands/Cloudflare')
```



| Illustration | Cloudflare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Cloudflare.png) | ![illustration for Cloudflare](../../fontawesome/Brands/Cloudflare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CloudflareXs>`
- `<$CloudflareSm>`
- `<$CloudflareMd>`
- `<$CloudflareLg>`





## Cloudflare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Cloudflare
include('fontawesome/Brands/Cloudflare')

' renders the element
Cloudflare('Cloudflare', 'Cloudflare', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cloudflare
include('fontawesome/Brands/Cloudflare')

' renders the element
Cloudflare('Cloudflare', 'Cloudflare', 'an optional tech label', 'an optional description')
@enduml
```

