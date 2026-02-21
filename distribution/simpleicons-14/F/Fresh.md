# Fresh


```text
simpleicons-14/F/Fresh
```

```text
include('simpleicons-14/F/Fresh')
```



| Illustration | Fresh |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Fresh.png) | ![illustration for Fresh](../../simpleicons-14/F/Fresh.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FreshXs>`
- `<$FreshSm>`
- `<$FreshMd>`
- `<$FreshLg>`





## Fresh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Fresh
include('simpleicons-14/F/Fresh')

' renders the element
Fresh('Fresh', 'Fresh', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fresh
include('simpleicons-14/F/Fresh')

' renders the element
Fresh('Fresh', 'Fresh', 'an optional tech label', 'an optional description')
@enduml
```

