# Apifox


```text
simpleicons-14/A/Apifox
```

```text
include('simpleicons-14/A/Apifox')
```



| Illustration | Apifox |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Apifox.png) | ![illustration for Apifox](../../simpleicons-14/A/Apifox.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApifoxXs>`
- `<$ApifoxSm>`
- `<$ApifoxMd>`
- `<$ApifoxLg>`





## Apifox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Apifox
include('simpleicons-14/A/Apifox')

' renders the element
Apifox('Apifox', 'Apifox', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Apifox
include('simpleicons-14/A/Apifox')

' renders the element
Apifox('Apifox', 'Apifox', 'an optional tech label', 'an optional description')
@enduml
```

