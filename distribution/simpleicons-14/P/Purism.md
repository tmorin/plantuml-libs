# Purism


```text
simpleicons-14/P/Purism
```

```text
include('simpleicons-14/P/Purism')
```



| Illustration | Purism |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Purism.png) | ![illustration for Purism](../../simpleicons-14/P/Purism.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PurismXs>`
- `<$PurismSm>`
- `<$PurismMd>`
- `<$PurismLg>`





## Purism

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Purism
include('simpleicons-14/P/Purism')

' renders the element
Purism('Purism', 'Purism', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Purism
include('simpleicons-14/P/Purism')

' renders the element
Purism('Purism', 'Purism', 'an optional tech label', 'an optional description')
@enduml
```

