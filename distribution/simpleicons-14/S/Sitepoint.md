# Sitepoint


```text
simpleicons-14/S/Sitepoint
```

```text
include('simpleicons-14/S/Sitepoint')
```



| Illustration | Sitepoint |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Sitepoint.png) | ![illustration for Sitepoint](../../simpleicons-14/S/Sitepoint.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SitepointXs>`
- `<$SitepointSm>`
- `<$SitepointMd>`
- `<$SitepointLg>`





## Sitepoint

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Sitepoint
include('simpleicons-14/S/Sitepoint')

' renders the element
Sitepoint('Sitepoint', 'Sitepoint', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sitepoint
include('simpleicons-14/S/Sitepoint')

' renders the element
Sitepoint('Sitepoint', 'Sitepoint', 'an optional tech label', 'an optional description')
@enduml
```

