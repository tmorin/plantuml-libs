# Etsy


```text
simpleicons/E/Etsy
```

```text
include('simpleicons/E/Etsy')
```



| Illustration | Etsy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/E/Etsy.png) | ![illustration for Etsy](../../simpleicons/E/Etsy.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Etsy
include('simpleicons/E/Etsy')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Etsy
include('simpleicons/E/Etsy')

' renders the element
Etsy('Etsy', 'Etsy', 'an optional tech label', 'an optional description')
@enduml
```

