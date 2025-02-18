# Goland


```text
simpleicons-14/G/Goland
```

```text
include('simpleicons-14/G/Goland')
```



| Illustration | Goland |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Goland.png) | ![illustration for Goland](../../simpleicons-14/G/Goland.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GolandXs>`
- `<$GolandSm>`
- `<$GolandMd>`
- `<$GolandLg>`





## Goland

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Goland
include('simpleicons-14/G/Goland')

' renders the element
Goland('Goland', 'Goland', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Goland
include('simpleicons-14/G/Goland')

' renders the element
Goland('Goland', 'Goland', 'an optional tech label', 'an optional description')
@enduml
```

