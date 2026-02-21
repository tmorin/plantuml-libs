# Ebox


```text
simpleicons-14/E/Ebox
```

```text
include('simpleicons-14/E/Ebox')
```



| Illustration | Ebox |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Ebox.png) | ![illustration for Ebox](../../simpleicons-14/E/Ebox.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EboxXs>`
- `<$EboxSm>`
- `<$EboxMd>`
- `<$EboxLg>`





## Ebox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ebox
include('simpleicons-14/E/Ebox')

' renders the element
Ebox('Ebox', 'Ebox', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ebox
include('simpleicons-14/E/Ebox')

' renders the element
Ebox('Ebox', 'Ebox', 'an optional tech label', 'an optional description')
@enduml
```

