# Yamahacorporation


```text
simpleicons-14/Y/Yamahacorporation
```

```text
include('simpleicons-14/Y/Yamahacorporation')
```



| Illustration | Yamahacorporation |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Y/Yamahacorporation.png) | ![illustration for Yamahacorporation](../../simpleicons-14/Y/Yamahacorporation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$YamahacorporationXs>`
- `<$YamahacorporationSm>`
- `<$YamahacorporationMd>`
- `<$YamahacorporationLg>`





## Yamahacorporation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Yamahacorporation
include('simpleicons-14/Y/Yamahacorporation')

' renders the element
Yamahacorporation('Yamahacorporation', 'Yamahacorporation', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Yamahacorporation
include('simpleicons-14/Y/Yamahacorporation')

' renders the element
Yamahacorporation('Yamahacorporation', 'Yamahacorporation', 'an optional tech label', 'an optional description')
@enduml
```

