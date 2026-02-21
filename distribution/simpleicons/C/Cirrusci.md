# Cirrusci


```text
simpleicons/C/Cirrusci
```

```text
include('simpleicons/C/Cirrusci')
```



| Illustration | Cirrusci |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Cirrusci.png) | ![illustration for Cirrusci](../../simpleicons/C/Cirrusci.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CirrusciXs>`
- `<$CirrusciSm>`
- `<$CirrusciMd>`
- `<$CirrusciLg>`





## Cirrusci

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Cirrusci
include('simpleicons/C/Cirrusci')

' renders the element
Cirrusci('Cirrusci', 'Cirrusci', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cirrusci
include('simpleicons/C/Cirrusci')

' renders the element
Cirrusci('Cirrusci', 'Cirrusci', 'an optional tech label', 'an optional description')
@enduml
```

