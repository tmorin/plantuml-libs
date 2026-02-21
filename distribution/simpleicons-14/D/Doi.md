# Doi


```text
simpleicons-14/D/Doi
```

```text
include('simpleicons-14/D/Doi')
```



| Illustration | Doi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Doi.png) | ![illustration for Doi](../../simpleicons-14/D/Doi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DoiXs>`
- `<$DoiSm>`
- `<$DoiMd>`
- `<$DoiLg>`





## Doi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Doi
include('simpleicons-14/D/Doi')

' renders the element
Doi('Doi', 'Doi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Doi
include('simpleicons-14/D/Doi')

' renders the element
Doi('Doi', 'Doi', 'an optional tech label', 'an optional description')
@enduml
```

