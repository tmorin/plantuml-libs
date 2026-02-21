# Snapdragon


```text
simpleicons/S/Snapdragon
```

```text
include('simpleicons/S/Snapdragon')
```



| Illustration | Snapdragon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Snapdragon.png) | ![illustration for Snapdragon](../../simpleicons/S/Snapdragon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SnapdragonXs>`
- `<$SnapdragonSm>`
- `<$SnapdragonMd>`
- `<$SnapdragonLg>`





## Snapdragon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Snapdragon
include('simpleicons/S/Snapdragon')

' renders the element
Snapdragon('Snapdragon', 'Snapdragon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Snapdragon
include('simpleicons/S/Snapdragon')

' renders the element
Snapdragon('Snapdragon', 'Snapdragon', 'an optional tech label', 'an optional description')
@enduml
```

