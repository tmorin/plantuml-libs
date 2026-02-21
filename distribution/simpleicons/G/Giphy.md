# Giphy


```text
simpleicons/G/Giphy
```

```text
include('simpleicons/G/Giphy')
```



| Illustration | Giphy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Giphy.png) | ![illustration for Giphy](../../simpleicons/G/Giphy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GiphyXs>`
- `<$GiphySm>`
- `<$GiphyMd>`
- `<$GiphyLg>`





## Giphy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Giphy
include('simpleicons/G/Giphy')

' renders the element
Giphy('Giphy', 'Giphy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Giphy
include('simpleicons/G/Giphy')

' renders the element
Giphy('Giphy', 'Giphy', 'an optional tech label', 'an optional description')
@enduml
```

