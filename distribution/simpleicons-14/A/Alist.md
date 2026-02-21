# Alist


```text
simpleicons-14/A/Alist
```

```text
include('simpleicons-14/A/Alist')
```



| Illustration | Alist |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Alist.png) | ![illustration for Alist](../../simpleicons-14/A/Alist.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AlistXs>`
- `<$AlistSm>`
- `<$AlistMd>`
- `<$AlistLg>`





## Alist

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Alist
include('simpleicons-14/A/Alist')

' renders the element
Alist('Alist', 'Alist', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Alist
include('simpleicons-14/A/Alist')

' renders the element
Alist('Alist', 'Alist', 'an optional tech label', 'an optional description')
@enduml
```

