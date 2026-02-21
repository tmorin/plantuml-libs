# Sitemap


```text
fontawesome/Solid/Sitemap
```

```text
include('fontawesome/Solid/Sitemap')
```



| Illustration | Sitemap |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Sitemap.png) | ![illustration for Sitemap](../../fontawesome/Solid/Sitemap.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SitemapXs>`
- `<$SitemapSm>`
- `<$SitemapMd>`
- `<$SitemapLg>`





## Sitemap

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Sitemap
include('fontawesome/Solid/Sitemap')

' renders the element
Sitemap('Sitemap', 'Sitemap', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sitemap
include('fontawesome/Solid/Sitemap')

' renders the element
Sitemap('Sitemap', 'Sitemap', 'an optional tech label', 'an optional description')
@enduml
```

