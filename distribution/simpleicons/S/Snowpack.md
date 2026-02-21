# Snowpack


```text
simpleicons/S/Snowpack
```

```text
include('simpleicons/S/Snowpack')
```



| Illustration | Snowpack |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Snowpack.png) | ![illustration for Snowpack](../../simpleicons/S/Snowpack.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SnowpackXs>`
- `<$SnowpackSm>`
- `<$SnowpackMd>`
- `<$SnowpackLg>`





## Snowpack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Snowpack
include('simpleicons/S/Snowpack')

' renders the element
Snowpack('Snowpack', 'Snowpack', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Snowpack
include('simpleicons/S/Snowpack')

' renders the element
Snowpack('Snowpack', 'Snowpack', 'an optional tech label', 'an optional description')
@enduml
```

