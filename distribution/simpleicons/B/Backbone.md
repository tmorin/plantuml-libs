# Backbone


```text
simpleicons/B/Backbone
```

```text
include('simpleicons/B/Backbone')
```



| Illustration | Backbone |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Backbone.png) | ![illustration for Backbone](../../simpleicons/B/Backbone.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BackboneXs>`
- `<$BackboneSm>`
- `<$BackboneMd>`
- `<$BackboneLg>`





## Backbone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Backbone
include('simpleicons/B/Backbone')

' renders the element
Backbone('Backbone', 'Backbone', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Backbone
include('simpleicons/B/Backbone')

' renders the element
Backbone('Backbone', 'Backbone', 'an optional tech label', 'an optional description')
@enduml
```

