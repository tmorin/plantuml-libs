# Paramountplus


```text
simpleicons-14/P/Paramountplus
```

```text
include('simpleicons-14/P/Paramountplus')
```



| Illustration | Paramountplus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Paramountplus.png) | ![illustration for Paramountplus](../../simpleicons-14/P/Paramountplus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ParamountplusXs>`
- `<$ParamountplusSm>`
- `<$ParamountplusMd>`
- `<$ParamountplusLg>`





## Paramountplus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Paramountplus
include('simpleicons-14/P/Paramountplus')

' renders the element
Paramountplus('Paramountplus', 'Paramountplus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Paramountplus
include('simpleicons-14/P/Paramountplus')

' renders the element
Paramountplus('Paramountplus', 'Paramountplus', 'an optional tech label', 'an optional description')
@enduml
```

