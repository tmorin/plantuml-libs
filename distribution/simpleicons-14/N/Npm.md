# Npm


```text
simpleicons-14/N/Npm
```

```text
include('simpleicons-14/N/Npm')
```



| Illustration | Npm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Npm.png) | ![illustration for Npm](../../simpleicons-14/N/Npm.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NpmXs>`
- `<$NpmSm>`
- `<$NpmMd>`
- `<$NpmLg>`





## Npm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Npm
include('simpleicons-14/N/Npm')

' renders the element
Npm('Npm', 'Npm', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Npm
include('simpleicons-14/N/Npm')

' renders the element
Npm('Npm', 'Npm', 'an optional tech label', 'an optional description')
@enduml
```

