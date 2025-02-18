# Observable


```text
simpleicons-14/O/Observable
```

```text
include('simpleicons-14/O/Observable')
```



| Illustration | Observable |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/O/Observable.png) | ![illustration for Observable](../../simpleicons-14/O/Observable.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ObservableXs>`
- `<$ObservableSm>`
- `<$ObservableMd>`
- `<$ObservableLg>`





## Observable

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Observable
include('simpleicons-14/O/Observable')

' renders the element
Observable('Observable', 'Observable', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Observable
include('simpleicons-14/O/Observable')

' renders the element
Observable('Observable', 'Observable', 'an optional tech label', 'an optional description')
@enduml
```

