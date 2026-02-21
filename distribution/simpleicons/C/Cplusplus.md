# Cplusplus


```text
simpleicons/C/Cplusplus
```

```text
include('simpleicons/C/Cplusplus')
```



| Illustration | Cplusplus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Cplusplus.png) | ![illustration for Cplusplus](../../simpleicons/C/Cplusplus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CplusplusXs>`
- `<$CplusplusSm>`
- `<$CplusplusMd>`
- `<$CplusplusLg>`





## Cplusplus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Cplusplus
include('simpleicons/C/Cplusplus')

' renders the element
Cplusplus('Cplusplus', 'Cplusplus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cplusplus
include('simpleicons/C/Cplusplus')

' renders the element
Cplusplus('Cplusplus', 'Cplusplus', 'an optional tech label', 'an optional description')
@enduml
```

