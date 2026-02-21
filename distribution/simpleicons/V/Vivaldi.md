# Vivaldi


```text
simpleicons/V/Vivaldi
```

```text
include('simpleicons/V/Vivaldi')
```



| Illustration | Vivaldi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/V/Vivaldi.png) | ![illustration for Vivaldi](../../simpleicons/V/Vivaldi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VivaldiXs>`
- `<$VivaldiSm>`
- `<$VivaldiMd>`
- `<$VivaldiLg>`





## Vivaldi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Vivaldi
include('simpleicons/V/Vivaldi')

' renders the element
Vivaldi('Vivaldi', 'Vivaldi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vivaldi
include('simpleicons/V/Vivaldi')

' renders the element
Vivaldi('Vivaldi', 'Vivaldi', 'an optional tech label', 'an optional description')
@enduml
```

