# Sitecore


```text
simpleicons-14/S/Sitecore
```

```text
include('simpleicons-14/S/Sitecore')
```



| Illustration | Sitecore |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Sitecore.png) | ![illustration for Sitecore](../../simpleicons-14/S/Sitecore.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SitecoreXs>`
- `<$SitecoreSm>`
- `<$SitecoreMd>`
- `<$SitecoreLg>`





## Sitecore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Sitecore
include('simpleicons-14/S/Sitecore')

' renders the element
Sitecore('Sitecore', 'Sitecore', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Sitecore
include('simpleicons-14/S/Sitecore')

' renders the element
Sitecore('Sitecore', 'Sitecore', 'an optional tech label', 'an optional description')
@enduml
```

