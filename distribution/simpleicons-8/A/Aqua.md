# Aqua


```text
simpleicons-8/A/Aqua
```

```text
include('simpleicons-8/A/Aqua')
```



| Illustration | Aqua |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Aqua.png) | ![illustration for Aqua](../../simpleicons-8/A/Aqua.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AquaXs>`
- `<$AquaSm>`
- `<$AquaMd>`
- `<$AquaLg>`





## Aqua

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Aqua
include('simpleicons-8/A/Aqua')

' renders the element
Aqua('Aqua', 'Aqua', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Aqua
include('simpleicons-8/A/Aqua')

' renders the element
Aqua('Aqua', 'Aqua', 'an optional tech label', 'an optional description')
@enduml
```

