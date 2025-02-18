# Strapi


```text
simpleicons-14/S/Strapi
```

```text
include('simpleicons-14/S/Strapi')
```



| Illustration | Strapi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Strapi.png) | ![illustration for Strapi](../../simpleicons-14/S/Strapi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StrapiXs>`
- `<$StrapiSm>`
- `<$StrapiMd>`
- `<$StrapiLg>`





## Strapi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Strapi
include('simpleicons-14/S/Strapi')

' renders the element
Strapi('Strapi', 'Strapi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Strapi
include('simpleicons-14/S/Strapi')

' renders the element
Strapi('Strapi', 'Strapi', 'an optional tech label', 'an optional description')
@enduml
```

