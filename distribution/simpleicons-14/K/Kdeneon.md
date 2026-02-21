# Kdeneon


```text
simpleicons-14/K/Kdeneon
```

```text
include('simpleicons-14/K/Kdeneon')
```



| Illustration | Kdeneon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/K/Kdeneon.png) | ![illustration for Kdeneon](../../simpleicons-14/K/Kdeneon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KdeneonXs>`
- `<$KdeneonSm>`
- `<$KdeneonMd>`
- `<$KdeneonLg>`





## Kdeneon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Kdeneon
include('simpleicons-14/K/Kdeneon')

' renders the element
Kdeneon('Kdeneon', 'Kdeneon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kdeneon
include('simpleicons-14/K/Kdeneon')

' renders the element
Kdeneon('Kdeneon', 'Kdeneon', 'an optional tech label', 'an optional description')
@enduml
```

