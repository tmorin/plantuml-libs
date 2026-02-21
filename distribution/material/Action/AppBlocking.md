# AppBlocking


```text
material/Action/AppBlocking
```

```text
include('material/Action/AppBlocking')
```



| Illustration | AppBlocking |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/AppBlocking.png) | ![illustration for AppBlocking](../../material/Action/AppBlocking.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AppBlockingXs>`
- `<$AppBlockingSm>`
- `<$AppBlockingMd>`
- `<$AppBlockingLg>`





## AppBlocking

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element AppBlocking
include('material/Action/AppBlocking')

' renders the element
AppBlocking('AppBlocking', 'App Blocking', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element AppBlocking
include('material/Action/AppBlocking')

' renders the element
AppBlocking('AppBlocking', 'App Blocking', 'an optional tech label', 'an optional description')
@enduml
```

