# Hepsiemlak


```text
simpleicons-14/H/Hepsiemlak
```

```text
include('simpleicons-14/H/Hepsiemlak')
```



| Illustration | Hepsiemlak |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Hepsiemlak.png) | ![illustration for Hepsiemlak](../../simpleicons-14/H/Hepsiemlak.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HepsiemlakXs>`
- `<$HepsiemlakSm>`
- `<$HepsiemlakMd>`
- `<$HepsiemlakLg>`





## Hepsiemlak

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Hepsiemlak
include('simpleicons-14/H/Hepsiemlak')

' renders the element
Hepsiemlak('Hepsiemlak', 'Hepsiemlak', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hepsiemlak
include('simpleicons-14/H/Hepsiemlak')

' renders the element
Hepsiemlak('Hepsiemlak', 'Hepsiemlak', 'an optional tech label', 'an optional description')
@enduml
```

