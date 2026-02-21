# Keploy


```text
simpleicons-14/K/Keploy
```

```text
include('simpleicons-14/K/Keploy')
```



| Illustration | Keploy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/K/Keploy.png) | ![illustration for Keploy](../../simpleicons-14/K/Keploy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KeployXs>`
- `<$KeploySm>`
- `<$KeployMd>`
- `<$KeployLg>`





## Keploy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Keploy
include('simpleicons-14/K/Keploy')

' renders the element
Keploy('Keploy', 'Keploy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Keploy
include('simpleicons-14/K/Keploy')

' renders the element
Keploy('Keploy', 'Keploy', 'an optional tech label', 'an optional description')
@enduml
```

