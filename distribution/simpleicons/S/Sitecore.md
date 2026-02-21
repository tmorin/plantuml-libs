# Sitecore


```text
simpleicons/S/Sitecore
```

```text
include('simpleicons/S/Sitecore')
```



| Illustration | Sitecore |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Sitecore.png) | ![illustration for Sitecore](../../simpleicons/S/Sitecore.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Sitecore
include('simpleicons/S/Sitecore')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Sitecore
include('simpleicons/S/Sitecore')

' renders the element
Sitecore('Sitecore', 'Sitecore', 'an optional tech label', 'an optional description')
@enduml
```

