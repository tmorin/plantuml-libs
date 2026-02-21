# Pioneerdj


```text
simpleicons/P/Pioneerdj
```

```text
include('simpleicons/P/Pioneerdj')
```



| Illustration | Pioneerdj |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Pioneerdj.png) | ![illustration for Pioneerdj](../../simpleicons/P/Pioneerdj.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PioneerdjXs>`
- `<$PioneerdjSm>`
- `<$PioneerdjMd>`
- `<$PioneerdjLg>`





## Pioneerdj

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Pioneerdj
include('simpleicons/P/Pioneerdj')

' renders the element
Pioneerdj('Pioneerdj', 'Pioneerdj', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pioneerdj
include('simpleicons/P/Pioneerdj')

' renders the element
Pioneerdj('Pioneerdj', 'Pioneerdj', 'an optional tech label', 'an optional description')
@enduml
```

