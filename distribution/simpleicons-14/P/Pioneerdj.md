# Pioneerdj


```text
simpleicons-14/P/Pioneerdj
```

```text
include('simpleicons-14/P/Pioneerdj')
```



| Illustration | Pioneerdj |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Pioneerdj.png) | ![illustration for Pioneerdj](../../simpleicons-14/P/Pioneerdj.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Pioneerdj
include('simpleicons-14/P/Pioneerdj')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Pioneerdj
include('simpleicons-14/P/Pioneerdj')

' renders the element
Pioneerdj('Pioneerdj', 'Pioneerdj', 'an optional tech label', 'an optional description')
@enduml
```

