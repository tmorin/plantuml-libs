# Travisci


```text
simpleicons-14/T/Travisci
```

```text
include('simpleicons-14/T/Travisci')
```



| Illustration | Travisci |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Travisci.png) | ![illustration for Travisci](../../simpleicons-14/T/Travisci.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TravisciXs>`
- `<$TravisciSm>`
- `<$TravisciMd>`
- `<$TravisciLg>`





## Travisci

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Travisci
include('simpleicons-14/T/Travisci')

' renders the element
Travisci('Travisci', 'Travisci', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Travisci
include('simpleicons-14/T/Travisci')

' renders the element
Travisci('Travisci', 'Travisci', 'an optional tech label', 'an optional description')
@enduml
```

