# Snowpack


```text
simpleicons-8/S/Snowpack
```

```text
include('simpleicons-8/S/Snowpack')
```



| Illustration | Snowpack |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Snowpack.png) | ![illustration for Snowpack](../../simpleicons-8/S/Snowpack.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Snowpack
include('simpleicons-8/S/Snowpack')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Snowpack
include('simpleicons-8/S/Snowpack')

' renders the element
Snowpack('Snowpack', 'Snowpack', 'an optional tech label', 'an optional description')
@enduml
```

