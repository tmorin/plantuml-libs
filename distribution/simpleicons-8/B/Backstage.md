# Backstage


```text
simpleicons-8/B/Backstage
```

```text
include('simpleicons-8/B/Backstage')
```



| Illustration | Backstage |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/B/Backstage.png) | ![illustration for Backstage](../../simpleicons-8/B/Backstage.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BackstageXs>`
- `<$BackstageSm>`
- `<$BackstageMd>`
- `<$BackstageLg>`





## Backstage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Backstage
include('simpleicons-8/B/Backstage')

' renders the element
Backstage('Backstage', 'Backstage', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Backstage
include('simpleicons-8/B/Backstage')

' renders the element
Backstage('Backstage', 'Backstage', 'an optional tech label', 'an optional description')
@enduml
```

