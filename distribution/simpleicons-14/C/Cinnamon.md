# Cinnamon


```text
simpleicons-14/C/Cinnamon
```

```text
include('simpleicons-14/C/Cinnamon')
```



| Illustration | Cinnamon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Cinnamon.png) | ![illustration for Cinnamon](../../simpleicons-14/C/Cinnamon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CinnamonXs>`
- `<$CinnamonSm>`
- `<$CinnamonMd>`
- `<$CinnamonLg>`





## Cinnamon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Cinnamon
include('simpleicons-14/C/Cinnamon')

' renders the element
Cinnamon('Cinnamon', 'Cinnamon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cinnamon
include('simpleicons-14/C/Cinnamon')

' renders the element
Cinnamon('Cinnamon', 'Cinnamon', 'an optional tech label', 'an optional description')
@enduml
```

