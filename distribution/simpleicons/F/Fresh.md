# Fresh


```text
simpleicons/F/Fresh
```

```text
include('simpleicons/F/Fresh')
```



| Illustration | Fresh |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Fresh.png) | ![illustration for Fresh](../../simpleicons/F/Fresh.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Fresh
include('simpleicons/F/Fresh')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Fresh
include('simpleicons/F/Fresh')

' renders the element
Fresh('Fresh', 'Fresh', 'an optional tech label', 'an optional description')
@enduml
```

