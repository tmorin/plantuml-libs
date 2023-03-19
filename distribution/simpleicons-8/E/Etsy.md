# Etsy


```text
simpleicons-8/E/Etsy
```

```text
include('simpleicons-8/E/Etsy')
```



| Illustration | Etsy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/E/Etsy.png) | ![illustration for Etsy](../../simpleicons-8/E/Etsy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EtsyXs>`
- `<$EtsySm>`
- `<$EtsyMd>`
- `<$EtsyLg>`





## Etsy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Etsy
include('simpleicons-8/E/Etsy')

' renders the element
Etsy('Etsy', 'Etsy', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Etsy
include('simpleicons-8/E/Etsy')

' renders the element
Etsy('Etsy', 'Etsy', 'an optional tech label', 'an optional description')
@enduml
```

