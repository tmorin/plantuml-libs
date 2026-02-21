# Chinarailway


```text
simpleicons/C/Chinarailway
```

```text
include('simpleicons/C/Chinarailway')
```



| Illustration | Chinarailway |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Chinarailway.png) | ![illustration for Chinarailway](../../simpleicons/C/Chinarailway.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChinarailwayXs>`
- `<$ChinarailwaySm>`
- `<$ChinarailwayMd>`
- `<$ChinarailwayLg>`





## Chinarailway

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Chinarailway
include('simpleicons/C/Chinarailway')

' renders the element
Chinarailway('Chinarailway', 'Chinarailway', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Chinarailway
include('simpleicons/C/Chinarailway')

' renders the element
Chinarailway('Chinarailway', 'Chinarailway', 'an optional tech label', 'an optional description')
@enduml
```

