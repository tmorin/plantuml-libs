# Commodore


```text
simpleicons-8/C/Commodore
```

```text
include('simpleicons-8/C/Commodore')
```



| Illustration | Commodore |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/C/Commodore.png) | ![illustration for Commodore](../../simpleicons-8/C/Commodore.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CommodoreXs>`
- `<$CommodoreSm>`
- `<$CommodoreMd>`
- `<$CommodoreLg>`





## Commodore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Commodore
include('simpleicons-8/C/Commodore')

' renders the element
Commodore('Commodore', 'Commodore', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Commodore
include('simpleicons-8/C/Commodore')

' renders the element
Commodore('Commodore', 'Commodore', 'an optional tech label', 'an optional description')
@enduml
```

