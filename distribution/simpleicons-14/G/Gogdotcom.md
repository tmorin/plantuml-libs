# Gogdotcom


```text
simpleicons-14/G/Gogdotcom
```

```text
include('simpleicons-14/G/Gogdotcom')
```



| Illustration | Gogdotcom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Gogdotcom.png) | ![illustration for Gogdotcom](../../simpleicons-14/G/Gogdotcom.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GogdotcomXs>`
- `<$GogdotcomSm>`
- `<$GogdotcomMd>`
- `<$GogdotcomLg>`





## Gogdotcom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Gogdotcom
include('simpleicons-14/G/Gogdotcom')

' renders the element
Gogdotcom('Gogdotcom', 'Gogdotcom', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gogdotcom
include('simpleicons-14/G/Gogdotcom')

' renders the element
Gogdotcom('Gogdotcom', 'Gogdotcom', 'an optional tech label', 'an optional description')
@enduml
```

