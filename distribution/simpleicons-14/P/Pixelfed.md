# Pixelfed


```text
simpleicons-14/P/Pixelfed
```

```text
include('simpleicons-14/P/Pixelfed')
```



| Illustration | Pixelfed |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Pixelfed.png) | ![illustration for Pixelfed](../../simpleicons-14/P/Pixelfed.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PixelfedXs>`
- `<$PixelfedSm>`
- `<$PixelfedMd>`
- `<$PixelfedLg>`





## Pixelfed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Pixelfed
include('simpleicons-14/P/Pixelfed')

' renders the element
Pixelfed('Pixelfed', 'Pixelfed', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pixelfed
include('simpleicons-14/P/Pixelfed')

' renders the element
Pixelfed('Pixelfed', 'Pixelfed', 'an optional tech label', 'an optional description')
@enduml
```

