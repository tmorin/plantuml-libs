# Rarible


```text
simpleicons-8/R/Rarible
```

```text
include('simpleicons-8/R/Rarible')
```



| Illustration | Rarible |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/R/Rarible.png) | ![illustration for Rarible](../../simpleicons-8/R/Rarible.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RaribleXs>`
- `<$RaribleSm>`
- `<$RaribleMd>`
- `<$RaribleLg>`





## Rarible

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Rarible
include('simpleicons-8/R/Rarible')

' renders the element
Rarible('Rarible', 'Rarible', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rarible
include('simpleicons-8/R/Rarible')

' renders the element
Rarible('Rarible', 'Rarible', 'an optional tech label', 'an optional description')
@enduml
```

