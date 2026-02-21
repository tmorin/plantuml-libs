# Blibli


```text
simpleicons/B/Blibli
```

```text
include('simpleicons/B/Blibli')
```



| Illustration | Blibli |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Blibli.png) | ![illustration for Blibli](../../simpleicons/B/Blibli.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BlibliXs>`
- `<$BlibliSm>`
- `<$BlibliMd>`
- `<$BlibliLg>`





## Blibli

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Blibli
include('simpleicons/B/Blibli')

' renders the element
Blibli('Blibli', 'Blibli', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Blibli
include('simpleicons/B/Blibli')

' renders the element
Blibli('Blibli', 'Blibli', 'an optional tech label', 'an optional description')
@enduml
```

