# Msibusiness


```text
simpleicons-14/M/Msibusiness
```

```text
include('simpleicons-14/M/Msibusiness')
```



| Illustration | Msibusiness |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Msibusiness.png) | ![illustration for Msibusiness](../../simpleicons-14/M/Msibusiness.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MsibusinessXs>`
- `<$MsibusinessSm>`
- `<$MsibusinessMd>`
- `<$MsibusinessLg>`





## Msibusiness

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Msibusiness
include('simpleicons-14/M/Msibusiness')

' renders the element
Msibusiness('Msibusiness', 'Msibusiness', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Msibusiness
include('simpleicons-14/M/Msibusiness')

' renders the element
Msibusiness('Msibusiness', 'Msibusiness', 'an optional tech label', 'an optional description')
@enduml
```

