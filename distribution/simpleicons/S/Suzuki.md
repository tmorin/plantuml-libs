# Suzuki


```text
simpleicons/S/Suzuki
```

```text
include('simpleicons/S/Suzuki')
```



| Illustration | Suzuki |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Suzuki.png) | ![illustration for Suzuki](../../simpleicons/S/Suzuki.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SuzukiXs>`
- `<$SuzukiSm>`
- `<$SuzukiMd>`
- `<$SuzukiLg>`





## Suzuki

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Suzuki
include('simpleicons/S/Suzuki')

' renders the element
Suzuki('Suzuki', 'Suzuki', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Suzuki
include('simpleicons/S/Suzuki')

' renders the element
Suzuki('Suzuki', 'Suzuki', 'an optional tech label', 'an optional description')
@enduml
```

